
import Image from 'next/image';
import { Headphones, Network, Cpu, Monitor, Users, Activity } from 'lucide-react';

export default function CommandCenter() {
  const imageUrl = "/images/control-center.svg";

  const systems = [
    { label: "Audio Systems", icon: Headphones, color: "text-blue-500", bgColor: "bg-blue-50" },
    { label: "Networking Hub", icon: Network, color: "text-emerald-500", bgColor: "bg-emerald-50" },
    { label: "AI Processors", icon: Cpu, color: "text-amber-500", bgColor: "bg-amber-50" },
    { label: "Visual Wall", icon: Monitor, color: "text-purple-500", bgColor: "bg-purple-50" },
    { label: "Collaboration", icon: Users, color: "text-rose-500", bgColor: "bg-rose-50" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white text-primary relative overflow-hidden border-t border-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          
          {/* Text Left */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-600 text-[10px] font-bold uppercase tracking-widest border border-sky-100 mx-auto lg:ml-0">
                <Activity className="w-3 h-3" /> Operational Hub
              </div>
              <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight uppercase tracking-tighter">
                Command <span className="text-accent">Center</span>
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:ml-0">
                Pusat kendali dan koordinasi operasional terintegrasi untuk pengambilan keputusan yang cepat dan efektif melalui technology monitoring tercanggih.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {systems.map((system, idx) => (
                <div key={idx} className="flex items-center gap-4 p-5 rounded-3xl border border-secondary/30 transition-all duration-300 hover:shadow-md group bg-white">
                  <div className={`w-12 h-12 rounded-2xl ${system.bgColor} flex items-center justify-center shadow-sm ${system.color} group-hover:scale-110 transition-transform`}>
                    <system.icon className="w-6 h-6" />
                  </div>
                  <span className="font-headline font-bold text-xs uppercase tracking-tight text-primary">
                    {system.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Right */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
            <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-sky-50">
              <Image 
                src={imageUrl} 
                alt="Command Center technology" 
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
