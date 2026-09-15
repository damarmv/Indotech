"use client"

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Gallery() {
  const galleryItems = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  return (
    <section id="gallery" className="py-32 bg-white text-primary relative overflow-hidden border-t border-secondary/50">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs">Portofolio Kerja</span>
            <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tight uppercase">
              dokumentasi
            </h2>
            <div className="h-2 w-32 bg-accent mt-4" />
          </div>
          <div className="max-w-xs md:text-right">
            <p className="text-primary/40 text-xs font-bold tracking-widest uppercase mb-4">indonesia technology bangga.</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Bukti nyata dedikasi kami dalam instalasi dan pemeliharaan sistem keamanan di berbagai sektor industri.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {galleryItems.map((item, idx) => (
            <div key={idx} className="group flex flex-col space-y-4">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-secondary/10 group-hover:border-accent/40 transition-all duration-500">
                <Image 
                  src={item.imageUrl} 
                  alt={item.description} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint={item.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
              <div className="px-2">
                <p className="font-headline text-sm font-bold tracking-wide uppercase border-l-2 border-accent pl-4 group-hover:translate-x-2 transition-transform duration-300 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}