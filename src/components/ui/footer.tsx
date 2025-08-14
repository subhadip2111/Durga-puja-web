import { Heart, Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-festival text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Committee Info */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">Durga Puja Committee 2024</h3>
            <p className="text-white/90 mb-4">
              Celebrating the divine power of Maa Durga with devotion, culture, and community spirit. 
              Join us in this sacred festival that brings together hearts and souls.
            </p>
            <div className="flex items-center space-x-2 text-festival-gold">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Made with love for our community</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-festival-gold transition-colors">Festival Schedule</a></li>
              <li><a href="#" className="text-white/80 hover:text-festival-gold transition-colors">Cultural Programs</a></li>
              <li><a href="#" className="text-white/80 hover:text-festival-gold transition-colors">Blood Donation</a></li>
              <li><a href="#" className="text-white/80 hover:text-festival-gold transition-colors">Photo Gallery</a></li>
              <li><a href="#" className="text-white/80 hover:text-festival-gold transition-colors">Volunteer</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-white/80 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-white/80 text-sm">info@durgapuja2024.org</span>
              </div>
              <div className="flex space-x-3 mt-4">
                <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/80 text-sm mb-4 md:mb-0">
            © 2024 Durga Puja Committee. All rights reserved.
          </div>
          <div className="text-white/80 text-sm">
            🙏 শুভ দুর্গা পূজা | Shubho Durga Puja 🙏
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;