'use client';

import { User } from '@supabase/supabase-js';
import * as React from 'react';

import createSupabaseCLient from '@/services/supabase-client';

interface IAuthContext {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = React.createContext<IAuthContext>({
  user: null,
  setUser: () => {},
});

const supabase = createSupabaseCLient();

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<User | null>(null);

  const auth = async () => {
    const { data, error } = await supabase.auth.getUser();

    if (!error) {
      setUser(data.user);
    }
  };

  React.useEffect(() => {
    auth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return React.useContext(AuthContext);
};
