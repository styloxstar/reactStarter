import { useMutation, useQuery } from '@tanstack/react-query'
import { queryClient } from './queryClient'

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!res.ok) throw new Error('failed')
  return res.json()
}

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })
}


const addUsers = async (userInfo) => {

    console.log("Adding user with info:", userInfo);
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
    });
    if (!res.ok) throw new Error('Failed to add user');
    return res.json();
}

export function useAddUser() {
    return useMutation({
        mutationFn: addUsers,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });
}