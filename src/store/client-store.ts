import { Client } from '@/types';
import { create } from 'zustand';

type ClientStore = {
    clients: Client[];
    setClients: (clients: Client[]) => void;
    addClient: (client: Client) => void;
};

export const useClientStore = create<ClientStore>((set) => ({
    clients: [],
    setClients: (clients) => set({ clients }),
    addClient: (client) =>
        set((state) => ({ clients: [...state.clients, client] })),
}));
