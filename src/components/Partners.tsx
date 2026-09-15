"use client"

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Hourglass, Handshake, Landmark, Package, Award, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Partners() {
  const brands = PlaceHolderImages.filter(img => img.id.startsWith('brand-'));
  const partners = PlaceHolderImages.filter(img => img.id.startsWith('partner-'));
  const certificates = PlaceHolderImages.filter(img => img.id.startsWith('cert-'));

  const stats = [
    { value: "7", label: "Thn Pengalaman", icon: Hourglass },
    { value: "10+", label: "Kolaborasi Brand", icon: Handshake },
    { value: "15+", label: "Instansi Resmi Telah Bekerjasama", icon: Landmark },
    { value: "200+", label: "Proyek Terselesaikan Dalam Setiap Tahun Nya", icon: Package }
  ];

  return (
    <section id="partners" className="relative overflow-hidden bg-white border-t border-secondary/50">
      {/* Brand Showcase Marquee */}
      <div className="py-16 bg-secondary/5 border-b border-secondary/30">
        <div className="container mx-auto px-4 mb-10 text-center">
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-[10px]">Official Authorized Brands</span>
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary mt-2">Solusi Brand Ternama</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Kami merupakan Authorized Dealer resmi untuk berbagai brand sistem keamanan global terpercaya.</p>
        </div>

        <div className="relative flex overflow-hidden py-4">
          <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
            {[...brands, ...brands].map((brand, idx) => (
              <div key={idx} className="relative w-56 h-28 md:w-72 md:h-36 flex-shrink-0 group">
                <div className="absolute inset-0 bg-white rounded-xl shadow-sm border border-secondary/30 overflow-hidden transition-all duration-500 group-hover:shadow-md group-hover:-translate-y-1 flex items-center justify-center p-4">
                  <div className="relative w-full h-full">
                    <Image 
                      src={brand.imageUrl} 
                      alt={brand.description} 
                      fill 
                      className="object-contain"
                      data-ai-hint={brand.imageHint}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>

      {/* Corporate Partner Section - Klien Kami Marquee */}
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
          <div className="flex animate-marquee-reverse whitespace-nowrap gap-12 items-center">
            {[...partners, ...partners].map((partner, idx) => (
              <div key={idx} className="relative w-56 h-28 md:w-72 md:h-36 flex-shrink-0 group">
                <div className="absolute inset-0 bg-white rounded-xl shadow-sm border border-secondary/30 overflow-hidden transition-all duration-500 group-hover:shadow-md group-hover:-translate-y-1 flex items-center justify-center p-4">
                  <div className="relative w-full h-full">
                    <Image 
                      src={partner.imageUrl} 
                      alt={partner.description} 
                      fill 
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>

      {/* Certificates Section - scrolling marquee style */}
      <div className="py-20 bg-secondary/5 border-b border-secondary/30">
        <div className="container mx-auto px-4 mb-12">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-accent font-bold tracking-widest text-[10px] uppercase">
              <Award className="w-4 h-4" /> Kompetensi & Sertifikasi
            </div>
            <h2 className="font-headline text-3xl font-bold text-primary uppercase tracking-tight">Authorized Technology Dealer</h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto mt-4">
              Kami secara resmi diakui oleh prinsipal teknologi sebagai penyedia layanan sistem keamanan bersertifikat.
            </p>
          </div>
        </div>

        <div className="relative flex overflow-hidden py-8">
          <div className="flex animate-marquee whitespace-nowrap gap-12 items-center px-6">
            {[...certificates, ...certificates].map((cert, idx) => (
              <div key={idx} className="relative w-[480px] h-[340px] md:w-[560px] md:h-[400px] flex-shrink-0 group">
                <Card className="h-full overflow-hidden border-2 border-secondary/50 shadow-xl group transition-all duration-500 bg-white rounded-3xl">
                  <CardContent className="p-0 h-full">
                    <div className="relative h-full w-full bg-white flex items-center justify-center p-4">
                      <Image 
                        src={cert.imageUrl} 
                        alt={cert.description} 
                        fill 
                        className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-8 text-center text-white backdrop-blur-sm">
                        <CheckCircle2 className="w-12 h-12 mb-4 text-accent" />
                        <h4 className="font-bold text-lg mb-2">{cert.description}</h4>
                        <p className="text-xs text-white/70">Terverifikasi Internasional & Profesional</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>

      {/* Company Performance Section */}
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
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-white border border-secondary hover:shadow-xl hover:-translate-y-1 transition-all group">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary flex items-center justify-center text-white group-hover:bg-accent group-hover:rotate-12 transition-all shadow-lg">
                    <stat.icon className="w-6 h-6 md:w-8 h-8" />
                  </div>
                  <div className="text-center">
                    <p className="text-2xl md:text-4xl font-headline font-bold text-primary leading-tight">{stat.value}</p>
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.1em] text-muted-foreground font-bold mt-2 leading-tight">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-12 border-t border-secondary">
              <p className="text-[10px] font-bold tracking-[0.6em] uppercase text-primary/30">
                precision execution & excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}