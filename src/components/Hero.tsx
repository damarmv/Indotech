
"use client"

import { Button } from '@/components/ui/button';
import { MapPin, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useWhatsApp } from '@/hooks/use-whatsapp';

export default function Hero() {
  const slides = PlaceHolderImages.filter(img => img.id.startsWith('hero-bg-'));
  const whatsappLink = useWhatsApp();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-20">
      {/* Smooth Cross-fade Background Visual */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {slides[currentSlide] && (
              <Image
                src={slides[currentSlide].imageUrl}
                alt={slides[currentSlide].description}
                fill
                className="object-cover"
                priority
              />
            )}
          </motion.div>
        </AnimatePresence>
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        {/* Soft Gradient Mask for better contrast on the left side */}
        <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-black/60 to-transparent z-15 pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-[450px]">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-transparent border-none rounded-none"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-accent text-white text-[9px] font-black tracking-[0.1em] uppercase shadow-lg">
                  <MapPin className="w-3 h-3" />
                  MELAYANI SE-JABODETABEK
                </div>
              </div>
              
              <div className="space-y-1">
                <h1 className="font-headline text-3xl md:text-5xl font-bold leading-tight text-white uppercase tracking-tighter text-left drop-shadow-md">
                  INDONESIA <br /> 
                  <span className="text-accent">TECHNOLOGY</span> <br /> 
                  CORP
                </h1>
                <div className="h-1.5 w-16 bg-accent" />
              </div>

              <div className="space-y-3">
                <p className="text-white text-[11px] md:text-sm leading-relaxed max-w-[400px] text-left font-semibold drop-shadow-lg">
                  <strong>indonesia technology.corp</strong> adalah mitra terpercaya Anda <br />
                  untuk pengadaan dan instalasi <strong>CCTV Bogor</strong>, sistem keamanan <br />
                  pintar, dan infrastruktur IT profesional Jabodetabek. Solusi <br />
                  keamanan terintegrasi yang melindungi masa depan Anda.
                </p>
              </div>
              
              <div className="flex pt-4">
                <Button asChild size="lg" className="w-full max-w-[280px] rounded-none h-12 text-[10px] font-black px-8 bg-primary hover:bg-primary/90 text-white group transition-all duration-300 shadow-2xl border border-white/10">
                  <Link href={whatsappLink} target="_blank">
                    KONSULTASI GRATIS
                    <ShieldCheck className="ml-2 w-4 h-4 group-hover:scale-125 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tech Data Watermark */}
      <div className="absolute right-8 bottom-8 hidden lg:flex flex-col items-end gap-0.5 text-right z-30 opacity-80">
        <p className="text-[8px] text-white font-bold uppercase tracking-[0.4em] drop-shadow-sm">Integrated Security Systems</p>
        <div className="flex items-center gap-1.5">
          <div className="h-px w-8 bg-accent" />
          <p className="text-[10px] text-white font-mono tracking-widest font-bold">EST 2020</p>
        </div>
      </div>
    </section>
  );
}
