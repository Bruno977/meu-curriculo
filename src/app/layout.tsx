import { Sidebar } from '@/components/Sidebar';
import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bruno Rodrigues',
  description: 'Meu Curriculo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${nunito.className} bg-zinc-950 text-white`}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
