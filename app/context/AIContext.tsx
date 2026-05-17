"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

type AIContextType = {
  globalLoading: boolean;

  setGlobalLoading: (
    value: boolean
  ) => void;
};

const AIContext =
  createContext<
    AIContextType | undefined
  >(undefined);

export function AIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [
    globalLoading,
    setGlobalLoading,
  ] = useState(false);

  return (
    <AIContext.Provider
      value={{
        globalLoading,
        setGlobalLoading,
      }}
    >
      {children}
    </AIContext.Provider>
  );
}

export function useAI() {
  const context =
    useContext(AIContext);

  if (!context) {
    throw new Error(
      "useAI must be used inside AIProvider"
    );
  }

  return context;
}