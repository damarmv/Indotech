"use client"

import { UserCog, Rocket, BadgeCheck, Gem, MessageSquareText } from 'lucide-react';
import { useWhatsApp } from '@/hooks/use-whatsapp';

export default function Advantages() {
  const whatsappLink = useWhatsApp();
  
  const points = [
    {
      title: "Teknisi Profesional",
      desc: "Tenaga ahli berpengalaman bertahun-tahun di bidang perbaikan hardware dan software.",
      icon: UserCog,
      iconColor: "text-blue-500"
    },
    {
      title: "Pengerjaan Cepat",
      desc: "Layanan ekspres untuk kendala mendesak dengan estimasi waktu yang akurat.",
      icon: Rocket,
      iconColor: "text-amber-500"
    },
    {
      title: "Garansi Layanan",
      desc: "Jaminan kepuasan dan kualitas dengan kartu garansi fisik dan digital untuk setiap perbaikan.",
      icon: BadgeCheck,
      iconColor: "text-emerald-500"
    },
    {
      title: "Harga Terjangkau",
      desc: "Tarif kompetitif yang sebanding dengan kualitas premium yang Anda dapatkan.",
      icon: Gem,
      iconColor: "text-purple-500"
    },
    {
      title: "Support 24 Jam",
      desc: "Layanan konsultasi teknis yang siap membantu Anda kapan saja dibutuhkan.",
      icon: MessageSquareText,
      iconColor: "text-rose-500"
    }
  ];

  return (
    <section id="advantages" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-accent font-bold tracking-[0.2em] uppercase text-sm">Keunggulan</h2>
          <h3 className="font-headline text-4xl md:text-5xl font-bold text-primary">Kenapa Memilih Kami?</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <div key={idx} className="p-8 bg-white border border-secondary rounded-3xl group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-secondary/50 group-hover:scale-110 transition-transform ${point.iconColor}`}>
                <point.icon className="w-8 h-8" />
              </div>
              <h4 className="font-headline font-bold text-2xl mb-4 text-primary">{point.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{point.desc}</p>
            </div>
          ))}
          
          <div className="p-8 bg-primary rounded-3xl flex flex-col justify-center items-center text-center space-y-4 group overflow-hidden relative shadow-lg">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full group-hover:scale-150 transition-transform duration-700" />
            <h4 className="font-headline font-bold text-2xl relative z-10 text-white">Siap Perbaiki Perangkat Anda?</h4>
            <p className="text-white/80 text-sm relative z-10">Konsultasikan kerusakan perangkat Anda secara gratis hari ini!</p>
            <a href={whatsappLink} target="_blank" className="relative z-10 inline-block px-8 py-3 bg-white text-primary font-bold rounded-full text-sm hover:scale-105 transition-transform shadow-md">Hubungi Admin</a>
          </div>
        </div>
      </div>
    </section>
  );
}
