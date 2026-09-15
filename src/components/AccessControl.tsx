
import Image from 'next/image';
import { Fingerprint, CreditCard, Scan, Grid, ShieldCheck } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AccessControl() {
  const accessControlImg = PlaceHolderImages.find(img => img.id === 'access-control-main');

  const features = [
    { icon: Fingerprint, label: "Biometric Scan", color: "text-blue-500", bgColor: "bg-blue-50" },
    { icon: CreditCard, label: "RFID technology", color: "text-amber-500", bgColor: "bg-amber-50" },
    { icon: Scan, label: "Face Recognition", color: "text-emerald-500", bgColor: "bg-emerald-50" },
    { icon: Grid, label: "Keypad Access", color: "text-purple-500", bgColor: "bg-purple-50" },
  ];

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden relative border-t border-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
          
          {/* Text Left */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-600 text-[10px] font-bold uppercase tracking-widest border border-sky-100 mx-auto lg:ml-0">
                <ShieldCheck className="w-3 h-3" /> Area Terbatas
              </div>
              <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight text-primary uppercase">
                Access <span className="text-accent">Control</span>
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:ml-0">
                Sistem atau kebijakan yang mengatur siapa yang boleh mengakses sumber daya tertentu secara presisi menggunakan technology biometric tercanggih untuk keamanan tingkat tinggi.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              {features.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-start gap-4 p-6 rounded-[2rem] border border-secondary/30 transition-all group hover:shadow-md bg-white">
                  <div className={`w-12 h-12 rounded-2xl ${item.bgColor} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform shadow-sm`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-[10px] uppercase tracking-wider text-center lg:text-left text-primary">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Right */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-sky-50">
              {accessControlImg && (
                <Image 
                  src={accessControlImg.imageUrl} 
                  alt={accessControlImg.description} 
                  fill 
                  className="object-cover"
                  data-ai-hint={accessControlImg.imageHint}
                />
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
