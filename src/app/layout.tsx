'use client';

import { Poppins } from 'next/font/google';
import './globals.css';
import StoreProvider from '@/store/StoreProvider';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
interface IRootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayoutProps) {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line global-require
    const { worker } = require('@/mocks/browser');
    worker.start();
  }

  return (
    <html lang="en">
      <body className={poppins.className}>
        <StoreProvider>
          <main>{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}
