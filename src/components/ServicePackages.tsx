"use client"

import { Construction, Wrench, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ServicePackages() {
  const serviceCategories = [
    {
      title: "INSTALASI",
      icon: Construction,
      items: [
        "CCTV & Alarm",
        "Jaringan",
        "Access control"
      ],
      color: "text-sky-700",
      bgColor: "bg-sky-50/50",
      borderColor: "border-sky-200/60",
      iconBg: "bg-white",
      dotColor: "bg-sky-500"
    },
    {
      title: "LAYANAN PERAWATAN PERIODE",
      icon: Wrench,
      items: [
        "CCTV & Alarm",
        "Jaringan",
        "Access control"
      ],
      color: "text-emerald-700",
      bgColor: "bg-emerald-50/50",
      borderColor: "border-emerald-200/60",
      iconBg: "bg-white",
      dotColor: "bg-emerald-500"
    },
    {
      title: "PENGEMBANGAN SISTEM",
      icon: Layers,
      items: [
        "Sistem Manajemen Video",
        "Command Center",
        "Display interactive kiosk",
        "Software & application",
        "Digital signage"
      ],
      color: "text-indigo-700",
      bgColor: "bg-indigo-50/50",
      borderColor: "border-indigo-200/60",
      iconBg: "bg-white",
      dotColor: "bg-indigo-500"
    }
  ];

  return (
    <section id="packages" className="py-12 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Branding Header */}
        <div className="text-center md:text-right mb-6 md:mb-8">
           <p className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase text-primary/40">
             indonesia technology bangga.
           </p>
        </div>

        {/* Circular Header */}
        <div className="flex justify-center mb-16 md:mb-24">
          <div className="w-40 h-40 md:w-64 md:h-64 rounded-full border-[8px] md:border-[12px] border-primary flex items-center justify-center text-center p-4 md:p-6 bg-white relative z-10 shadow-sm">
            <h3 className="font-headline text-2xl md:text-4xl font-bold text-primary leading-tight uppercase">
              Layanan <br /> kami
            </h3>
          </div>
          {/* Decorative horizontal line for desktop */}
          <div className="absolute top-[280px] md:top-[350px] left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-primary/10 hidden lg:block" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {serviceCategories.map((category, idx) => (
            <div 
              key={idx} 
              className={cn(
                "flex flex-col items-center text-center space-y-6 md:space-y-8 p-8 md:p-10 rounded-[2.5rem] border transition-all duration-500 group hover:shadow-2xl hover:-translate-y-2 backdrop-blur-sm",
                category.bgColor,
                category.borderColor
              )}
            >
              {/* Category Icon Container */}
              <div className={cn(
                "w-16 h-16 md:w-20 md:h-20 rounded-3xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500",
                category.iconBg,
                category.color
              )}>
                <category.icon className="w-8 h-8 md:w-10 md:h-10" />
              </div>

              <div className="space-y-4 md:space-y-6 w-full">
                <h4 className={cn(
                  "font-headline font-bold text-lg md:text-xl tracking-wider uppercase",
                  category.color
                )}>
                  {category.title}
                </h4>

                <div className={cn("w-12 h-1 mx-auto opacity-30 rounded-full", category.dotColor)} />

                <ul className="space-y-4 inline-block text-left">
                  {category.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-center gap-3 text-xs md:text-sm text-primary/80 font-bold uppercase tracking-tight group-hover:translate-x-1 transition-transform">
                      <div className={cn("w-2 h-2 rounded-full flex-shrink-0", category.dotColor)} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
