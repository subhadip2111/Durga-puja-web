import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Button } from "../ui/button";
// import { Button } from "@/components/ui/button";

const SchedulePage = () => {
  const scheduleData = [
    {
      day: "শুভ ষষ্ঠী",
      date: "October 20, 2024",
      dayNumber: "Day 1",
      color: "bg-festival-red",
      events: [
        { time: "06:00 AM", event: "Kalparambha Ceremony", venue: "Main Pandal" },
        { time: "07:00 AM", event: "Bodhon & Amantran", venue: "Main Pandal" },
        { time: "11:00 AM", event: "Shashthi Puja", venue: "Main Pandal" },
        { time: "05:00 PM", event: "Evening Aarti", venue: "Main Pandal" },
        { time: "07:00 PM", event: "Cultural Program - Classical Dance", venue: "Stage Area" },
      ]
    },
    {
      day: "মহা সপ্তমী",
      date: "October 21, 2024",
      dayNumber: "Day 2",
      color: "bg-festival-orange",
      events: [
        { time: "06:00 AM", event: "Morning Prayers", venue: "Main Pandal" },
        { time: "08:00 AM", event: "Mahasnan Ritual", venue: "Main Pandal" },
        { time: "10:00 AM", event: "Pran Pratishtha", venue: "Main Pandal" },
        { time: "12:00 PM", event: "Saptami Puja", venue: "Main Pandal" },
        { time: "05:00 PM", event: "Evening Aarti", venue: "Main Pandal" },
        { time: "07:00 PM", event: "Musical Concert", venue: "Stage Area" },
        { time: "09:00 PM", event: "Community Dinner", venue: "Dining Hall" },
      ]
    },
    {
      day: " মহা অষ্টমী",
      date: "October 22, 2024",
      dayNumber: "Day 3",
      color: "bg-festival-purple",
      events: [
        { time: "06:00 AM", event: "Morning Prayers", venue: "Main Pandal" },
        { time: "10:00 AM", event: "Ashtami Puja", venue: "Main Pandal" },
        { time: "11:30 AM", event: "Kumari Puja", venue: "Main Pandal" },
        { time: "12:00 PM", event: "Blood Donation Camp", venue: "Community Hall" },
        { time: "03:00 PM", event: "Student Appreciation Ceremony", venue: "Stage Area" },
        { time: "05:00 PM", event: "Evening Aarti", venue: "Main Pandal" },
        { time: "06:00 PM", event: "Sandhi Puja", venue: "Main Pandal" },
        { time: "08:00 PM", event: "Drama Performance", venue: "Stage Area" },
      ]
    },
    {
      day: "মহানবমী",
      date: "October 23, 2024",
      dayNumber: "Day 4",
      color: "bg-festival-gold",
      events: [
        { time: "06:00 AM", event: "Morning Prayers", venue: "Main Pandal" },
        { time: "10:00 AM", event: "Navami Puja", venue: "Main Pandal" },
        { time: "12:00 PM", event: "Maha Aarti", venue: "Main Pandal" },
        { time: "02:00 PM", event: "Community Feast", venue: "Dining Hall" },
        { time: "04:00 PM", event: "Final Cultural Program", venue: "Stage Area" },
        { time: "06:00 PM", event: "Visarjan Preparation", venue: "Main Pandal" },
        { time: "08:00 PM", event: "Visarjan Procession", venue: "Pandal to River" },
      ]
    },
      {
      day: "বিজয়া দশমী",
      date: "October 23, 2024",
      dayNumber: "Day 4",
      color: "bg-festival-gold",
      events: [
        { time: "06:00 AM", event: "Morning Prayers", venue: "Main Pandal" },
        { time: "10:00 AM", event: "Navami Puja", venue: "Main Pandal" },
        { time: "12:00 PM", event: "Maha Aarti", venue: "Main Pandal" },
        { time: "02:00 PM", event: "Community Feast", venue: "Dining Hall" },
        { time: "04:00 PM", event: "Final Cultural Program", venue: "Stage Area" },
        { time: "06:00 PM", event: "Visarjan Preparation", venue: "Main Pandal" },
        { time: "08:00 PM", event: "Visarjan Procession", venue: "Pandal to River" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Festival Schedule
          </h1>
          <div className="w-24 h-1 bg-gradient-festival mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete 4-day schedule of Durga Puja celebrations with traditional pujas, 
            cultural programs, and community events
          </p>
        </div>

        {/* Schedule Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {scheduleData.map((day, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-elegant overflow-hidden hover:shadow-festival transition-all duration-300">
              {/* Day Header */}
              <div className={`${day.color} text-white p-6`}>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium opacity-90">{day.dayNumber}</span>
                    <h2 className="text-3xl font-bold">{day.day}</h2>
                    <p className="text-lg opacity-90">{day.date}</p>
                  </div>
                  <Calendar className="w-10 h-10 opacity-80" />
                </div>
              </div>

              {/* Events List */}
              <div className="p-6">
                <div className="space-y-4">
                  {day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/50 transition-colors duration-200">
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 ${day.color} rounded-full flex items-center justify-center text-white`}>
                          <Clock className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-sm font-semibold text-foreground bg-muted px-2 py-1 rounded">
                            {event.time}
                          </span>
                        </div>
                        <h3 className="font-semibold text-foreground text-lg mb-1">
                          {event.event}
                        </h3>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{event.venue}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Events Highlight */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Special Events
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-elegant hover:shadow-festival transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-festival rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Blood Donation Camp</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Join our noble cause of saving lives. Professional medical team will be present 
                to ensure safe donation process.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Date:</strong> October 22, 2024 (Ashtami)</p>
                <p><strong>Time:</strong> 12:00 PM - 6:00 PM</p>
                <p><strong>Venue:</strong> Community Hall</p>
              </div>
              <Button variant="festival" className="mt-4">
                Register to Donate
              </Button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-elegant hover:shadow-golden transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-golden rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Student Appreciation</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Celebrating academic excellence and achievements of our community students. 
                Recognition ceremony with awards and scholarships.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Date:</strong> October 22, 2024 (Ashtami)</p>
                <p><strong>Time:</strong> 3:00 PM - 4:30 PM</p>
                <p><strong>Venue:</strong> Stage Area</p>
              </div>
              <Button variant="golden" className="mt-4">
                View Nominees
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;