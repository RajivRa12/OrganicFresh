import type {Metadata} from 'next';
import { AppShell } from '@/components/AppShell';
import { Toaster } from "@/components/ui/toaster"
import { MUIProvider } from '@/components/MUIProvider';
import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});


export const metadata: Metadata = {
      title: 'organicFresh',
          description: 'A B2B platform for farmers by organicFresh.co.in',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <MUIProvider>
          <AppShell>{children}</AppShell>
          <Toaster />
        </MUIProvider>
      </body>
    </html>
  );
}
