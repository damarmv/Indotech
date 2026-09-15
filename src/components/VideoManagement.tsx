
import Image from 'next/image';
import { Video, Search, Cloud, LayoutGrid } from 'lucide-react';

export default function VideoManagement() {
  const imageUrl = "https://firebasestorage.googleapis.com/v0/b/studio-2175880406-bdd33.firebasestorage.app/o/manajemen%20video.jpg?alt=media&token=bdef4651-f0d1-42ff-bb0b-1c5ca0bd601d";

  const features = [
    { icon: Search, label: "Smart Search", color: "text-blue-500", bgColor: "bg-blue-50" },
    { icon: Cloud, label: "Cloud Storage", color: "text-amber-500", bgColor: "bg-amber-50" },
    { icon: LayoutGrid, label: "Multi-Channel", color: "text-emerald-500", bgColor: "bg-emerald-50" },
  ];

  return (
    <section className="bg-sky-50 py-16 md:py-24 overflow-hidden relative border-t border-sky-100/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
          
          {/* Image Left */}
          <div className="w-full lg:w-1/2 flex justify-center order-1">
            <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white">
              <Image 
                src={imageUrl} 
                alt="Video Management Solution technology" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Right */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left order-2">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-sky-600 text-[10px] font-bold uppercase tracking-widest border border-sky-100 mx-auto lg:ml-0">
                <Video className="w-3 h-3" /> Pengolahan Data
              </div>
              <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight text-primary uppercase">
                Manajemen <span className="text-accent">Video</span>
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:ml-0">
                Proses mengatur, mengelola, dan mendistribusikan konten video secara efektif untuk pemantauan keamanan yang terintegrasi dan cerdas melalui technology mutakhir.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center p-6 rounded-[2rem] border border-secondary/30 bg-white transition-all duration-300 hover:shadow-lg group">
                  <div className={`w-12 h-12 rounded-2xl ${item.bgColor} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform mb-4 shadow-sm`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-[10px] uppercase tracking-wider text-primary">{item.label}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
