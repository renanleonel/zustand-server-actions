'use client';

import { useClientStore } from '@/store/client-store';

// using zustand in a client component
const Page = () => {
    const clients = useClientStore((state) => state.clients);
    const addClient = useClientStore((state) => state.addClient);

    const createClient = async () => {
        const client = {
            id: crypto.randomUUID(),
            name: 'test',
            email: 'test@gmail.com',
        };

        addClient(client);
    };

    return (
        <main className="flex flex-col min-h-screen justify-center items-center bg-[#101010] text-white">
            {clients.map((client) => (
                <div key={client.id}>
                    <p>{client.id}</p>
                    <h2>{client.name}</h2>
                    <p>{client.email}</p>
                </div>
            ))}
            <button onClick={createClient}>Add Client</button>
        </main>
    );
};

export default Page;
