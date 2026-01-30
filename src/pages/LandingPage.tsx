import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  Play, 
  Users, 
  Trophy, 
  Zap,
  ArrowRight,
  CheckCircle2,
  Star,
  BookOpen,
  Target,
  TrendingUp,
  Rocket
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LandingPage = () => {
  const features = [
    {
      icon: Zap,
      title: "Belajar Anti Boring",
      description: "Materi dikemas dengan gaya yang fun, banyak contoh real case, dan tentunya... meme! 😂"
    },
    {
      icon: Target,
      title: "Langsung Praktek",
      description: "Bukan cuma teori doang. Setiap modul ada project yang bisa langsung kamu aplikasikan."
    },
    {
      icon: TrendingUp,
      title: "AI-Powered Learning",
      description: "Belajar cara leverage AI untuk boost productivity sales & marketing kamu."
    },
    {
      icon: Users,
      title: "Komunitas Supportif",
      description: "Gabung komunitas learner yang saling support. Networking sambil belajar bareng!"
    }
  ];

  const stats = [
    { value: "500+", label: "Peserta Aktif" },
    { value: "50+", label: "Video Materi" },
    { value: "4.9", label: "Rating Kelas" },
    { value: "95%", label: "Completion Rate" }
  ];

  const testimonials = [
    {
      name: "Sarah Wijaya",
      role: "Digital Marketer",
      content: "Akhirnya ada kelas yang ga bikin ngantuk! Materinya applicable banget buat kerjaan sehari-hari.",
      rating: 5
    },
    {
      name: "Budi Santoso",
      role: "Sales Manager",
      content: "Lucu Bareng Pinter bukan cuma tagline, tapi beneran kerasa di setiap video. Highly recommended!",
      rating: 5
    },
    {
      name: "Rina Kusuma",
      role: "Startup Founder",
      content: "Worth every penny! Sekarang tim saya jadi lebih produktif setelah apply ilmu dari sini.",
      rating: 5
    }
  ];

  const curriculum = [
    {
      module: "Module 1",
      title: "Fundamental Sales Psychology",
      topics: ["Understanding buyer behavior", "Building rapport", "Overcoming objections"]
    },
    {
      module: "Module 2",
      title: "Digital Marketing Mastery",
      topics: ["Social media strategy", "Content marketing", "Paid ads fundamentals"]
    },
    {
      module: "Module 3",
      title: "AI Tools for Productivity",
      topics: ["ChatGPT for sales", "AI content creation", "Automation workflows"]
    },
    {
      module: "Module 4",
      title: "Data-Driven Decision Making",
      topics: ["Marketing analytics", "Sales metrics", "A/B testing"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-20 overflow-hidden bg-hero-gradient">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 animate-float" />
          <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-accent/10 animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-20 left-1/4 w-16 h-16 rounded-full bg-mint/30 animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full bg-pink/20 animate-float" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-bounce-gentle">
              <Sparkles className="w-4 h-4" />
              <span>Platform Belajar #1 Indonesia</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Grow Your Sales & Marketing Skills with{" "}
              <span className="text-gradient">LBP</span>
            </h1>

            {/* LBP Explanation */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl">😂</span>
                <span className="font-bold text-primary">Lucu</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-accent" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">🤝</span>
                <span className="font-bold text-primary">Bareng</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-accent" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">🧠</span>
                <span className="font-bold text-primary">Pinter</span>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Belajar sales & marketing ga harus boring! Di SanggaAcademy, kamu bakal belajar 
              dengan cara yang <strong>seru</strong>, <strong>applicable</strong>, dan tentunya... <strong>pake AI!</strong> 🚀
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link to="/dashboard">
                <Button variant="hero" size="xl" className="group">
                  <Rocket className="w-5 h-5" />
                  Mulai Belajar Gratis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/kelas">
                <Button variant="outline" size="xl" className="gap-2">
                  <Play className="w-5 h-5" />
                  Lihat Preview Kelas
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Kenapa Harus di SanggaAcademy? 🤔
            </h2>
            <p className="text-muted-foreground text-lg">
              Karena belajar yang efektif itu yang bikin kamu semangat, bukan yang bikin ngantuk.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Preview */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Apa yang Bakal Kamu Pelajari? 📚
            </h2>
            <p className="text-muted-foreground text-lg">
              Kurikulum yang disusun berdasarkan real-world experience, bukan teori doang.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {curriculum.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    {item.module}
                  </span>
                  <BookOpen className="w-5 h-5 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <ul className="space-y-2">
                  {item.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/kelas">
              <Button variant="hero" size="lg">
                Lihat Semua Materi
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Kata Mereka yang Sudah Belajar ⭐
            </h2>
            <p className="text-muted-foreground text-lg">
              Real review dari peserta yang sudah merasakan manfaatnya.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow text-yellow" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl mb-6">🎉</div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Level Up Your Skills?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Gabung sekarang dan rasakan pengalaman belajar yang beda. 
              Yang bikin kamu semangat, bukan ngantuk!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/dashboard">
                <Button variant="secondary" size="xl" className="group">
                  <Trophy className="w-5 h-5" />
                  Daftar Sekarang - Gratis!
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/corporate">
                <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Corporate Training
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
