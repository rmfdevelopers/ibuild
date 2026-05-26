'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { 
  Hammer, 
  Maximize, 
  ShieldCheck, 
  Phone, 
  Instagram, 
  Mail, 
  MapPin, 
  ArrowRight, 
  CheckCheck, 
  Loader2, 
  Menu, 
  X, 
  ImageOff,
  Pencil,
  Users,
  ChevronRight
} from 'lucide-react';

// DESIGN DECISIONS:
// Layout Energy: editorial
// Depth Treatment: layered
// Divider Style: D-RULE
// Typography Personality: refined

const brand = {
  name: "iBuild",
  tagline: "Elevate Your Space",
  description: "Bespoke furniture and high-end woodworks for visionary brands and modern homes. Led by Omobolanle Ojeniyi, we blend traditional craftsmanship with contemporary functionality.",
  industry: "Bespoke Woodworking",
  region: "Lagos, Nigeria"
};

const contact = {
  whatsapp: "2347000000000", // Extracted placeholder for format
  whatsapp_link: "https://wa.me/message/GPDPUE5GQM2SA1",
  instagram: "https://www.instagram.com/ibuildstuff_/",
  address: "Lagos, Nigeria",
  email: "hello@ibuildstuff.co"
};

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1578058404413-1234a4bad74c?q=80&w=2000",
  portfolio: [
    "https://images.unsplash.com/photo-1770910195241-f74066a651d0?q=80&w=1000",
    "https://images.unsplash.com/photo-1661446520690-b92b30acf318?q=80&w=1000",
    "https://images.unsplash.com/photo-1609667812896-2f40b6165f37?q=80&w=1000",
    "https://images.unsplash.com/photo-1628268567603-e59adde43750?q=80&w=1000",
    "https://images.unsplash.com/photo-1597960194599-22929afc25b1?q=80&w=1000",
    "https://images.unsplash.com/photo-1675190711033-f7375c7df6b2?q=80&w=1000"
  ],
  products: [
    "https://images.unsplash.com/photo-1769981653696-5ce5a59263bf?q=80&w=1000",
    "https://images.unsplash.com/photo-1661446520690-b92b30acf318?q=80&w=1000",
    "https://images.unsplash.com/photo-1609667812896-2f40b6165f37?q=80&w=1000",
    "https://images.unsplash.com/photo-1695687349399-452a14c409be?q=80&w=1000"
  ]
};

const features = [
  { title: "Bespoke Artistry", description: "Every piece is custom-tailored to your architectural dimensions and aesthetic preference.", icon: Hammer },
  { title: "Space Optimization", description: "Specializing in smart, collapsible furniture that maximizes functionality without sacrificing luxury.", icon: Maximize },
  { title: "Lasting Durability", description: "We use only premium, seasoned timber treated for longevity in tropical climates.", icon: ShieldCheck }
];

const products = [
  { name: "The Signature Collapsible Stand", description: "Premium portable exhibition stand designed for luxury brands and mobile showcases.", price: "₦185,000" },
  { name: "Executive Walnut Desk", description: "Hand-carved solid walnut work surface with integrated cable management.", price: "₦550,000" },
  { name: "The Heritage Dining Suite", description: "Six-seater custom dining table crafted from treated local hardwood.", price: "₦950,000" },
  { name: "Artisan Media Console", description: "Sleek, low-profile entertainment unit with slatted wood detailing.", price: "₦320,000" }
];

const testimonials = [
  { name: "Adewale Segun", text: "The collapsible stand is a game changer for my pop-up events. Sturdy, elegant, and so easy to transport.", role: "Brand Consultant" },
  { name: "Chioma Okafor", text: "Omobolanle's attention to detail is unmatched. My dining table is the center of conversation in my home.", role: "Homeowner" },
  { name: "Tunde Bakare", text: "Quality woodworks are hard to find in Lagos. iBuild delivered far beyond my expectations for my office fit-out.", role: "CEO, Bakare Labs" }
];

const stats = [
  { number: "1k+", label: "Satisfied Clients", icon: Users },
  { number: "7k+", label: "Design Community", icon: Instagram },
  { number: "100%", label: "Custom Made", icon: Pencil }
];

function SafeImage({ src, alt, fill, width, height, className, priority, fallbackClassName }: any) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-primary/60 to-accent/10 ${fallbackClassName ?? className ?? ''}`}>
        <ImageOff size={28} className="text-white/20" />
      </div>
    );
  }
  return (
    <Image src={src} alt={alt} fill={fill} width={!fill ? width : undefined} height={!fill ? height : undefined}
      className={className} priority={priority} onError={() => setError(true)} />
  );
}

const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, isVisible };
};

function SectionDivider() {
  return (
    <div className="py-16 flex items-center gap-8 px-8 max-w-6xl mx-auto">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <span className="text-accent font-mono text-xs tracking-[0.4em] uppercase whitespace-nowrap opacity-70">
        {brand.tagline}
      </span>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
    </div>
  );
}

export default function Page() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const heroReveal = useScrollReveal();
  const featuresReveal = useScrollReveal();
  const galleryReveal = useScrollReveal();
  const productsReveal = useScrollReveal();
  const aboutReveal = useScrollReveal();
  const testimonialsReveal = useScrollReveal();
  const contactReveal = useScrollReveal();

  return (
    <main className="relative">
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-primary/95 backdrop-blur-xl py-4 shadow-2xl border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-accent flex items-center justify-center text-primary font-black text-xl rounded-sm group-hover:rotate-6 transition-transform">i</div>
            <span className="font-heading text-2xl font-bold tracking-tighter text-white">BUILD</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-10">
            {['Portfolio', 'Products', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-white/70 hover:text-accent transition-colors uppercase tracking-widest">{item}</a>
            ))}
            <a href="#contact" className="bg-accent text-primary px-6 py-2.5 rounded-full font-bold text-sm hover:brightness-110 transition-all">Get a Quote</a>
          </nav>

          <button onClick={() => setMobileMenu(true)} className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-[60] transition-all duration-500 ${mobileMenu ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${mobileMenu ? 'opacity-100' : 'opacity-0'}`} onClick={() => setMobileMenu(false)} />
        <div className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-primary border-l border-white/10 p-10 transition-transform duration-500 flex flex-col ${mobileMenu ? 'translate-x-0' : 'translate-x-full'}`}>
          <button onClick={() => setMobileMenu(false)} className="self-end text-white/50 mb-12"><X size={32} /></button>
          <nav className="flex flex-col gap-8">
            {['Portfolio', 'Products', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenu(false)} className="font-heading text-4xl font-bold text-white hover:text-accent transition-colors">{item}</a>
            ))}
          </nav>
          <div className="mt-auto pt-10 border-t border-white/10">
            <p className="text-accent font-mono text-xs tracking-widest uppercase mb-4">Lagos Crafted</p>
            <div className="flex gap-4">
              <a href={contact.instagram} className="text-white/50 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href={contact.whatsapp_link} className="text-white/50 hover:text-white transition-colors"><Phone size={20} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - Pattern HR-A (Minimal Variant) */}
      <section id="hero" ref={heroReveal.ref} className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-primary via-primary to-accent/20 px-6 overflow-hidden pt-20">
        <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-accent/8 rounded-full blur-[120px] pointer-events-none animate-float" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 max-w-5xl max-h-[70vh] rounded-[4rem] overflow-hidden rotate-2 border border-white/10">
          <SafeImage src={IMAGES.hero} alt="iBuild Studio" fill className="object-cover" priority />
        </div>

        <div className={`relative z-10 text-center max-w-5xl transition-all duration-1000 ${heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h1 className="font-heading text-6xl md:text-[7rem] font-black text-white leading-[0.9] tracking-tighter">
            Crafting the Soul <br /> of Your <span className="text-accent italic">Interiors</span>
          </h1>
          <p className="text-white/60 mt-10 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
            From bespoke luxury furniture to functional brand installations, we turn premium timber into timeless statements.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <a href="#contact" className="bg-accent text-primary px-12 py-5 font-bold text-lg hover:brightness-110 hover:scale-105 transition-all duration-300 rounded-full shadow-xl">
              Request a Quote
            </a>
            <a href="#portfolio" className="bg-white/5 border border-white/20 backdrop-blur-md text-white px-12 py-5 font-medium text-lg hover:bg-white/10 transition-all duration-300 rounded-full">
              Explore Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Features Section - F-STICKY */}
      <section id="features" ref={featuresReveal.ref} className="py-32 bg-primary px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px w-12 bg-accent" />
            <h2 className="font-heading text-4xl md:text-5xl font-black text-white">The iBuild Standard</h2>
          </div>
          <div className="space-y-6">
            {features.map((f, idx) => (
              <div key={idx} className="sticky group" style={{ top: `${100 + idx * 30}px` }}>
                <div className={`bg-stone-900/40 backdrop-blur-2xl rounded-[2.5rem] p-10 md:p-14 border border-white/10 shadow-2xl transition-all duration-700 ${featuresReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${idx * 150}ms` }}>
                  <div className="flex flex-col md:flex-row gap-10">
                    <div className="w-16 h-16 rounded-2xl bg-accent/15 flex items-center justify-center shrink-0 border border-accent/20 text-accent">
                      {idx === 0 && <Hammer size={32} />}
                      {idx === 1 && <Maximize size={32} />}
                      {idx === 2 && <ShieldCheck size={32} />}
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-heading text-3xl md:text-4xl font-bold text-white">{f.title}</h3>
                        <span className="font-mono text-accent/30 text-lg">0{idx + 1}</span>
                      </div>
                      <p className="text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl">{f.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Portfolio Gallery - Masonry Style */}
      <section id="portfolio" ref={galleryReveal.ref} className="py-32 px-6 bg-secondary text-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-heading text-6xl font-black mb-4">The Portfolio</h2>
            <p className="text-primary/60 text-lg uppercase tracking-widest font-bold">Lagos-crafted installations for visionary brands</p>
          </div>
          <div className={`columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 transition-all duration-1000 ${galleryReveal.isVisible ? 'opacity-100' : 'opacity-0 scale-95'}`}>
            {IMAGES.portfolio.map((src, i) => (
              <div key={i} className="break-inside-avoid group relative rounded-[2rem] overflow-hidden shadow-xl">
                <SafeImage src={src} alt={`Work ${i + 1}`} width={600} height={800} className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section - P-ASYMMETRIC */}
      <section id="products" ref={productsReveal.ref} className="py-32 px-6 bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="font-heading text-6xl font-black text-white leading-tight">Shop the <br /> <span className="text-accent italic">Collection</span></h2>
            </div>
            <p className="text-white/40 max-w-xs md:text-right text-lg">Functional pieces designed for contemporary Lagos living and workspaces.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Featured Item */}
            <div className={`lg:col-span-7 group relative rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-1000 ${productsReveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="relative h-[600px]">
                <SafeImage src={IMAGES.products[0]} alt={products[0].name} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
                <div className="absolute bottom-0 p-12 w-full">
                  <span className="bg-accent text-primary px-4 py-1 text-xs font-black uppercase tracking-widest rounded-full mb-4 inline-block">Best Seller</span>
                  <h3 className="font-heading text-4xl font-bold text-white mb-4">{products[0].name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-white/60 text-lg max-w-sm">{products[0].description}</p>
                    <div className="text-right">
                      <p className="text-accent font-black text-3xl">{products[0].price}</p>
                      <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-white font-bold hover:text-accent transition-colors">
                        Order Now <ArrowRight size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid of smaller items */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {products.slice(1, 4).map((p, i) => (
                <div key={i} className={`group bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all duration-500 transition-all duration-1000 ${productsReveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ transitionDelay: `${i * 200}ms` }}>
                  <div className="flex gap-6 items-center">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                      <SafeImage src={IMAGES.products[i+1]} alt={p.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-2xl font-bold text-white group-hover:text-accent transition-colors">{p.name}</h3>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-accent font-bold text-xl">{p.price}</span>
                        <ChevronRight className="text-white/20 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section - V3 Split */}
      <section id="about" ref={aboutReveal.ref} className="py-32 px-6 bg-accent/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
          <div className={`transition-all duration-1000 ${aboutReveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <span className="text-accent font-mono text-sm tracking-[0.4em] uppercase mb-6 block">The Founder</span>
            <h2 className="font-heading text-6xl font-black text-white mb-8">Meet the <br /> <span className="italic">Visionary</span></h2>
            <p className="text-white/60 text-xl leading-relaxed mb-10">
              Omobolanle Ojeniyi, the Creative Director of iBuild, is a master of spatial transformation. Driven by a passion for clean lines and structural integrity, she has built iBuild into a premier woodworking studio in Lagos.
            </p>
            <div className="grid grid-cols-3 gap-8">
              {stats.map((s, i) => (
                <div key={i}>
                  <p className="font-heading text-4xl font-black text-white">{s.number}</p>
                  <p className="text-accent/60 text-xs font-mono uppercase tracking-widest mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={`relative transition-all duration-1000 delay-300 ${aboutReveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="aspect-square relative rounded-[3rem] overflow-hidden border-8 border-white/5">
              <SafeImage src={IMAGES.portfolio[1]} alt="Omobolanle Ojeniyi" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-accent p-10 rounded-[2rem] text-primary shadow-2xl">
              <p className="font-heading text-3xl font-black italic">&ldquo;Wood tells a story of quality and intentionality.&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - T-MASONRY */}
      <section id="testimonials" ref={testimonialsReveal.ref} className="py-32 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-6xl font-black text-primary text-center mb-20">Client Stories</h2>
          <div className="columns-1 md:columns-3 gap-6 space-y-6">
            {testimonials.map((t, i) => (
              <div key={i} className={`break-inside-avoid bg-white p-10 rounded-[2.5rem] border border-stone-200 shadow-xl transition-all duration-700 ${testimonialsReveal.isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-6 blur-sm'}`} style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(n => <div key={n} className="w-1.5 h-1.5 rounded-full bg-accent" />)}
                </div>
                <p className="text-primary/70 text-lg leading-relaxed italic mb-8">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-4 pt-6 border-t border-stone-100">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-black text-xl">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-primary text-xl">{t.name}</p>
                    <p className="text-primary/40 text-sm uppercase tracking-widest font-bold">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Pattern C3 */}
      <section id="contact" ref={contactReveal.ref} className="py-32 px-6 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--accent)/10,transparent_50%)]" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="text-accent font-mono text-sm tracking-[0.4em] uppercase mb-6 block">Ready to Transform?</span>
          <h2 className="font-heading text-6xl font-black text-white mb-6">Start Your <span className="italic">Project</span></h2>
          <p className="text-white/40 mb-12 text-xl leading-relaxed">Whether it is a custom home fit-out or a brand exhibition, let us build something remarkable together in Lagos.</p>
          
          <ContactForm />
        </div>
      </section>

      {/* Footer - Pattern F2 */}
      <footer className="py-20 px-6 bg-stone-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-accent flex items-center justify-center text-primary font-black text-lg rounded-sm">i</div>
              <span className="font-heading text-2xl font-bold tracking-tighter text-white uppercase">BUILD</span>
            </a>
            <p className="text-white/30 max-w-sm text-lg leading-relaxed">{brand.description}</p>
            <div className="mt-10 flex gap-6">
              {contact.instagram && <a href={contact.instagram} className="text-white/20 hover:text-accent transition-colors"><Instagram size={24} /></a>}
              {contact.whatsapp_link && <a href={contact.whatsapp_link} className="text-white/20 hover:text-accent transition-colors"><Phone size={24} /></a>}
            </div>
          </div>
          <div>
            <h4 className="font-heading text-xl font-bold text-white mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Portfolio', 'Products', 'About', 'Contact'].map(link => (
                <li key={link}><a href={`#${link.toLowerCase()}`} className="text-white/40 hover:text-accent transition-colors text-sm uppercase tracking-widest">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-xl font-bold text-white mb-8">Contact Info</h4>
            <div className="space-y-6">
              <div className="flex gap-4 items-start text-white/40">
                <MapPin size={20} className="shrink-0 text-accent" />
                <p className="text-sm">{contact.address}</p>
              </div>
              <div className="flex gap-4 items-start text-white/40">
                <Mail size={20} className="shrink-0 text-accent" />
                <p className="text-sm">{contact.email}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs font-mono uppercase tracking-[0.2em]">&copy; {new Date().getFullYear()} iBuild Studio. Sharp delivery across Lagos.</p>
          <p className="text-white/20 text-xs font-mono uppercase tracking-[0.2em]">Designed by the Artisan Mind.</p>
        </div>
      </footer>
    </main>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center animate-scaleIn bg-stone-900 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-50" />
        <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-6 border border-accent/40 relative z-10">
          <CheckCheck size={32} className="text-accent" />
        </div>
        <h3 className="font-heading text-4xl font-black text-white mb-3 relative z-10">Message Sent</h3>
        <p className="text-white/60 max-w-sm text-lg relative z-10">Thank you. Omobolanle and the iBuild team will reach out to discuss your vision shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="text-left space-y-4 bg-stone-900/50 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full pointer-events-none" />
      <div className="relative z-10 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
            required
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-white/30 text-lg outline-none transition-all duration-300 focus:bg-white/10 focus:border-accent group-hover:border-white/20"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
            required
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-white/30 text-lg outline-none transition-all duration-300 focus:bg-white/10 focus:border-accent group-hover:border-white/20"
          />
        </div>
        <input
          type="tel"
          placeholder="Phone Number"
          value={form.phone}
          onChange={e => setForm(prev => ({ ...prev, phone: e.target.value }))}
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-white/30 text-lg outline-none transition-all duration-300 focus:bg-white/10 focus:border-accent group-hover:border-white/20"
        />
        <textarea
          rows={4}
          placeholder="Describe your bespoke furniture vision..."
          value={form.message}
          onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
          required
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-white/30 text-lg outline-none resize-none transition-all duration-300 focus:bg-white/10 focus:border-accent group-hover:border-white/20"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-6 bg-accent text-primary py-5 rounded-2xl font-black text-xl hover:brightness-110 hover:shadow-[0_0_40px_rgba(212,163,115,0.2)] transition-all duration-300 disabled:opacity-60 flex justify-center items-center gap-3"
        >
          {loading ? (
            <Loader2 className="animate-spin" size={24} />
          ) : (
            <>Send Inquiry <ArrowRight size={20} /></>
          )}
        </button>
      </div>
    </form>
  );
}