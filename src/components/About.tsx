"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Telescope, Compass } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            <div className="space-y-6 text-center">
              <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs">Profil Perusahaan</span>
              <h2 className="font-headline text-4xl md:text-6xl font-bold text-primary uppercase leading-tight tracking-tighter">
                Membangun Keamanan <br /> Masa Depan
              </h2>
              <div className="w-20 h-1.5 bg-accent mx-auto" />
            </div>

            <div className="bg-secondary/5 rounded-[2rem] p-4 md:p-8 border border-secondary/50">
              <Accordion type="single" collapsible className="w-full space-y-4 border-none">
                <AccordionItem value="vision" className="border border-secondary bg-white rounded-2xl px-6 overflow-hidden">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                        <Telescope className="w-6 h-6" />
                      </div>
                      <span className="font-headline text-xl font-bold text-primary uppercase tracking-tight">Visi Kami</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 pt-2">
                    <p className="text-muted-foreground text-lg leading-relaxed pl-14">
                      Berkaitan dengan nama Indonesia Technology, kami akan terus berupaya untuk menciptakan sistem keamanan merek dengan merk sendiri dan menjadikan produk-produk Indonesia berdaya saing di pasar nasional & internasional.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="mission" className="border border-secondary bg-white rounded-2xl px-6 overflow-hidden">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center text-accent">
                        <Compass className="w-6 h-6" />
                      </div>
                      <span className="font-headline text-xl font-bold text-primary uppercase tracking-tight">Misi Kami</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 pt-2">
                    <p className="text-muted-foreground text-lg leading-relaxed pl-14">
                      Kami terus bergerak & berkembang dengan mempelajari technology yang terus berkembang setiap tahun dan selalu mengevaluasi kinerja tim untuk mencapai kepuasan pelanggan.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="text-center">
               <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary/20">
                integrity & technology advancement
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
