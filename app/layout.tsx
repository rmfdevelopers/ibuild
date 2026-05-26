import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';

const heading = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'], 
  variable: '--font-heading' 
});

const body = DM_Sans({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '700'], 
  variable: '--font-body' 
});

export const metadata = {
  title: 'iBuild | Bespoke Luxury Woodworking',
  description: 'Bespoke furniture and high-end woodworks for visionary brands and modern homes in Lagos, Nigeria.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${heading.variable} ${body.variable} font-sans bg-primary antialiased`}>
        {children}
      </body>
    </html>
  );
}