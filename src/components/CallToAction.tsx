"use client"

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Phone, Mail, Globe } from 'lucide-react';

export default function CallToAction() {
  const handshakeImg = PlaceHolderImages.find(img => img.id === 'contact-handshake');

  const contactDetails = [
    { text: "0831-9043-3681", icon: Phone },
    { text: "Indotechnologybangga@gmail.com", icon: Mail },
    { text: "Jalan Pesona Cilebut 1 No. BLOK I2/21", icon: Globe },
  ];

  return (
    <section className="bg-white py-24 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Column: Handshake Image */}
          <div className="w-full lg:w-1/2 relative">
             <div className="relative aspect-[3/4] w-full max-w-[500px] mx-auto overflow-hidden rounded-[1rem] shadow-2xl">
                {handshakeImg && (
                  <Image 
                    src={handshakeImg.imageUrl} 
                    alt="Let's connect" 
                    fill 
                    className="object-cover"
                    data-ai-hint="handshake office"
                  />
                )}
             </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end text-center lg:text-right space-y-12">
            <div className="space-y-4">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary/40 mb-8">
                COMPANY PROFILE PRESENTATION
              </p>
              <h2 className="font-headline text-5xl md:text-6xl font-bold text-primary leading-tight uppercase">
                Mari Terhubung <br /> dengan Kami!
              </h2>
              <div className="w-40 h-0.5 bg-primary/40 mt-4 ml-auto lg:mr-0" />
            </div>

            {/* Framed Contact Info Box */}
            <div className="w-full max-w-lg border-2 border-primary/20 rounded-[0.5rem] p-10 md:p-14 space-y-8 bg-white/50 backdrop-blur-sm shadow-sm">
               {contactDetails.map((detail, idx) => (
                 <div key={idx} className="flex items-center justify-end gap-6 group">
                   <span className="text-sm md:text-lg font-medium text-primary/80 group-hover:text-primary transition-colors">
                     {detail.text}
                   </span>
                   <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary/60 group-hover:bg-primary group-hover:text-white transition-all">
                     <detail.icon className="w-5 h-5" />
                   </div>
                 </div>
               ))}
            </div>

            {/* Branding watermark */}
            <div className="pt-12">
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">
                indonesia technology bangga.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
