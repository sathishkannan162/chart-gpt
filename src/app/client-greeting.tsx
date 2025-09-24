"use client";

import { useCount } from "@/store/CountProvider";
import { trpc } from "@/trpc/client";

export function ClientGreeting() {
  const greeting = trpc.hello.useQuery({ text: "world" });
  const { count, setCount } = useCount()();

  if (!greeting.data) return <div>Loading...</div>;

  return (
    <div>
      <div>{greeting.data.greeting}</div>
      <div style={{ marginTop: "1rem" }}>
        <div>Count: {count}</div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button
          onClick={() => setCount(count - 1)}
          style={{ marginLeft: "0.5rem" }}
        >
          Decrease
        </button>
        <button onClick={() => setCount(0)} style={{ marginLeft: "0.5rem" }}>
          Reset
        </button>
      </div>
    </div>
  );
}
