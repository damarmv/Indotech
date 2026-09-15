
import Image from 'next/image';
import { Info, Monitor, Headset, Handshake, Sparkles } from 'lucide-react';

export default function InteractiveKiosk() {
  const imageUrl = "https://firebasestorage.googleapis.com/v0/b/studio-2175880406-bdd33.firebasestorage.app/o/kiosk.jpg?alt=media&token=446dff9b-4c71-4278-802d-0ba9fc57fa26";

  const categories = [
    { label: "Info Kiosk", icon: Info, color: "text-blue-500", bgColor: "bg-blue-50" },
    { label: "Digital Display", icon: Monitor, color: "text-purple-500", bgColor: "bg-purple-50" },
    { label: "Telecare Unit", icon: Headset, color: "text-rose-500", bgColor: "bg-rose-50" },
    { label: "Self Service", icon: Handshake, color: "text-emerald-500", bgColor: "bg-emerald-50" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
          
          {/* Text Left */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-600 text-[10px] font-bold uppercase tracking-widest border border-sky-100 mx-auto lg:ml-0">
                <Sparkles className="w-3 h-3" /> User Interaction
              </div>
              <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight text-primary uppercase">
                Interactive <span className="text-accent">Kiosk</span>
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:ml-0">
                Perangkat elektronik layar sentuh yang memungkinkan pengguna untuk berinteraksi langsung dengan konten dan aplikasi secara mandiri dengan technology interface modern.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              {categories.map((cat, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-start gap-4 p-6 rounded-[2rem] border border-secondary/30 transition-all duration-300 hover:shadow-md bg-white group">
                  <div className={`w-12 h-12 rounded-2xl ${cat.bgColor} flex items-center justify-center shadow-sm ${cat.color} group-hover:scale-110 transition-transform`}>
                    <cat.icon className="w-6 h-6" />
                  </div>
                  <span className="font-headline font-bold text-[10px] uppercase tracking-tight text-center lg:text-left text-primary">
                    {cat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Right */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-sky-50">
              <Image 
                src={imageUrl} 
                alt="Interactive Kiosk technology" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
