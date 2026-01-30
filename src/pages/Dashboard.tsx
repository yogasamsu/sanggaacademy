import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Play,
  Clock,
  Users,
  Trophy,
  Star,
  ChevronRight,
  LayoutDashboard,
  GraduationCap,
  Settings,
  LogOut,
  Menu,
  X,
  CheckCircle2,
  Lock,
  PlayCircle
} from "lucide-react";

// YouTube videos from @Caveine channel (dummy data structure)
const courses = [
  {
    id: 1,
    title: "Sales & Marketing with AI",
    description: "Kuasai teknik sales dan marketing modern dengan bantuan AI tools",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    instructor: "Tim SanggaAcademy",
    duration: "4 jam 30 menit",
    lessons: 12,
    students: 245,
    rating: 4.9,
    progress: 65,
    modules: [
      {
        title: "Introduction to AI-Powered Sales",
        lessons: [
          { id: 1, title: "Kenapa AI Penting untuk Sales?", duration: "12:30", videoId: "dQw4w9WgXcQ", completed: true },
          { id: 2, title: "Overview Tools AI untuk Sales", duration: "15:45", videoId: "dQw4w9WgXcQ", completed: true },
          { id: 3, title: "Mindset Shift: Traditional vs AI-Powered", duration: "10:20", videoId: "dQw4w9WgXcQ", completed: false },
        ]
      },
      {
        title: "ChatGPT for Sales Communication",
        lessons: [
          { id: 4, title: "Crafting Perfect Cold Emails", duration: "18:00", videoId: "dQw4w9WgXcQ", completed: false },
          { id: 5, title: "Creating Sales Scripts with AI", duration: "20:15", videoId: "dQw4w9WgXcQ", completed: false },
          { id: 6, title: "Personalization at Scale", duration: "14:30", videoId: "dQw4w9WgXcQ", completed: false },
        ]
      },
      {
        title: "AI for Marketing Content",
        lessons: [
          { id: 7, title: "Content Strategy dengan AI", duration: "22:00", videoId: "dQw4w9WgXcQ", completed: false },
          { id: 8, title: "Social Media Copywriting", duration: "16:45", videoId: "dQw4w9WgXcQ", completed: false },
          { id: 9, title: "Creating Viral Content Hooks", duration: "13:20", videoId: "dQw4w9WgXcQ", completed: false },
        ]
      },
      {
        title: "Advanced AI Automation",
        lessons: [
          { id: 10, title: "Building Sales Workflows", duration: "25:00", videoId: "dQw4w9WgXcQ", completed: false },
          { id: 11, title: "Lead Scoring dengan AI", duration: "19:30", videoId: "dQw4w9WgXcQ", completed: false },
          { id: 12, title: "Final Project: AI Sales System", duration: "30:00", videoId: "dQw4w9WgXcQ", completed: false },
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Digital Marketing Fundamentals",
    description: "Pelajari dasar-dasar digital marketing dari nol sampai mahir",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    instructor: "Tim SanggaAcademy",
    duration: "6 jam",
    lessons: 18,
    students: 412,
    rating: 4.8,
    progress: 20,
    modules: []
  },
  {
    id: 3,
    title: "Advanced Sales Techniques",
    description: "Teknik closing yang proven untuk meningkatkan conversion rate",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    instructor: "Tim SanggaAcademy",
    duration: "3 jam 45 menit",
    lessons: 10,
    students: 189,
    rating: 4.9,
    progress: 0,
    modules: []
  }
];

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [currentVideo, setCurrentVideo] = useState<{
    id: number;
    title: string;
    videoId: string;
  } | null>(null);

  const totalLessons = selectedCourse.modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const completedLessons = selectedCourse.modules.reduce(
    (acc, module) => acc + module.lessons.filter(l => l.completed).length,
    0
  );

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform lg:translate-x-0 lg:static ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-border">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary-gradient flex items-center justify-center shadow-md">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-foreground leading-tight">
                  Sangga<span className="text-primary">Academy</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-medium">
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted transition-colors">
              <BookOpen className="w-5 h-5" />
              Kelas Saya
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted transition-colors">
              <Trophy className="w-5 h-5" />
              Sertifikat
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted transition-colors">
              <Settings className="w-5 h-5" />
              Pengaturan
            </button>
          </nav>

          {/* User */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">U</span>
              </div>
              <div>
                <h4 className="font-medium text-foreground">User Demo</h4>
                <p className="text-xs text-muted-foreground">user@demo.com</p>
              </div>
            </div>
            <Link to="/">
              <Button variant="ghost" size="sm" className="w-full justify-start gap-2 text-muted-foreground">
                <LogOut className="w-4 h-4" />
                Keluar
              </Button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-h-screen">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 bg-card/80 backdrop-blur-md border-b border-border">
          <div className="flex items-center justify-between px-6 h-16">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <div>
              <h1 className="text-xl font-bold text-foreground">Dashboard</h1>
              <p className="text-sm text-muted-foreground">Selamat datang kembali! 👋</p>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/pricing">
                <Button variant="fun" size="sm">
                  Upgrade Pro
                </Button>
              </Link>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground text-sm">Kelas Aktif</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">3</h3>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Play className="w-5 h-5 text-accent" />
                </div>
                <span className="text-muted-foreground text-sm">Video Ditonton</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">24</h3>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-mint/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground text-sm">Jam Belajar</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">12.5</h3>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-yellow/20 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-yellow" />
                </div>
                <span className="text-muted-foreground text-sm">Sertifikat</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">1</h3>
            </div>
          </div>

          {/* Current Course */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Lanjutkan Belajar 📚</h2>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Video Player */}
              <div className="lg:col-span-2 space-y-4">
                <div className="aspect-video rounded-2xl overflow-hidden bg-foreground/5 relative">
                  {currentVideo ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${currentVideo.videoId}`}
                      title={currentVideo.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                      <PlayCircle className="w-16 h-16 mb-4 text-primary" />
                      <p className="text-lg font-medium">Pilih video untuk mulai belajar</p>
                      <p className="text-sm">Klik salah satu video di daftar materi</p>
                    </div>
                  )}
                </div>

                {/* Course Info */}
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {currentVideo ? currentVideo.title : selectedCourse.title}
                      </h3>
                      <p className="text-muted-foreground">{selectedCourse.description}</p>
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-yellow/20">
                      <Star className="w-4 h-4 text-yellow fill-yellow" />
                      <span className="text-sm font-medium">{selectedCourse.rating}</span>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium text-primary">{completedLessons}/{totalLessons} video</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full bg-primary-gradient transition-all"
                          style={{ width: `${(completedLessons / totalLessons) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Curriculum */}
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="p-4 border-b border-border">
                  <h3 className="font-bold text-foreground">Daftar Materi</h3>
                  <p className="text-sm text-muted-foreground">{totalLessons} video • {selectedCourse.duration}</p>
                </div>
                <div className="max-h-[500px] overflow-y-auto">
                  {selectedCourse.modules.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="border-b border-border last:border-0">
                      <div className="p-4 bg-muted/50">
                        <h4 className="font-medium text-foreground text-sm">{module.title}</h4>
                      </div>
                      <div>
                        {module.lessons.map((lesson) => (
                          <button
                            key={lesson.id}
                            onClick={() => setCurrentVideo({ id: lesson.id, title: lesson.title, videoId: lesson.videoId })}
                            className={`w-full p-4 flex items-center gap-3 hover:bg-muted/50 transition-colors text-left ${
                              currentVideo?.id === lesson.id ? "bg-primary/5" : ""
                            }`}
                          >
                            {lesson.completed ? (
                              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            ) : (
                              <PlayCircle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                            )}
                            <div className="flex-1 min-w-0">
                              <p className={`text-sm truncate ${
                                currentVideo?.id === lesson.id ? "text-primary font-medium" : "text-foreground"
                              }`}>
                                {lesson.title}
                              </p>
                              <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Other Courses */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-foreground">Kelas Lainnya</h2>
              <Link to="/kelas">
                <Button variant="ghost" size="sm" className="gap-1">
                  Lihat Semua <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.slice(1).map((course) => (
                <div
                  key={course.id}
                  className="rounded-2xl bg-card border border-border overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
                  onClick={() => setSelectedCourse(course)}
                >
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-sm text-primary-foreground/80">{course.lessons} video</span>
                      <h3 className="text-lg font-bold text-primary-foreground">{course.title}</h3>
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Play className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        {course.students}
                      </div>
                    </div>
                    {course.progress > 0 && (
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium text-primary">{course.progress}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full rounded-full bg-primary"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-foreground/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
