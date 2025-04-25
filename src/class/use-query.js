import React from 'react';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';

// Create a client
const queryClient = new QueryClient();

const fetchUsers = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  return data;
};

const Users = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          <strong>{user.name}</strong> — {user.email}
        </li>
      ))}
    </ul>
  );
};

const ReactQuery = () =>{
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Users List</h1>
        <Users />
      </div>
    </QueryClientProvider>
  );
}
export default ReactQuery;
