import '@/styles/globals.css';
import { GeistSans } from 'geist/font/sans';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Zustand + Server Actions',
    description: 'Testing Zustand in Server/Client components',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR" className={GeistSans.className}>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="manifest" href="/manifest.json" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="black-translucent"
                />
                <meta
                    name="viewport"
                    content="initial-scale=1, viewport-fit=cover"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
