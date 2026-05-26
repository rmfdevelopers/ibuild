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
  if (e || !src) return <div className={`bg-neutral-900 flex items-center justify-center ${className}`}><Lucide.ImageOff className="opacity-20" /></div>;
  return <Image src={src} alt={alt} fill={fill} className={className} priority={priority} onError={() => setE(true)} unoptimized />;
}

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section id="hero" className="bg-primary py-40">
        <div className="container flex flex-col items-center justify-center">
          <h1 className="text-6xl font-heading tracking-tighter leading-[0.9]">Artistry in Every Grain.</h1>
          <p className="text-2xl font-sans">Luxury furniture and premium interiors crafted to redefine your environment.</p>
          <button className="bg-accent text-white py-4 px-8 rounded-lg">Explore Collection</button>
        </div>
      </section>
      <section id="features" className="bg-secondary py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
            <h2 className="text-3xl font-heading">Artisanal Mastery</h2>
            <p className="text-lg font-sans">Every piece is handcrafted in Lagos using the finest locally sourced and imported hardwoods.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
            <h2 className="text-3xl font-heading">Collapsible Innovation</h2>
            <p className="text-lg font-sans">Our signature brand stands offer tool-free assembly without compromising on luxury aesthetics.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
            <h2 className="text-3xl font-heading">Bespoke Interiors</h2>
            <p className="text-lg font-sans">Full-scale interior woodwork transformations tailored to your architectural vision.</p>
          </div>
        </div>
      </section>
      <section id="products" className="bg-accent py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
            <h2 className="text-3xl font-heading">The Nomad Stand</h2>
            <p className="text-lg font-sans">Premium collapsible exhibition stand designed for luxury brand activations and ease of transport.</p>
            <p className="text-lg font-sans">₦250,000</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
            <h2 className="text-3xl font-heading">Heritage Coffee Table</h2>
            <p className="text-lg font-sans">Hand-carved solid walnut table featuring organic grains and a sophisticated matte finish.</p>
            <p className="text-lg font-sans">₦320,000</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
            <h2 className="text-3xl font-heading">Signature Accent Chair</h2>
            <p className="text-lg font-sans">Ergonomic wooden frame paired with premium upholstery for the ultimate statement piece.</p>
            <p className="text-lg font-sans">₦450,000</p>
          </div>
        </div>
      </section>
      <section id="about" className="bg-primary py-20">
        <div className="container flex flex-col items-center justify-center">
          <h1 className="text-6xl font-heading tracking-tighter leading-[0.9]">The Creative Director</h1>
          <p className="text-2xl font-sans">Omobolanle Ojeniyi is the visionary force behind iBuild. With a keen eye for structural elegance and a passion for sustainable luxury, she has transformed iBuild into a sanctuary of premium woodworks.</p>
        </div>
      </section>
      <section id="contact" className="bg-secondary py-20">
        <div className="container flex flex-col items-center justify-center">
          <h1 className="text-6xl font-heading tracking-tighter leading-[0.9]">Start Your Project</h1>
          <p className="text-2xl font-sans">Get in touch with us to discuss your project.</p>
          <button className="bg-accent text-white py-4 px-8 rounded-lg">Contact Us</button>
        </div>
      </section>
    </main>
  );
}