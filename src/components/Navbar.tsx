"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useWhatsApp } from '@/hooks/use-whatsapp';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const logoImage = PlaceHolderImages.find(img => img.id === 'company-logo');
  const whatsappLink = useWhatsApp();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Mitra', href: '#partners' },
    { name: 'Layanan', href: '#packages' },
    { name: 'Dokumentasi', href: '#gallery' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 bg-white border-b border-black/5 shadow-sm`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform">
            {logoImage && (
              <Image 
                src={logoImage.imageUrl} 
                alt="Logo indonesia technology.corp" 
                fill 
                className="object-contain"
                priority
                data-ai-hint="tech logo"
              />
            )}
          </div>
          <div className="flex flex-col">
            <span className="font-headline font-bold text-base md:text-lg tracking-tight text-primary uppercase leading-none">
              indonesia technology.corp
            </span>
            <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold mt-1">
              Security System Solution
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-xs uppercase tracking-wider font-bold hover:text-accent transition-colors text-primary/80"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild size="sm" className="rounded-none px-6 font-bold bg-primary hover:bg-primary/90 text-white">
            <Link href={whatsappLink} target="_blank">
              Hubungi Kami
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-black/5 p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300 shadow-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold p-3 hover:bg-accent/10 rounded-none text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="w-full font-bold bg-primary rounded-none text-white">
            <Link href={whatsappLink} target="_blank">
              Hubungi Kami
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
