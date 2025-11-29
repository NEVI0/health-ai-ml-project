'use client';

import { createContext, useContext, useState } from 'react';

export interface Result {
  diabetic: boolean;
  probability: number;
  message: string;
}

interface HomeContextProps {
  result: Result | null;
  setResult(result: Result | null): void;

  error: string;
  setError(error: string): void;
}

const HomeContext = createContext<HomeContextProps>({} as HomeContextProps);

export function HomeProvider({ children }: { children: React.ReactNode }) {
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string>('');

  return (
    <HomeContext.Provider value={{ result, setResult, error, setError }}>
      {children}
    </HomeContext.Provider>
  );
}

export function useHomeContext() {
  const context = useContext(HomeContext);

  if (!context) {
    throw new Error(
      'You must use "useHomeContext" within a "HomeContext" context'
    );
  }

  return context;
}
