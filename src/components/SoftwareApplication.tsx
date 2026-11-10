
import Image from 'next/image';
import { Code2, Smartphone, Cpu, Cloud, Terminal } from 'lucide-react';

export default function SoftwareApplication() {
  const imageUrl = "/images/software-workspace.svg";

  const apps = [
    { icon: Code2, label: "Custom Code", color: "text-blue-500", bgColor: "bg-blue-50" },
    { icon: Smartphone, label: "Mobile Apps", color: "text-emerald-500", bgColor: "bg-emerald-50" },
    { icon: Cpu, label: "System Core", color: "text-amber-500", bgColor: "bg-amber-50" },
    { icon: Cloud, label: "Cloud Base", color: "text-sky-500", bgColor: "bg-sky-50" }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          
          {/* Text Left */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-600 text-[10px] font-bold uppercase tracking-widest border border-sky-100 mx-auto lg:ml-0">
                <Terminal className="w-3 h-3" /> Dev Solutions
              </div>
              <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight text-primary uppercase">
                Software & <br className="hidden md:block" /> <span className="text-accent">Application</span>
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:ml-0">
                Solusi perangkat lunak kustom dan aplikasi mobile yang dirancang untuk melakukan tugas spesifik bisnis Anda secara efisien dengan technology programming terkini.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto lg:mx-0">
              {apps.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-4 p-6 rounded-[2rem] border border-secondary/30 transition-all duration-300 hover:shadow-md bg-white group">
                  <div className={`w-12 h-12 rounded-2xl ${item.bgColor} flex items-center justify-center shadow-sm ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-[9px] uppercase tracking-wider text-primary">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Right */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-sky-50">
              <Image 
                src={imageUrl} 
                alt="Software development technology" 
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
