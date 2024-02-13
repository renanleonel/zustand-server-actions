'use server';

import { useClientStore } from '@/store/client-store';
import { revalidatePath } from 'next/cache';

export async function getClients() {
    const req = [
        {
            id: '1',
            name: 'John Doe',
            email: 'test1@gmail.com',
        },
        {
            id: '2',
            name: 'Jane Doe',
            email: 'test2@gmail.com',
        },
    ];

    useClientStore.getState().setClients(req);
    revalidatePath('/');
}

export async function createClient(formData: FormData) {
    const client = {
        id: crypto.randomUUID(),
        name: formData.get('name') as string,
        email: formData.get('email') as string,
    };

    useClientStore.getState().addClient(client);
    revalidatePath('/');
}
