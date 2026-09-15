
import Image from 'next/image';
import { Tv, LayoutTemplate, Megaphone, Clock, MonitorPlay } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function DigitalSignage() {
  const signageImg = PlaceHolderImages.find(img => img.id === 'digital-signage-main');

  const features = [
    { icon: LayoutTemplate, label: "CMS Content", color: "text-blue-500", bgColor: "bg-blue-50" },
    { icon: Tv, label: "LED Display", color: "text-amber-500", bgColor: "bg-amber-50" },
    { icon: Megaphone, label: "Ads Promo", color: "text-rose-500", bgColor: "bg-rose-50" },
    { icon: Clock, label: "Real-time", color: "text-emerald-500", bgColor: "bg-emerald-50" },
  ];

  return (
    <section className="bg-sky-50 py-16 md:py-24 overflow-hidden relative border-t border-sky-100/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
          
          {/* Image Left */}
          <div className="w-full lg:w-1/2 flex justify-center order-1">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white">
              {signageImg && (
                <Image 
                  src={signageImg.imageUrl} 
                  alt={signageImg.description} 
                  fill 
                  className="object-cover scale-110"
                  data-ai-hint={signageImg.imageHint}
                />
              )}
            </div>
          </div>

          {/* Text Right */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left order-2">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-sky-600 text-[10px] font-bold uppercase tracking-widest border border-sky-100 mx-auto lg:ml-0">
                <MonitorPlay className="w-3 h-3" /> Media Visual
              </div>
              <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight text-primary uppercase">
                Digital <span className="text-accent">Signage</span>
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:ml-0">
                Sistem tampilan elektronik terpusat yang digunakan untuk menyampaikan informasi atau konten multimedia secara efektif dan dinamis melalui teknologi visual tajam.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              {features.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-start gap-4 p-6 rounded-[2rem] border border-secondary/30 transition-all duration-300 hover:shadow-md bg-white group">
                  <div className={`w-12 h-12 rounded-2xl ${item.bgColor} flex items-center justify-center shadow-sm ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-[10px] uppercase tracking-wider text-center lg:text-left text-primary">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
