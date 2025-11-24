import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'HSA Photography Portfolio',
  description: 'Professional photography portfolio showcasing amazing photography work',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased" style={{
        backgroundImage: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)'
      }}>
        {children}
      </body>
    </html>
  );
}
