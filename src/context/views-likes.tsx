'use client';

import * as React from 'react';

interface IState {
  views: number;
  likes: number;
}

interface ILikesViewsContext {
  state: IState;
  setState: React.Dispatch<React.SetStateAction<IState>>;
}
const LikesViewsContext = React.createContext<ILikesViewsContext>({
  state: {
    views: 0,
    likes: 0,
  },
  setState: () => {},
});

export const LikesViewsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, setState] = React.useState<IState>({
    views: 0,
    likes: 0,
  });
  return (
    <LikesViewsContext.Provider value={{ state, setState }}>
      {children}
    </LikesViewsContext.Provider>
  );
};

export const useLikesViewsContext = () => React.useContext(LikesViewsContext);
