import Link from 'next/link';
import { createClient, getClients } from '@/lib/actions';
import { useClientStore } from '@/store/client-store';

// using zustand in a server component
const Page = async () => {
    const clients = useClientStore.getState().clients;

    if (clients.length === 0) await getClients();

    return (
        <main className="flex flex-col min-h-screen justify-center items-center bg-[#101010] text-white space-y-4">
            <Link href="/client">Client</Link>
            <form action={createClient} className="flex gap-2 text-black">
                <input type="text" name="name" />
                <input type="email" name="email" />
                <button type="submit" className="text-white">
                    Add Client
                </button>
            </form>
            <div>
                {clients.map((client) => (
                    <div key={client.id}>
                        <h2>{client.name}</h2>
                        <p>{client.email}</p>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Page;
