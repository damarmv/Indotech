
import Image from 'next/image';
import { Shield, BellRing, Eye, Smartphone } from 'lucide-react';

export default function CctvAlarm() {
  const imageUrl = "/images/cctv-camera.jpg";

  const features = [
    { 
      icon: Eye, 
      title: "Monitoring 24/7", 
      desc: "Pengawasan visual Night Vision berkualitas tinggi.",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    { 
      icon: BellRing, 
      title: "Deteksi Instan", 
      desc: "Sistem peringatan dini yang sangat presisi.",
      color: "text-rose-500",
      bgColor: "bg-rose-50"
    },
    { 
      icon: Smartphone, 
      title: "Remote Access", 
      desc: "Pantau keamanan langsung dari smartphone Anda.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50"
    },
    { 
      icon: Shield, 
      title: "Smart Shield", 
      desc: "Proteksi berlapis dengan AI technology terbaru.",
      color: "text-amber-500",
      bgColor: "bg-amber-50"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-sky-50 relative overflow-hidden border-t border-sky-100/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          
          {/* Image Left */}
          <div className="w-full lg:w-2/5 flex justify-center order-1">
            <div className="relative w-full max-w-sm aspect-square rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
              <Image 
                src={imageUrl} 
                alt="CCTV & Alarm technology" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Right */}
          <div className="w-full lg:w-3/5 space-y-8 text-center lg:text-left order-2">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-sky-600 text-[10px] font-bold uppercase tracking-widest border border-sky-100 mx-auto lg:ml-0">
                <Shield className="w-3 h-3" /> Integrasi Keamanan
              </div>
              <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight text-primary uppercase">
                CCTV & <span className="text-accent">Smart Alarm</span>
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:ml-0">
                CCTV dan Alarm merupakan dua sistem keamanan yang berbeda namun seringkali digunakan bersamaan untuk meningkatkan keamanan suatu area atau properti secara maksimal dengan technology mutakhir.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((item, idx) => (
                <div key={idx} className="p-5 rounded-3xl border border-secondary/30 transition-all group text-left bg-white hover:shadow-md">
                  <div className={`w-10 h-10 rounded-2xl ${item.bgColor} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform shadow-sm`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="mt-3">
                    <h4 className="font-bold text-xs uppercase tracking-tight text-primary">{item.title}</h4>
                    <p className="text-[11px] text-muted-foreground leading-relaxed mt-1">{item.desc}</p>
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
