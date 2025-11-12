import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';

import '@/app/css/globals.css';

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Health.ai',
  description:
    'Saiba em instantes se você tem diabetes ou não apenas informando alguns dados simples!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={sourceSans3.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
