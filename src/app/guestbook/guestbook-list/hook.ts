import * as React from 'react';
import { toast } from 'sonner';

import { useMessagesContext } from '@/components/provider/messages';

import createSupabaseCLient from '@/services/supabase-client';

import { IMessage } from '@/types';

const supabase = createSupabaseCLient();

interface FechingState {
  isLoading: boolean;
  range: {
    from: number;
    to: number;
  };
}
const useGuestBookList = () => {
  const [fechingState, setFechingState] = React.useState<FechingState>({
    isLoading: false,
    range: {
      from: 0,
      to: 2,
    },
  });
  const { messages, setMessages, count, setCount } = useMessagesContext();

  const getMessages = async () => {
    setFechingState({ ...fechingState, isLoading: true });
    const { data, error } = await supabase
      .from('messages')
      .select('*, profiles(*)')
      .range(fechingState.range.from, fechingState.range.to)
      .order('created_at', {
        ascending: false,
      });

    if (error) {
      setFechingState({ ...fechingState, isLoading: false });
      toast.error(error.message);
      return;
    }

    if (data.length === 0) {
      setFechingState({ ...fechingState, isLoading: false });
      return;
    }

    const temp: IMessage[] = [];
    for (let i = 0; i < data.length; i++) {
      const message: IMessage = {
        id: data[i].id,
        profileId: data[i].profile_id,
        message: data[i].message,
        avatar: data[i].profiles.avatar,
        fullName: data[i].profiles.full_name,
        userName: data[i].profiles.user_name,
        provider: data[i].profiles.provider,
        createdAt: data[i].created_at,
      };
      temp.push(message);
    }

    if (messages.length > 0) {
      setMessages([...messages, ...temp]);
    } else {
      setMessages(temp);
    }
    setFechingState({ ...fechingState, isLoading: false });
  };

  const getCount = async () => {
    const { data, error } = await supabase.rpc('count_messages');
    if (error) return;

    setCount(data);
  };

  const loadMore = () => {
    setFechingState((old) => {
      return {
        ...old,
        range: {
          from: old.range.from + 3,
          to: old.range.to + 3,
        },
      };
    });
  };

  React.useEffect(() => {
    getMessages();
  }, [fechingState.range]);

  React.useEffect(() => {
    getCount();
  }, []);

  const data = { messages, fechingState, count };
  const action = { loadMore };
  return { data, action };
};

export default useGuestBookList;
