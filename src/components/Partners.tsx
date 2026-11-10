"use client"

import { Handshake, Hourglass, Landmark, Package } from 'lucide-react';

export default function Partners() {
  const brands = ['Dahua', 'Hikvision', 'HiLook', 'Imou', 'Uniview'];
  const partners = [
    'Daihatsu',
    'Adhi Persada Gedung',
    'Bank Mandiri',
    'Bogor Dental Center',
    'HIK Jateng',
    'Indocement',
    'Kejaksaan Agung',
    'Askrindo IFG',
    'BPR Syariah Sahabat UMKM',
    'KPKNL',
    'Telkomsigma',
    'Mega Baja',
    'Polresta Bogor Kota',
    'PT Jaya Obayashi',
    'Yogya Group',
  ];

  const stats = [
    { value: '7', label: 'Thn Pengalaman', icon: Hourglass },
    { value: '10+', label: 'Kolaborasi Brand', icon: Handshake },
    { value: '15+', label: 'Instansi Resmi Telah Bekerjasama', icon: Landmark },
    { value: '200+', label: 'Proyek Terselesaikan Dalam Setiap Tahun Nya', icon: Package },
  ];

  return (
    <section id="partners" className="relative overflow-hidden bg-white border-t border-secondary/50">
      <div className="py-16 bg-secondary/5 border-b border-secondary/30">
        <div className="container mx-auto px-4 mb-10 text-center">
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-[10px]">Official Authorized Brands</span>
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary mt-2">Solusi Brand Ternama</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Kami merupakan Authorized Dealer resmi untuk berbagai brand sistem keamanan global terpercaya.</p>
        </div>

        <div className="relative flex overflow-hidden py-4">
          <div className="flex animate-marquee whitespace-nowrap gap-6 items-center">
            {[...brands, ...brands].map((brand, idx) => (
              <div key={`${brand}-${idx}`} className="w-56 h-28 md:w-72 md:h-36 flex-shrink-0 rounded-xl bg-white shadow-sm border border-secondary/30 flex items-center justify-center px-6 text-center transition-all duration-500 hover:shadow-md hover:-translate-y-1">
                <span className="font-headline font-bold text-xl md:text-2xl tracking-wide uppercase text-primary">{brand}</span>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>

      <div className="py-20 border-b border-secondary overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <div className="text-center space-y-2">
            <span className="text-accent font-bold tracking-[0.3em] uppercase text-[10px]">Strategic Key Partner</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Klien Kami</h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto mt-4">
              Kepercayaan dari berbagai instansi pemerintah dan perusahaan swasta terkemuka adalah bukti dedikasi kami.
            </p>
          </div>
        </div>

        <div className="relative flex overflow-hidden py-4">
          <div className="flex animate-marquee-reverse whitespace-nowrap gap-6 items-center">
            {[...partners, ...partners].map((partner, idx) => (
              <div key={`${partner}-${idx}`} className="w-56 h-28 md:w-72 md:h-36 flex-shrink-0 rounded-xl bg-white shadow-sm border border-secondary/30 flex items-center justify-center px-6 text-center transition-all duration-500 hover:shadow-md hover:-translate-y-1">
                <span className="font-bold text-sm md:text-base tracking-wide uppercase text-primary whitespace-normal">{partner}</span>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>

      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h3 className="font-headline text-3xl md:text-5xl font-bold text-primary leading-[1.2] uppercase tracking-tight">
                Kinerja Perusahaan <br className="hidden md:block" />
                <span className="text-accent underline decoration-primary decoration-2 underline-offset-8">Dalam Angka</span>
              </h3>
              <p className="text-muted-foreground text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
                Pertumbuhan konsisten kami mencerminkan dedikasi tim dalam menghadirkan solusi keamanan terbaik di seluruh Indonesia.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-white border border-secondary hover:shadow-xl hover:-translate-y-1 transition-all group">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary flex items-center justify-center text-white group-hover:bg-accent group-hover:rotate-12 transition-all shadow-lg">
                    <stat.icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div className="text-center">
                    <p className="text-2xl md:text-4xl font-headline font-bold text-primary leading-tight">{stat.value}</p>
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.1em] text-muted-foreground font-bold mt-2 leading-tight">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-12 border-t border-secondary">
              <p className="text-[10px] font-bold tracking-[0.6em] uppercase text-primary/30">precision execution &amp; excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
