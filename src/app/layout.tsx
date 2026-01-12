import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SAP Security Expert Hub',
  description: 'Your central resource for SAP security insights and expertise.',
  icons: {
    icon: '/fav.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Source+Sans+Pro:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
