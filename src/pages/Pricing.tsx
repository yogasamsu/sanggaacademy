import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Check,
  Sparkles,
  Zap,
  Crown,
  ArrowRight,
  CreditCard,
  Shield,
  Clock
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const plans = [
    {
      id: "starter",
      name: "Starter",
      description: "Untuk yang baru mulai belajar",
      price: 99000,
      period: "sekali bayar",
      icon: Zap,
      features: [
        "Akses 1 kelas pilihan",
        "Video materi berkualitas HD",
        "Sertifikat digital",
        "Akses selamanya",
        "Komunitas Discord"
      ],
      highlighted: false
    },
    {
      id: "pro",
      name: "Pro",
      description: "Paling populer untuk professional",
      price: 299000,
      period: "/bulan",
      icon: Sparkles,
      features: [
        "Akses SEMUA kelas",
        "Video materi berkualitas HD",
        "Sertifikat digital unlimited",
        "Live Q&A bulanan",
        "Komunitas Discord Premium",
        "Download materi offline",
        "Priority support"
      ],
      highlighted: true
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Untuk tim dan perusahaan",
      price: 0,
      period: "custom",
      icon: Crown,
      features: [
        "Semua fitur Pro",
        "Dedicated account manager",
        "Custom curriculum",
        "On-site training option",
        "Team analytics dashboard",
        "Invoice payment",
        "SLA support"
      ],
      highlighted: false
    }
  ];

  const handlePurchase = (planId: string) => {
    setSelectedPlan(planId);
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert(`Demo: Pembayaran untuk paket ${planId} berhasil! (Ini adalah simulasi)`);
    }, 2000);
  };

  const formatPrice = (price: number) => {
    if (price === 0) return "Hubungi Kami";
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-24 lg:pt-32 pb-12 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Investasi Terbaik untuk Skill Kamu</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              Pilih Paket yang Sesuai 💰
            </h1>
            <p className="text-lg text-muted-foreground">
              Belajar tanpa batas dengan akses ke semua materi premium
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 transition-all ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground scale-105 shadow-glow"
                    : "bg-card border border-border"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                    Paling Populer
                  </div>
                )}

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  plan.highlighted ? "bg-primary-foreground/20" : "bg-primary/10"
                }`}>
                  <plan.icon className={`w-7 h-7 ${
                    plan.highlighted ? "text-primary-foreground" : "text-primary"
                  }`} />
                </div>

                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.highlighted ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${
                  plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className={`text-4xl font-extrabold ${
                    plan.highlighted ? "text-primary-foreground" : "text-foreground"
                  }`}>
                    {formatPrice(plan.price)}
                  </span>
                  {plan.price > 0 && (
                    <span className={`text-sm ml-1 ${
                      plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}>
                      {plan.period}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? "text-primary-foreground" : "text-primary"
                      }`} />
                      <span className={`text-sm ${
                        plan.highlighted ? "text-primary-foreground/90" : "text-foreground"
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {plan.price > 0 ? (
                  <Button
                    variant={plan.highlighted ? "secondary" : "hero"}
                    size="lg"
                    className="w-full"
                    onClick={() => handlePurchase(plan.id)}
                    disabled={isProcessing && selectedPlan === plan.id}
                  >
                    {isProcessing && selectedPlan === plan.id ? (
                      <>
                        <Clock className="w-5 h-5 animate-spin" />
                        Memproses...
                      </>
                    ) : (
                      <>
                        <CreditCard className="w-5 h-5" />
                        Beli Sekarang
                      </>
                    )}
                  </Button>
                ) : (
                  <a href="https://api.whatsapp.com/send/?phone=6282111885730&text=Halo, saya tertarik dengan paket Enterprise SanggaAcademy" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant={plan.highlighted ? "secondary" : "outline"}
                      size="lg"
                      className="w-full"
                    >
                      Hubungi Sales
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-16 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm">Pembayaran Aman</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm">Akses Instan</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-primary" />
              <span className="text-sm">Berbagai Metode Pembayaran</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Pertanyaan yang Sering Diajukan 🤔
          </h2>

          <div className="max-w-2xl mx-auto space-y-4">
            {[
              {
                q: "Apakah ada garansi uang kembali?",
                a: "Ya! Kami memberikan garansi 7 hari uang kembali jika kamu tidak puas dengan materinya."
              },
              {
                q: "Bagaimana cara mengakses materi setelah pembayaran?",
                a: "Setelah pembayaran berhasil, kamu langsung bisa login dan akses semua materi di dashboard."
              },
              {
                q: "Apakah sertifikat diakui?",
                a: "Sertifikat kami diakui oleh berbagai perusahaan dan dapat ditambahkan ke LinkedIn profile kamu."
              },
              {
                q: "Bisa bayar pakai apa saja?",
                a: "Kami menerima transfer bank, kartu kredit/debit, e-wallet (GoPay, OVO, Dana), dan virtual account."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border">
                <h4 className="font-bold text-foreground mb-2">{faq.q}</h4>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
