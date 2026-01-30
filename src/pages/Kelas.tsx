import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Play,
  Clock,
  Users,
  Star,
  Filter,
  Search,
  Sparkles
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Kelas = () => {
  const courses = [
    {
      id: 1,
      title: "Sales & Marketing with AI",
      description: "Kuasai teknik sales dan marketing modern dengan bantuan AI tools terkini",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      category: "Sales & Marketing",
      instructor: "Tim SanggaAcademy",
      duration: "4 jam 30 menit",
      lessons: 12,
      students: 245,
      rating: 4.9,
      price: 299000,
      isFeatured: true
    },
    {
      id: 2,
      title: "Digital Marketing Fundamentals",
      description: "Pelajari dasar-dasar digital marketing dari nol sampai mahir",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      category: "Marketing",
      instructor: "Tim SanggaAcademy",
      duration: "6 jam",
      lessons: 18,
      students: 412,
      rating: 4.8,
      price: 249000,
      isFeatured: false
    },
    {
      id: 3,
      title: "Advanced Sales Techniques",
      description: "Teknik closing yang proven untuk meningkatkan conversion rate",
      thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800",
      category: "Sales",
      instructor: "Tim SanggaAcademy",
      duration: "3 jam 45 menit",
      lessons: 10,
      students: 189,
      rating: 4.9,
      price: 199000,
      isFeatured: false
    },
    {
      id: 4,
      title: "Social Media Marketing Mastery",
      description: "Strategi social media marketing yang efektif untuk bisnis",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
      category: "Marketing",
      instructor: "Tim SanggaAcademy",
      duration: "5 jam",
      lessons: 15,
      students: 328,
      rating: 4.7,
      price: 279000,
      isFeatured: false
    },
    {
      id: 5,
      title: "Data Analysis for Business",
      description: "Belajar analisis data untuk pengambilan keputusan bisnis",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      category: "Data Analysis",
      instructor: "Tim SanggaAcademy",
      duration: "7 jam",
      lessons: 20,
      students: 156,
      rating: 4.8,
      price: 349000,
      isFeatured: true
    },
    {
      id: 6,
      title: "Finance for Non-Finance",
      description: "Pahami dasar keuangan bisnis untuk non-finance professional",
      thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
      category: "Finance",
      instructor: "Tim SanggaAcademy",
      duration: "4 jam",
      lessons: 12,
      students: 203,
      rating: 4.6,
      price: 229000,
      isFeatured: false
    }
  ];

  const categories = ["Semua", "Sales & Marketing", "Marketing", "Sales", "Data Analysis", "Finance"];

  const formatPrice = (price: number) => {
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
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              Jelajahi Kelas Kami 📚
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Pilih kelas yang sesuai dengan kebutuhan skill development kamu
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Cari kelas..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Courses */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-lg transition-all"
              >
                {/* Thumbnail */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                  
                  {course.isFeatured && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </div>
                  )}

                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm text-foreground text-xs font-medium">
                    {course.category}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-primary-foreground text-sm font-medium">
                      {course.lessons} video
                    </span>
                    <div className="w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow fill-yellow" />
                      {course.rating}
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <span className="text-2xl font-bold text-foreground">
                        {formatPrice(course.price)}
                      </span>
                    </div>
                    <Link to="/pricing">
                      <Button variant="hero" size="sm">
                        Beli Kelas
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kelas;
