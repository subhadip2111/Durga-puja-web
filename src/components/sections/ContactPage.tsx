import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { MapPin, Phone, Mail, Facebook, Instagram, Clock, Users } from "lucide-react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const ContactPage = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "#",
      handle: "@DurgaPujaCommittee2024",
      color: "hover:text-blue-600"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "#",
      handle: "@durga_puja_2024",
      color: "hover:text-pink-600"
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Venue Address",
      details: ["Community Center", "123 Festival Street", "Cultural District, City - 700001"],
      color: "bg-festival-red"
    },
    {
      icon: Phone,
      title: "Contact Numbers",
      details: ["+91 98765 43210", "+91 87654 32109", "Emergency: +91 76543 21098"],
      color: "bg-festival-orange"
    },
    {
      icon: Mail,
      title: "Email Contact",
      details: ["info@durgapuja2024.org", "volunteer@durgapuja2024.org", "events@durgapuja2024.org"],
      color: "bg-festival-purple"
    },
    {
      icon: Clock,
      title: "Festival Timings",
      details: ["6:00 AM - 10:00 PM", "All 4 Days", "Special Programs: 7:00 PM onwards"],
      color: "bg-festival-gold"
    }
  ];

  const committeeMembers = [
    { role: "President", name: "Rajesh Kumar Sharma", phone: "+91 98765 43210" },
    { role: "Secretary", name: "Priya Devi Gupta", phone: "+91 87654 32109" },
    { role: "Treasurer", name: "Amit Kumar Das", phone: "+91 76543 21098" },
    { role: "Cultural Secretary", name: "Sunita Roy Chowdhury", phone: "+91 65432 10987" },
  ];
//  const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!, 
//   });

//   if (!isLoaded) return <div>Loading Map...</div>;

  // const coords = { lat: 22.2342, lng: 87.7995 }; // approx coords for Saira, WB

  return (
    <div className="min-h-screen bg-gradient-subtle py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-gradient-festival mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our organizing committee for any queries, suggestions, 
            or to join our celebration
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="p-6 hover:shadow-festival transition-all duration-300">
              <div className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center mb-4`}>
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Social Media & Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Social Media Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Follow Us</h2>
              <p className="text-muted-foreground mb-8">
                Stay updated with latest news, photos, and announcements about our Durga Puja celebration
              </p>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-elegant hover:shadow-festival transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-festival rounded-full flex items-center justify-center">
                      <social.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-foreground">{social.name}</h3>
                      <p className="text-muted-foreground text-sm">{social.handle}</p>
                    </div>
                    <Button variant="outline" size="sm" className={social.color}>
                      Follow
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-festival text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Emergency Contact</h3>
              <p className="mb-4 opacity-90">
                For urgent matters during the festival days, please contact our emergency helpline
              </p>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span className="text-lg font-semibold">+91 98765 43210</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-elegant p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Full Name</label>
                  <Input placeholder="Your full name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone Number</label>
                  <Input placeholder="Your phone number" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email Address</label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                <Input placeholder="What is this regarding?" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea placeholder="Your message..." rows={4} />
              </div>
              <Button variant="festival" size="lg" className="w-full">
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Committee Members */}
        <div className="bg-white rounded-2xl shadow-elegant p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Organizing Committee
            </h2>
            <div className="w-16 h-1 bg-gradient-festival mx-auto mb-6"></div>
            <p className="text-muted-foreground">
              Meet the dedicated members who make this celebration possible
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {committeeMembers.map((member, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:bg-muted/50 transition-colors duration-300">
                <div className="w-16 h-16 bg-gradient-festival rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-1">{member.role}</h3>
                <p className="text-muted-foreground mb-2">{member.name}</p>
                <p className="text-sm text-muted-foreground flex items-center justify-center">
                  <Phone className="w-3 h-3 mr-1" />
                  {member.phone}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        {/* <div className="mt-16">
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Find Us</h2>
            <div className="aspect-video bg-gradient-subtle rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map</h3>
                <p className="text-muted-foreground">
                  Map integration will be available soon
                </p>
                <Button variant="festival" className="mt-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
          </Card>
        </div> */}

 <div className="mt-16">
      <Card className="p-8">
        <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
          Find Us
        </h2>
        <div className="aspect-video rounded-xl overflow-hidden">
          <iframe
            className="w-full h-full rounded-xl border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d407.19545073555935!2d87.92949658132959!3d22.35424984407362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0297027f66db8d%3A0x2c71e96caecb8b1b!2sBiswas%20Tarun%20Sangha%20Playground!5e1!3m2!1sen!2sin!4v1757693232595!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex justify-center mt-4">
          <a
            href="https://maps.app.goo.gl/YKEtFCxg9GMVE7Tu7"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <Button variant="festival">
              <MapPin className="w-4 h-4 mr-2" />
              Get Directions
            </Button> */}
          </a>
        </div>
      </Card>
    </div>

      </div>
    </div>
  );
};

export default ContactPage;