'use client';

import * as React from 'react';

import { IMessage } from '@/types';

interface IMessagesContext {
  messages: IMessage[];
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const MessagesContext = React.createContext<IMessagesContext>({
  messages: [],
  setMessages: () => {},
  count: 0,
  setCount: () => {},
});
export const MessagesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [messages, setMessages] = React.useState<IMessage[]>([]);
  const [count, setCount] = React.useState(0);

  return (
    <MessagesContext.Provider
      value={{ messages, setMessages, count, setCount }}
    >
      {children}
    </MessagesContext.Provider>
  );
};

export const useMessagesContext = () => {
  return React.useContext(MessagesContext);
};
