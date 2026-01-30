import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Users,
  TrendingUp,
  BarChart3,
  Brain,
  CheckCircle2,
  ArrowRight,
  Building2,
  Target,
  Zap,
  Star,
  Phone
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CorporateTraining = () => {
  const programs = [
    {
      icon: TrendingUp,
      title: "Sales Training",
      description: "Tingkatkan kemampuan tim sales dengan teknik closing modern dan AI-powered prospecting.",
      topics: ["Consultative Selling", "AI for Sales", "Negotiation Skills", "CRM Mastery"]
    },
    {
      icon: BarChart3,
      title: "Marketing Training",
      description: "Kuasai strategi digital marketing dari content creation sampai performance marketing.",
      topics: ["Digital Marketing Strategy", "Content Marketing", "Social Media Ads", "Marketing Analytics"]
    },
    {
      icon: Briefcase,
      title: "Finance Training",
      description: "Perkuat pemahaman finansial tim dengan pelatihan praktis dan applicable.",
      topics: ["Financial Analysis", "Budgeting & Forecasting", "Cost Management", "Financial Reporting"]
    },
    {
      icon: Brain,
      title: "Data Analysis Training",
      description: "Berdayakan tim dengan kemampuan data analysis untuk pengambilan keputusan berbasis data.",
      topics: ["Excel Advanced", "Data Visualization", "SQL Fundamentals", "Business Intelligence"]
    }
  ];

  const benefits = [
    "Kurikulum disesuaikan dengan kebutuhan perusahaan",
    "Trainer berpengalaman dari praktisi industri",
    "Metode pembelajaran interaktif dan fun (LBP style!)",
    "Post-training support & consultation",
    "Sertifikat untuk semua peserta",
    "Flexible schedule (online/offline)"
  ];

  const clients = [
    "Bank Central Asia", "Tokopedia", "Gojek", "Telkom Indonesia", 
    "Unilever", "Pertamina", "Astra International", "Bank Mandiri"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-20 overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-primary/10 animate-float" />
          <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-accent/10 animate-float" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              <span>Corporate Training Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Upgrade Skills Tim Anda dengan Training yang{" "}
              <span className="text-primary">Fun & Impactful</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Program corporate training B2B yang dirancang khusus untuk meningkatkan 
              kapabilitas tim sales, marketing, finance, dan data analysis perusahaan Anda.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://api.whatsapp.com/send/?phone=6282111885730&text=Halo, saya tertarik dengan Corporate Training SanggaAcademy" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="group">
                  <Phone className="w-5 h-5" />
                  Konsultasi Gratis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Link to="/kelas">
                <Button variant="outline" size="xl">
                  Lihat Program
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Program Training Kami 💼
            </h2>
            <p className="text-muted-foreground text-lg">
              Pilih program yang sesuai dengan kebutuhan pengembangan tim Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <program.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{program.title}</h3>
                    <p className="text-muted-foreground mb-4">{program.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {program.topics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Mengapa Pilih SanggaAcademy untuk Corporate Training? 🎯
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Kami tidak hanya memberikan training, tapi pengalaman belajar yang berkesan dan hasil yang terukur.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-card border border-border text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-3xl font-bold text-foreground mb-1">50+</h4>
                <p className="text-muted-foreground text-sm">Corporate Clients</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <h4 className="text-3xl font-bold text-foreground mb-1">5000+</h4>
                <p className="text-muted-foreground text-sm">Trained Employees</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border text-center">
                <div className="w-14 h-14 rounded-xl bg-mint/30 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-3xl font-bold text-foreground mb-1">200+</h4>
                <p className="text-muted-foreground text-sm">Training Sessions</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border text-center">
                <div className="w-14 h-14 rounded-xl bg-yellow/30 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-7 h-7 text-yellow" />
                </div>
                <h4 className="text-3xl font-bold text-foreground mb-1">4.9</h4>
                <p className="text-muted-foreground text-sm">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-background border-y border-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-8">
            Dipercaya oleh perusahaan-perusahaan terkemuka di Indonesia
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-lg bg-muted/50 text-muted-foreground font-medium"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl mb-6">🤝</div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Siap Upgrade Tim Anda?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Konsultasikan kebutuhan training perusahaan Anda dengan tim kami. 
              Kami akan bantu design program yang tepat untuk tim Anda.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://api.whatsapp.com/send/?phone=6282111885730&text=Halo, saya tertarik dengan Corporate Training SanggaAcademy" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="xl" className="group">
                  <Phone className="w-5 h-5" />
                  Hubungi Kami Sekarang
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporateTraining;
