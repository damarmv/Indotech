"use client"

import { motion } from 'framer-motion';

export default function Timeline() {
  const events = [
    { year: "2021", desc: "Indotech CCTV hanya bergerak di bidang proyek jasa instalasi dan pemeliharaan." },
    { year: "2022", desc: "Memasuki sektor distribusi dengan menyediakan barang dan peralatan sistem keamanan." },
    { year: "2023", desc: "Memformalkan badan usaha berstandar nasional dan mulai memasuki proyek rangkaian industri." },
    { year: "2024", desc: "Membuat sub-perusahaan untuk memasuki pasar online dan e-commerce." },
    { year: "2025", desc: "Menjalankan semua pasar, baik online maupun offline, tetapi berfokus pada proyek industri dan kebutuhan sistem keamanan." }
  ];

  return (
    <section id="timeline" className="section-padding bg-secondary/60 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-20 space-y-4">
          <h2 className="font-headline text-3xl md:text-5xl font-bold uppercase tracking-tight text-primary">
            Jejak Langkah Kami
          </h2>
          <div className="w-16 md:w-24 h-1.5 bg-accent mx-auto" />
        </div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-primary/10" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-12 lg:gap-8">
            {events.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-4 md:space-y-6 group">
                <div className="relative">
                  <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-2 md:border-4 border-white bg-white shadow-lg flex items-center justify-center text-primary font-headline font-bold text-lg md:text-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {item.year}
                  </div>
                </div>
                <p className="text-muted-foreground text-[10px] sm:text-xs md:text-base leading-relaxed font-medium group-hover:text-primary transition-colors px-1 sm:px-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
