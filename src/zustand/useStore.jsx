import { create } from 'zustand'
import { reset } from '../redux-toolkit/slices/CounterSlice'


export const useStore = create((set) => ({
    count: 0,
    enableStatus: false,
    usersData: [],
  increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count > 0 ? state.count - 1 : 0 })),
    reset: () => set({ count: 0 }),
    incrementByAmount: (amount) => set((state) => ({ count: state.count + amount })),
    setEnableStatus: (status) => set((state) => ({ enableStatus: status })),
    fetchUsers: async () => {
        set((state) => ({ usersData: [], status: 'loading' }));
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            set((state) => ({ usersData: data, status: 'succeeded' }));
        } catch (error) {
            set((state) => ({ usersData: [], status: 'failed' }));
        }
    },
}))
