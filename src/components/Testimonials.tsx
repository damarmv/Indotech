import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Andi Saputra",
      role: "Creative Professional",
      content: "Servis laptop di sini super cepat! Teknisi sangat komunikatif dan hasilnya memuaskan. Laptop saya jadi seperti baru lagi.",
      rating: 5,
      color: "bg-blue-500"
    },
    {
      name: "Siska Amelia",
      role: "Mahasiswi",
      content: "Awalnya ragu karena harganya miring, tapi ternyata kualitasnya juara. Garansinya juga beneran berlaku pas saya mau konsultasi ulang.",
      rating: 5,
      color: "bg-amber-500"
    },
    {
      name: "Budi Santoso",
      role: "Wirausaha",
      content: "Layanan jemputnya sangat membantu buat saya yang sibuk. Data aman, hardware oke, harga bersahabat. Rekomendasi banget!",
      rating: 5,
      color: "bg-emerald-500"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-accent font-bold tracking-[0.2em] uppercase text-sm">Testimoni</h2>
          <h3 className="font-headline text-4xl md:text-5xl font-bold text-primary">Kata Mereka Tentang Kami</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white border border-secondary p-8 rounded-3xl relative group hover:shadow-2xl transition-all duration-300">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/5" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8 italic">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${review.color} rounded-full flex items-center justify-center font-bold text-white shadow-lg`}>
                  {review.name[0]}
                </div>
                <div>
                  <h5 className="font-bold text-primary">{review.name}</h5>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}