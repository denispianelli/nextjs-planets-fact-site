import type { Metadata } from 'next';
import { Antonio } from 'next/font/google';

import './globals.css';

const antonio = Antonio({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Planets Fact',
    default: 'Planets Fact',
  },
  description: 'Frontend Mentor Challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={antonio.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
