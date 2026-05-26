'use client';
import { useState, useEffect, useRef } from 'react';
import * as Lucide from 'lucide-react';
import Image from 'next/image';

const useScrollReveal = (threshold = 0.15) => {
  const [v, setV] = useState(false); 
  const ref = useRef(null);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && setV(true), { threshold });
    if (ref.current) o.observe(ref.current); 
    return () => o.disconnect();
  }, []); 
  return { ref, v };
};

function SafeImage({ src, alt, fill, className, priority }: any) {
  const [e, setE] = useState(false);
  if (e) return <div className={`bg-neutral-900 flex items-center justify-center ${className}`}><Lucide.ImageOff className="opacity-20"/></div>;
  return <Image src={src} alt={alt} fill={fill} className={className} priority={priority} onError={() => setE(true)} unoptimized />;
}

export default function Page() {
  const { ref, v } = useScrollReveal();
  return (
    <main className="bg-black text-white min-h-screen" ref={ref}>
      <section className={`bg-black text-white py-40 ${v ? 'animate-slideUp' : ''}`}>
        <div className="container mx-auto p-4">
          <h1 className="text-6xl font-heading tracking-tighter leading-[0.9]">Crafting the Soul of Your Living Space</h1>
          <p className="text-lg font-sans">From luxury home interiors to portable brand stands, we define sophistication in wood.</p>
          <button className="bg-primary text-white px-4 py-2 rounded">View Collection</button>
        </div>
      </section>
      <section className="bg-secondary text-black py-20">
        <div className="container mx-auto p-4">
          <h2 className="text-5xl font-heading tracking-tighter leading-[0.9]">The iBuild Standard</h2>
          <p className="text-lg font-sans">Where tradition meets modern innovation</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <h3 className="text-3xl font-heading tracking-tighter leading-[0.9]">Master Craftsmanship</h3>
              <p className="text-lg font-sans">Every piece is hand-finished by master woodworkers in our Lagos workshop.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <h3 className="text-3xl font-heading tracking-tighter leading-[0.9]">Innovative Design</h3>
              <p className="text-lg font-sans">Pioneering premium collapsible technology for versatile brand displays.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <h3 className="text-3xl font-heading tracking-tighter leading-[0.9]">Tailored Solutions</h3>
              <p className="text-lg font-sans">Bespoke interior consultations to fit your specific spatial requirements.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black text-white py-40">
        <div className="container mx-auto p-4">
          <h2 className="text-5xl font-heading tracking-tighter leading-[0.9]">Curated Catalog</h2>
          <p className="text-lg font-sans">Premium pieces for premium spaces</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <h3 className="text-3xl font-heading tracking-tighter leading-[0.9]">Artisan Oak Dining Table</h3>
              <p className="text-lg font-sans">Handcrafted solid oak centerpiece for modern luxury dining rooms.</p>
              <p className="text-lg font-sans">₦850,000</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <h3 className="text-3xl font-heading tracking-tighter leading-[0.9]">The Signature Collapsible Stand</h3>
              <p className="text-lg font-sans">Sleek, portable display stand engineered for premium retail brand exhibitions.</p>
              <p className="text-lg font-sans">₦150,000</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <h3 className="text-3xl font-heading tracking-tighter leading-[0.9]">Bespoke Veneer Wardrobe</h3>
              <p className="text-lg font-sans">Custom floor-to-ceiling storage solution with premium textured finish.</p>
              <p className="text-lg font-sans">₦1,200,000</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-secondary text-black py-20">
        <div className="container mx-auto p-4">
          <h2 className="text-5xl font-heading tracking-tighter leading-[0.9]">Portfolio of Excellence</h2>
          <p className="text-lg font-sans">A visual journey through our most prestigious workshop projects.</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <SafeImage src="https://images.unsplash.com/photo-1602481222849-c8f6bb1f0f38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY1NzJ8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwc2VydmljZXN8ZW58MHwwfHx8MTc3OTc5OTU4OHww&ixlib=rb-4.1.0&q=80&w=1080" alt="sophisticated modern wooden furniture showroom interior lagos" className="object-cover h-64 w-full" />
            <SafeImage src="https://images.unsplash.com/photo-1745573674151-c51aa29fc9ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY1NzJ8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwc2VydmljZXN8ZW58MHwwfHx8MTc3OTc5OTU4OHww&ixlib=rb-4.1.0&q=80&w=1080" alt="luxury handcrafted oak wood dining table lagos interior" className="object-cover h-64 w-full" />
            <SafeImage src="https://images.unsplash.com/photo-1629729754030-2145d8dd327d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY1NzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b29kZW4lMjBjb2xsYXBzaWJsZSUyMGRpc3BsYXklMjBzdGFuZCUyMGZvciUyMGV4aGliaXRpb25zfGVufDF8MHx8fDE3Nzk3OTk1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="modern wooden collapsible display stand for exhibitions" className="object-cover h-64 w-full" />
          </div>
        </div>
      </section>
      <section className="bg-black text-white py-40">
        <div className="container mx-auto p-4">
          <h2 className="text-5xl font-heading tracking-tighter leading-[0.9]">Voices of Quality</h2>
          <p className="text-lg font-sans">What our clients say about us</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <p className="text-lg font-sans">The collapsible stand is a game changer for my pop-up shops. Elegant and so easy to set up.</p>
              <p className="text-lg font-sans">- Funke Adebayo, Brand Owner</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <p className="text-lg font-sans">iBuild transformed my home office. The walnut finish is absolutely world-class.</p>
              <p className="text-lg font-sans">- Chidi Okoro, Tech Executive</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <p className="text-lg font-sans">Unmatched attention to detail. Omobolanle truly understands luxury interiors.</p>
              <p className="text-lg font-sans">- Zainab Balogun, Interior Designer</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-secondary text-black py-20">
        <div className="container mx-auto p-4">
          <h2 className="text-5xl font-heading tracking-tighter leading-[0.9]">Get in Touch</h2>
          <p className="text-lg font-sans">Let's discuss your next project</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <h3 className="text-3xl font-heading tracking-tighter leading-[0.9]">Contact Us</h3>
              <p className="text-lg font-sans">Lagos, Nigeria</p>
              <p className="text-lg font-sans"><a href="https://wa.me/message/GPDPUE5GQM2SA1" target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
              <p className="text-lg font-sans"><a href="https://www.instagram.com/ibuildstuff_/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <h3 className="text-3xl font-heading tracking-tighter leading-[0.9]">Follow Us</h3>
              <p className="text-lg font-sans">Stay up to date with our latest projects and news</p>
              <p className="text-lg font-sans"><a href="https://www.instagram.com/ibuildstuff_/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}