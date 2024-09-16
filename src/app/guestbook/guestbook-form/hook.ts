import { User } from '@supabase/supabase-js';
import * as React from 'react';
import { toast } from 'sonner';

import createSupabaseCLient from '@/services/supabase-client';

interface ILoading {
  submit: boolean;
  logOut: boolean;
}

const useGuestBookForm = () => {
  const supabase = createSupabaseCLient();
  const [user, setUser] = React.useState<User | null>(null);
  const [isLoading, setIsLoading] = React.useState<ILoading>({
    submit: false,
    logOut: false,
  });
  const [message, setMessage] = React.useState<string>('');

  const auth = async () => {
    const { data, error } = await supabase.auth.getUser();

    if (!error) {
      setUser(data.user);
    }
  };

  const logOutHandler = async () => {
    setIsLoading({ ...isLoading, logOut: true });
    const { error } = await supabase.auth.signOut();

    setIsLoading({ ...isLoading, logOut: false });

    if (error) return toast.error(error.message);

    toast.success('Log out success!');
    setUser(null);
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.length === 0) return;
    setIsLoading({ ...isLoading, submit: true });
    const { error } = await supabase.from('guestbook').insert({
      avatar: user?.user_metadata.avatar_url,
      message,
      github_url:
        user?.app_metadata.provider === 'github'
          ? `https://github.com/${user?.user_metadata.user_name}`
          : null,
      full_name: user?.user_metadata.full_name,
      email: user?.user_metadata.email,
    });

    setIsLoading({ ...isLoading, submit: false });
    if (error) return toast.error(error.message);

    toast.success('Thanks for submit to my GuestBook 🙏');
  };

  React.useEffect(() => {
    auth();
  }, []);

  const data = { isLoading, message, user };
  const action = { setMessage, submitHandler, logOutHandler };
  return { data, action };
};

export default useGuestBookForm;
