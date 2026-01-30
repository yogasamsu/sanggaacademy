import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">
                  Sangga<span className="text-primary">Academy</span>
                </span>
                <span className="text-[10px] text-background/60 leading-tight">
                  by Sanggabiz
                </span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Platform belajar sales & marketing yang fun dan aplikatif. 
              Belajar bareng, jadi pinter bareng! 🚀
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@Caveine"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Navigasi</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/kelas" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Semua Kelas
                </Link>
              </li>
              <li>
                <Link to="/corporate" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Corporate Training
                </Link>
              </li>
              <li>
                <Link to="/tentang" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-lg mb-4">Program</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/kelas" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Sales Mastery
                </Link>
              </li>
              <li>
                <Link to="/kelas" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/kelas" className="text-background/70 hover:text-primary transition-colors text-sm">
                  AI for Business
                </Link>
              </li>
              <li>
                <Link to="/kelas" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Data Analysis
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Jakarta, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+6282111885730" className="text-background/70 hover:text-primary transition-colors text-sm">
                  +62 821-1188-5730
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:hello@sanggabiz.com" className="text-background/70 hover:text-primary transition-colors text-sm">
                  hello@sanggabiz.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © 2024 SanggaAcademy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-background/50 hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-background/50 hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
