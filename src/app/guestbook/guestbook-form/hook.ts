import * as React from 'react';
import { toast } from 'sonner';

import { useAuthContext } from '@/context/auth';
import { useMessagesContext } from '@/context/messages';
import createSupabaseCLient from '@/services/supabase-client';

const supabase = createSupabaseCLient();

interface ILoading {
  submit: boolean;
  logOut: boolean;
}

const useGuestBookForm = () => {
  const { setUser, user } = useAuthContext();
  const { messages, setMessages, count, setCount } = useMessagesContext();
  const [isLoading, setIsLoading] = React.useState<ILoading>({
    submit: false,
    logOut: false,
  });

  const [message, setMessage] = React.useState<string>('');

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
    if (message.length === 0 || !user) return;

    setIsLoading({ ...isLoading, submit: true });
    const { error } = await supabase.from('messages').insert({
      message,
    });

    setIsLoading({ ...isLoading, submit: false });
    if (error) return toast.error(error.message);

    toast.success('Thanks for submit to my GuestBook 🙏');
    setMessage('');
    setMessages([
      {
        id: Math.random(),
        message: message,
        provider: user.app_metadata.provider ?? '',
        userName: user.user_metadata.user_name,
        profileId: user.id,
        createdAt: new Date().toString(),
        fullName: user.user_metadata.full_name,
        avatar: user.user_metadata.avatar_url,
      },
      ...messages,
    ]);
    setCount(count + 1);
  };

  const data = { isLoading, message, user };
  const action = { setMessage, submitHandler, logOutHandler };
  return { data, action };
};

export default useGuestBookForm;
