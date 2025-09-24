"use client";

import { useCount } from "@/store/CountProvider";
import { trpc } from "@/trpc/client";

export function ClientGreeting() {
  const greeting = trpc.hello.useQuery({ text: "world" });
  const { count, increment, decrement, reset } = useCount()();

  if (!greeting.data) return <div>Loading...</div>;

  return (
    <div>
      <div>{greeting.data.greeting}</div>
      <div style={{ marginTop: "1rem" }}>
        <div>Count: {count}</div>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement} style={{ marginLeft: "0.5rem" }}>
          Decrease
        </button>
        <button onClick={reset} style={{ marginLeft: "0.5rem" }}>
          Reset
        </button>
      </div>
    </div>
  );
}
