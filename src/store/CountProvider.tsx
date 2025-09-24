"use client";
import { createContext, useContext, useState } from "react";
import { create } from "zustand";

const createStore = (count: number) =>
  create<{
    count: number;
    setCount: (cart: number) => void;
  }>((set) => ({
    count,
    setCount(count: number) {
      set({ count });
    },
  }));

const CountContext = createContext<ReturnType<typeof createStore> | null>(null);

export const useCount = () => {
  if (!CountContext) {
    throw new Error("useCount must be used within a CountProvider");
  }
  // biome-ignore lint/style/noNonNullAssertion: error will be thrown for null values
  // biome-ignore lint/correctness/useHookAtTopLevel: Error will be thrown if hook is not initialized
  return useContext(CountContext)!;
};

const CountProvider = ({
  count = 0,
  children,
}: {
  count?: number;
  children: React.ReactNode;
}) => {
  const [store] = useState(() => createStore(count));
  return (
    <CountContext.Provider value={store}>{children}</CountContext.Provider>
  );
};

export default CountProvider;
