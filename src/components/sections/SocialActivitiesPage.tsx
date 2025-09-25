import { useState } from "react";
import { Camera, Video, Heart, Award, Users, Calendar } from "lucide-react";

const SocialActivitiesPage = () => {
  const [activeTab, setActiveTab] = useState("gallery");

  // Image URLs - Replace these with your actual Google Drive image URLs
  const imageUrls = {
    gallery: [
      'https://lh3.googleusercontent.com/d/1DVLW7AwPEht0wb31r6siG69l0C9VCPYq=s220?authuser=0', // Maa Durga Idol
      'https://lh3.googleusercontent.com/d/16JfkGHuJAXVmLwa5wTtuqD5BdMIW6yQ3=s220?authuser=0', // Cultural Dance Performance
      'https://drive.google.com/thumbnail?id=16JfkGHuJAXVmLwa5wTtuqD5BdMIW6yQ3', // Community Feast
      'https://drive.google.com/thumbnail?id=1DVLW7AwPEht0wb31r6siG69l0C9VCPYq', // Children's Program
      'https://drive.google.com/thumbnail?id=1DVLW7AwPEht0wb31r6siG69l0C9VCPYq', // Pandal Decoration
      'https://drive.google.com/thumbnail?id=1DVLW7AwPEht0wb31r6siG69l0C9VCPYq', // Evening Aarti
      'https://drive.google.com/thumbnail?id=1DVLW7AwPEht0wb31r6siG69l0C9VCPYq', // Blood Donation Camp
      'https://drive.google.com/thumbnail?id=1DVLW7AwPEht0wb31r6siG69l0C9VCPYq', // Student Awards
    ],
    videos: [
      'https://drive.google.com/thumbnail?id=1DVLW7AwPEht0wb31r6siG69l0C9VCPYq', // Video thumbnail 1
      'https://drive.google.com/thumbnail?id=1DVLW7AwPEht0wb31r6siG69l0C9VCPYq', // Video thumbnail 2
      'https://drive.google.com/thumbnail?id=1DVLW7AwPEht0wb31r6siG69l0C9VCPYq', // Video thumbnail 3
      'https://drive.google.com/thumbnail?id=1DVLW7AwPEht0wb31r6siG69l0C9VCPYq', // Video thumbnail 4
    ]
  };

  const galleryImages = [
    { id: 1, title: "Maa Durga Idol", category: "Religious", imageUrl: imageUrls.gallery[0] },
    { id: 2, title: "Cultural Dance Performance", category: "Cultural", imageUrl: imageUrls.gallery[1] },
    { id: 3, title: "Community Feast", category: "Community", imageUrl: imageUrls.gallery[2] },
    { id: 4, title: "Children's Program", category: "Cultural", imageUrl: imageUrls.gallery[3] },
    { id: 5, title: "Pandal Decoration", category: "Religious", imageUrl: imageUrls.gallery[4] },
    { id: 6, title: "Evening Aarti", category: "Religious", imageUrl: imageUrls.gallery[5] },
    { id: 7, title: "Blood Donation Camp", category: "Social", imageUrl: imageUrls.gallery[6] },
    { id: 8, title: "Student Awards", category: "Social", imageUrl: imageUrls.gallery[7] },
  ];

  const videos = [
    { id: 1, title: "Durga Puja 2024 Highlights", duration: "5:30", thumbnailUrl: imageUrls.videos[0] },
    { id: 2, title: "Cultural Programs Compilation", duration: "8:45", thumbnailUrl: imageUrls.videos[1] },
    { id: 3, title: "Community Celebration Moments", duration: "3:20", thumbnailUrl: imageUrls.videos[2] },
    { id: 4, title: "Traditional Puja Rituals", duration: "12:15", thumbnailUrl: imageUrls.videos[3] },
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

  const Button = ({ children, variant = "default", size = "default", className = "", onClick, ...props }) => {
    const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
    
    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      festival: "bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 shadow-lg",
      divine: "bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600 shadow-lg"
    };
    
    const sizes = {
      sm: "h-9 px-3 text-sm",
      default: "h-10 py-2 px-4",
      lg: "h-11 px-8 text-lg"
    };
    
    return (
      <button
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Social Activities & Gallery
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our community initiatives, cultural celebrations, and memorable moments 
            from Durga Puja festivities
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-lg">
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
                <div key={image.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-square bg-gradient-to-br from-orange-500 to-pink-500 relative">
                    <img 
                    // <img src="https://drive.google.com/thumbnail?id=10hhX4pIZr0NhuusN4eHvf4ghah5d6yAG" alt="Image From Drive">

                      src={image.imageUrl}
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
                <div key={video.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-orange-500 to-pink-500 relative">
                    <img 
                      src={video.thumbnailUrl} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/30 transition-colors cursor-pointer">
                          <Video className="w-8 h-8" />
                        </div>
                        <p className="text-sm bg-black/50 px-2 py-1 rounded">{video.duration}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{video.title}</h3>
                    <p className="text-gray-600 mb-4">
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
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg">
                    <event.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0">{event.title}</h3>
                      <span className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full flex items-center w-fit">
                        <Calendar className="w-3 h-3 mr-1" />
                        {event.date}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6 text-lg">{event.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                        <p className="text-sm text-gray-500 mb-1">Participants</p>
                        <p className="font-semibold text-gray-800 text-lg">{event.participants}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                        <p className="text-sm text-gray-500 mb-1">Impact</p>
                        <p className="font-semibold text-gray-800 text-lg">{event.impact}</p>
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
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Join Our Community Initiatives
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
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