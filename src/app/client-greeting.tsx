'use client';

import { trpc } from "@/trpc/client";

// <-- hooks can only be used in client components


export function ClientGreeting() {
  const greeting = trpc.hello.useQuery({ text: 'world' });
  const users = trpc.getUsers.useQuery();

  if (!greeting.data || !users.data) return <div>Loading...</div>;


  return (
  <div>
  <div>{greeting.data.greeting}</div>
          <div>
            <h2>Users from Database:</h2>
            <ul>
              {users.data.map((user) => (
                <li key={user.id}>{user.name} - {user.email}</li>
              ))}
            </ul>
          </div>
</div>
  )
}