import './globals.css';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
const h = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-h' });
const b = DM_Sans({ subsets: ['latin'], variable: '--font-b' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${h.variable} ${b.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}