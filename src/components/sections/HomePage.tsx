import heroImage from "../../../src/assets/gallery-collage..jpg";

import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "../ui/button";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-festival opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            শুভ দুর্গা পূজা
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-festival-gold">
            Durga Puja 2024
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join us in celebrating the divine power of Maa Durga with traditional rituals, 
            cultural programs, and community festivities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="golden" size="lg" className="text-lg px-8 py-3">
              <Calendar className="mr-2" />
              View Schedule
            </Button>
            <Button variant="divine" size="lg" className="text-lg px-8 py-3">
              <Users className="mr-2" />
              Join Celebration
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Welcome to Our Durga Puja Celebration
            </h2>
            <div className="w-24 h-1 bg-gradient-festival mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the grandeur of Durga Puja with our community. Four days of 
              devotion, culture, and celebration awaits you with traditional pujas, 
              cultural programs, and social activities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-elegant hover:shadow-festival transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-festival rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">4 Days Festival</h3>
              <p className="text-muted-foreground">
                Complete schedule of Shashthi, Saptami, Ashtami, and Navami celebrations
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-elegant hover:shadow-golden transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-golden rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Community Events</h3>
              <p className="text-muted-foreground">
                Cultural programs, blood donation camp, and student appreciation events
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-elegant hover:shadow-festival transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-divine rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Sacred Venue</h3>
              <p className="text-muted-foreground">
                Beautiful pandal setup with traditional decorations and divine atmosphere
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Festival Highlights
            </h2>
            <div className="w-24 h-1 bg-gradient-divine mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Traditional Pujas & Rituals
              </h3>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-festival-red rounded-full mr-4"></div>
                  Shashthi Puja - Kalparambha & Bodhon
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-festival-orange rounded-full mr-4"></div>
                  Saptami Puja - Mahasnan & Pran Pratishtha
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-festival-purple rounded-full mr-4"></div>
                  Ashtami Puja - Sandhi Puja & Kumari Puja
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-festival-gold rounded-full mr-4"></div>
                  Navami Puja - Maha Aarti & Visarjan
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Cultural Programs
              </h3>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-festival-red rounded-full mr-4"></div>
                  Traditional Dance Performances
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-festival-orange rounded-full mr-4"></div>
                  Classical Music Concerts
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-festival-purple rounded-full mr-4"></div>
                  Drama & Theatre Shows
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-festival-gold rounded-full mr-4"></div>
                  Children's Cultural Programs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;