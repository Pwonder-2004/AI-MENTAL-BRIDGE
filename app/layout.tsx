import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI-MENTALBRIDGE',
  description: 'Your Collective Digital Brain.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        {/* Antialiased styles text quality better karta hai */}
        <body className="antialiased font-sans text-zinc-100 bg-black">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}