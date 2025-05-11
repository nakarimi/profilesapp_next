import './globals.css';
import { Inter } from 'next/font/google';
import { AuthProvider } from './context/AuthContext';
import './config/amplify';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Profiles App',
  description: 'A Next.js application with AWS Amplify authentication',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
