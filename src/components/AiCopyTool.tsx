"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Sparkles, Copy, Loader2, CheckCircle } from 'lucide-react';
import { generateServicePackageDescriptions, type GenerateServicePackageDescriptionsOutput } from '@/ai/flows/generate-service-package-descriptions';
import { toast } from '@/hooks/use-toast';

export default function AiCopyTool() {
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [result, setResult] = useState<GenerateServicePackageDescriptionsOutput | null>(null);
  const [serviceType, setServiceType] = useState('');
  const [packageIdea, setPackageIdea] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceType || !packageIdea) {
      toast({
        title: "Input Kurang Lengkap",
        description: "Mohon isi jenis layanan dan ide paket terlebih dahulu.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    setResult(null);
    try {
      const output = await generateServicePackageDescriptions({ serviceType, packageIdea });
      setResult(output);
    } catch (error) {
      toast({
        title: "Gagal Generate",
        description: "Terjadi kesalahan saat memproses permintaan AI. Coba lagi nanti.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast({
      title: "Berhasil Disalin",
      description: "Teks promosi telah disalin ke papan klip Anda."
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-tool" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3" /> Fitur AI Gen
            </div>
            <h3 className="font-headline text-4xl font-bold">Pembuat Copywriting Otomatis</h3>
            <p className="text-muted-foreground">
              Bantu kembangkan bisnis Anda dengan deskripsi layanan yang persuasif dalam hitungan detik.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <Card className="bg-card border-white/10 p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-xl">Input Ide Layanan</CardTitle>
                <CardDescription>Jelaskan secara singkat jenis jasa dan ide paket Anda.</CardDescription>
              </CardHeader>
              <form onSubmit={handleGenerate} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Jenis Layanan</label>
                  <Input 
                    placeholder="Contoh: Perbaikan Laptop, Pembersihan AC..." 
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="bg-background/50 border-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Ide Paket / Keunggulan</label>
                  <Textarea 
                    placeholder="Contoh: Paket cepat untuk mahasiswa, harga terjangkau dan bergaransi..." 
                    className="min-h-[120px] bg-background/50 border-white/10"
                    value={packageIdea}
                    onChange={(e) => setPackageIdea(e.target.value)}
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={loading} 
                  className="w-full font-bold group"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sedang Memproses...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate Copywriting
                    </>
                  )}
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              {!result && !loading && (
                <div className="h-full border-2 border-dashed border-white/5 rounded-3xl flex flex-col items-center justify-center p-12 text-center text-muted-foreground">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 opacity-20" />
                  </div>
                  <p>Hasil copywriting AI akan muncul di sini setelah Anda melakukan generate.</p>
                </div>
              )}

              {loading && (
                <div className="h-full bg-card/50 border border-white/5 rounded-3xl p-12 flex flex-col items-center justify-center space-y-4">
                  <Loader2 className="w-12 h-12 text-primary animate-spin" />
                  <p className="animate-pulse text-primary font-medium">AI sedang merangkai kata-kata terbaik untuk Anda...</p>
                </div>
              )}

              {result && (
                <Card className="bg-primary/5 border-primary/20 overflow-hidden animate-in fade-in slide-in-from-right-4 duration-500">
                  <CardHeader className="bg-primary/10 border-b border-primary/20 flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-primary font-headline text-2xl">{result.packageName}</CardTitle>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-primary hover:bg-primary/20" 
                      onClick={() => copyToClipboard(`${result.packageName}\n\n${result.description}\n\nFitur:\n${result.features.join('\n')}`)}
                    >
                      {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    </Button>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Deskripsi Marketing</h4>
                      <p className="text-white/90 leading-relaxed italic">"{result.description}"</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Fitur Utama</h4>
                      <ul className="grid grid-cols-1 gap-2">
                        {result.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}