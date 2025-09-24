"use client";
import { createContext, useContext, useState } from "react";
import { create } from "zustand";

type CountStore = {
  count: number;
  setCount: (count: number) => void;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

const createStore = (count: number) =>
  create<CountStore>((set) => ({
    count,
    setCount(count: number) {
      set({ count });
    },
    increment() {
      set((state) => ({ count: state.count + 1 }));
    },
    decrement() {
      set((state) => ({ count: state.count - 1 }));
    },
    reset() {
      set({ count: 0 });
    },
  }));

const CountContext = createContext<ReturnType<typeof createStore> | null>(null);

export const useCount = () => {
  if (!CountContext) {
    throw new Error("useCount must be used within a CountProvider");
  }
  // biome-ignore lint/style/noNonNullAssertion: error will be thrown for null values
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
