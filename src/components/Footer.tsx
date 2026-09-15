"use client"

import Link from 'next/link';
import { Smartphone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useWhatsApp } from '@/hooks/use-whatsapp';

// Custom TikTok Icon
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    role="img" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    fill="currentColor"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.36-.54.38-.89.98-1.02 1.63-.14.76.07 1.53.57 2.13.58.7 1.47 1.07 2.36 1.01.92-.01 1.79-.54 2.1-1.44.11-.33.15-.69.16-1.04.02-4.48.01-8.96.01-13.44z"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const logoImage = PlaceHolderImages.find(img => img.id === 'company-logo');
  const whatsappLink = useWhatsApp();

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/indotechnology.id?igsh=YWxkNnMzZjYzemow' },
    { name: 'TikTok', icon: TikTokIcon, href: 'https://www.tiktok.com/@indotechh.id?_r=1&_t=ZS-95hBAf3ctoz' },
  ];

  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-14 h-14 transition-transform group-hover:scale-110">
                {logoImage && (
                  <Image 
                    src={logoImage.imageUrl} 
                    alt="Logo indonesia technology.corp" 
                    fill 
                    className="object-contain"
                    data-ai-hint="tech logo"
                  />
                )}
              </div>
              <div className="flex flex-col">
                <span className="font-headline font-bold text-xl tracking-tight text-white uppercase leading-none">
                  indonesia technology.corp
                </span>
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold mt-1">
                  Security System Solution
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Penyedia layanan Security System Solution terdepan sebagai Official Authorized Dealer. Melindungi masa depan Anda melalui technology yang terintegrasi.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <Link 
                  key={idx} 
                  href={social.href} 
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-headline font-bold text-xl text-accent">Kontak Bisnis</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 text-accent mt-1">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-bold uppercase">WhatsApp Business</p>
                  <Link href={whatsappLink} target="_blank" className="text-white hover:text-accent transition-colors">0831-9043-3681</Link>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 text-accent mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-bold uppercase">Email Inquiry</p>
                  <p className="text-white">Indotechnologybangga@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-headline font-bold text-xl text-accent">Kantor Pusat</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 text-accent mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-bold uppercase">Alamat</p>
                  <Link 
                    href="https://maps.google.com/?q=-6.530273,106.795731" 
                    target="_blank"
                    className="text-white hover:text-accent transition-colors"
                  >
                    Jalan Pesona Cilebut 1 No. BLOK I2/21
                  </Link>
                  <p className="text-xs text-accent font-bold uppercase tracking-widest mt-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    Melayani Se-Jabodetabek
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 text-accent mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-bold uppercase">Operasional</p>
                  <p className="text-white">Senin - Sabtu: 08:00 - 18:00<br />Minggu: 08:00 - 13:00 (Setengah Hari)<br /><span className="text-[10px] text-accent font-bold uppercase tracking-widest mt-1 block">Buka Setiap Hari</span></p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-headline font-bold text-xl text-accent">Tautan Cepat</h4>
            <ul className="grid grid-cols-1 gap-3">
              {['Produk Keamanan', 'Tentang Perusahaan', 'Pusat Dukungan', 'Kebijakan Privasi', 'Karir'].map((item, idx) => (
                <li key={idx}>
                  <Link href="#" className="text-sm text-white/60 hover:text-accent flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-accent transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center">
          <p className="text-sm text-white/40">
            &copy; {currentYear} indonesia technology.corp. All Rights Reserved. 
            <span className="block mt-2 md:inline md:mt-0 md:ml-4 text-white/10 italic">Beyond Limits, Guaranteed Security</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
