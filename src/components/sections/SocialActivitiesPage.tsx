import { useState } from "react";
import { Camera, Video, Heart, Award, Users, Calendar } from "lucide-react";
import culturalImage from "../../../src/assets/cultural-activities.jpg";
import galleryImage from "../../../src/assets/gallery-collage..jpg";
import { Button } from "../ui/button";
const SocialActivitiesPage = () => {
  const [activeTab, setActiveTab] = useState("gallery");

  const galleryImages = [
    { id: 1, title: "Maa Durga Idol", category: "Religious" ,},
    { id: 2, title: "Cultural Dance Performance", category: "Cultural" },
    { id: 3, title: "Community Feast", category: "Community" },
    { id: 4, title: "Children's Program", category: "Cultural" },
    { id: 5, title: "Pandal Decoration", category: "Religious" },
    { id: 6, title: "Evening Aarti", category: "Religious" },
    { id: 7, title: "Blood Donation Camp", category: "Social" },
    { id: 8, title: "Student Awards", category: "Social" },
  ];

  const videos = [
    { id: 1, title: "Durga Puja 2024 Highlights", duration: "5:30" },
    { id: 2, title: "Cultural Programs Compilation", duration: "8:45" },
    { id: 3, title: "Community Celebration Moments", duration: "3:20" },
    { id: 4, title: "Traditional Puja Rituals", duration: "12:15" },
  ];

  const socialEvents = [
    {
      title: "Blood Donation Camp",
      description: "A noble initiative to save lives and serve humanity during our sacred festival.",
      date: "October 22, 2024",
      participants: "150+ Donors",
      impact: "450+ Lives Potentially Saved",
      icon: Heart,
      color: "text-red-600"
    },
    {
      title: "Student Excellence Awards",
      description: "Recognizing and celebrating academic achievements of our community students.",
      date: "October 22, 2024",
      participants: "75 Students",
      impact: "₹2,50,000 in Scholarships",
      icon: Award,
      color: "text-yellow-600"
    },
    {
      title: "Community Unity Feast",
      description: "Bringing together families from all backgrounds to share meals and joy.",
      date: "October 21-23, 2024",
      participants: "2000+ People",
      impact: "Cultural Harmony Promoted",
      icon: Users,
      color: "text-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Social Activities & Gallery
          </h1>
          <div className="w-24 h-1 bg-gradient-festival mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our community initiatives, cultural celebrations, and memorable moments 
            from Durga Puja festivities
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-elegant">
            <Button
              variant={activeTab === "gallery" ? "festival" : "ghost"}
              onClick={() => setActiveTab("gallery")}
              className="mr-2"
            >
              <Camera className="w-4 h-4 mr-2" />
              Photo Gallery
            </Button>
            <Button
              variant={activeTab === "videos" ? "festival" : "ghost"}
              onClick={() => setActiveTab("videos")}
              className="mr-2"
            >
              <Video className="w-4 h-4 mr-2" />
              Videos
            </Button>
            <Button
              variant={activeTab === "events" ? "festival" : "ghost"}
              onClick={() => setActiveTab("events")}
            >
              <Users className="w-4 h-4 mr-2" />
              Social Events
            </Button>
          </div>
        </div>

        {/* Photo Gallery Tab */}   
        {activeTab === "gallery" && (
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages?.map((image) => (
                <div key={image.id} className="group relative overflow-hidden rounded-xl shadow-elegant hover:shadow-festival transition-all duration-300">
                  <div className="aspect-square bg-gradient-festival relative">
                    <img 
                      src={image.id % 2 === 0 ? culturalImage : galleryImage} 
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Camera className="w-8 h-8 mx-auto mb-2" />
                        <p className="font-semibold">{image.title}</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white font-medium">{image.title}</p>
                    <span className="text-xs text-white/80 bg-white/20 px-2 py-1 rounded">
                      {image.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === "videos" && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {videos.map((video) => (
                <div key={video.id} className="bg-white rounded-xl shadow-elegant hover:shadow-festival transition-all duration-300 overflow-hidden">
                  <div className="aspect-video bg-gradient-festival relative">
                    <img 
                      src={video.id % 2 === 0 ? culturalImage : galleryImage} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Video className="w-8 h-8" />
                        </div>
                        <p className="text-sm bg-black/50 px-2 py-1 rounded">{video.duration}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{video.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      Experience the divine moments and cultural richness of our celebration
                    </p>
                    <Button variant="festival" size="sm">
                      <Video className="w-4 h-4 mr-2" />
                      Watch Video
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Social Events Tab */}
        {activeTab === "events" && (
          <div className="space-y-8">
            {socialEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-elegant hover:shadow-festival transition-all duration-300 p-8">
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-festival rounded-full flex items-center justify-center text-white`}>
                    <event.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center space-x-4 mb-4">
                      <h3 className="text-2xl font-bold text-foreground">{event.title}</h3>
                      <span className="text-sm bg-muted px-3 py-1 rounded-full flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {event.date}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-6">{event.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground">Participants</p>
                        <p className="font-semibold text-foreground">{event.participants}</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground">Impact</p>
                        <p className="font-semibold text-foreground">{event.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-elegant p-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Join Our Community Initiatives
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of our social activities and help us make a positive impact in the community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="festival" size="lg">
                <Heart className="w-5 h-5 mr-2" />
                Register for Blood Donation
              </Button>
              <Button variant="divine" size="lg">
                <Users className="w-5 h-5 mr-2" />
                Volunteer with Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialActivitiesPage;