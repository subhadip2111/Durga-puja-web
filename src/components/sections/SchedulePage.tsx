import { Calendar, Clock, MapPin, Users, Star, Heart } from "lucide-react";

const SchedulePage = () => {
  const scheduleData = [
    {
      day: "শুভ ষষ্ঠী",
      dayBangla: "ষষ্ঠী",
      date: "২০ অক্টোবর, ২০২৪",
      dayNumber: "১ম দিন",
      color: "bg-gradient-to-br from-red-500 to-red-600",
      borderColor: "border-red-200",
      accentColor: "bg-red-100",
      textColor: "text-red-700",
      events: [
        { 
          time: "সকাল ৬:০০", 
          timeBangla: "০৬:০০",
          event: "কল্পারম্ভ অনুষ্ঠান", 
          eventEng: "Kalparambha Ceremony",
          venue: "মূল প্যান্ডেল",
          venueEng: "Main Pandal",
          type: "puja",
          importance: "high"
        },
        { 
          time: "সকাল ৭:০০", 
          timeBangla: "০৭:০০",
          event: "বোধন ও আমন্ত্রণ", 
          eventEng: "Bodhon & Amantran",
          venue: "মূল প্যান্ডেল",
          venueEng: "Main Pandal",
          type: "puja",
          importance: "high"
        },
        { 
          time: "সকাল ১১:০০", 
          timeBangla: "১১:০০",
          event: "ষষ্ঠী পূজা", 
          eventEng: "Shashthi Puja",
          venue: "মূল প্যান্ডেল",
          venueEng: "Main Pandal",
          type: "puja",
          importance: "high"
        },
        { 
          time: "বিকাল ৫:০০", 
          timeBangla: "১৭:০০",
          event: "সন্ধ্যা আরতি", 
          eventEng: "Evening Aarti",
          venue: "মূল প্যান্ডেল",
          venueEng: "Main Pandal",
          type: "puja",
          importance: "medium"
        },
        { 
          time: "সন্ধ্যা ৭:০০", 
          timeBangla: "১৯:০০",
          event: "সাংস্কৃতিক অনুষ্ঠান - শাস্ত্রীয় নৃত্য", 
          eventEng: "Cultural Program - Classical Dance",
          venue: "মঞ্চ এলাকা",
          venueEng: "Stage Area",
          type: "cultural",
          importance: "medium"
        },
      ]
    },
    {
      day: "মহা সপ্তমী",
      dayBangla: "সপ্তমী",
      date: "২১ অক্টোবর, ২০২৪",
      dayNumber: "২য় দিন",
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      borderColor: "border-orange-200",
      accentColor: "bg-orange-100",
      textColor: "text-orange-700",
      events: [
        { 
          time: "সকাল ৬:০০", 
          timeBangla: "০৬:০০",
          event: "প্রভাতী প্রার্থনা", 
          eventEng: "Morning Prayers",
          venue: "মূল প্যান্ডেল",
          venueEng: "Main Pandal",
          type: "puja",
          importance: "medium"
        },
        { 
          time: "সকাল ৮:০০", 
          timeBangla: "০৮:০০",
          event: "মহাস্নান অনুষ্ঠান", 
          eventEng: "Mahasnan Ritual",
          venue: "মূল প্যান্ডেল",
          venueEng: "Main Pandal",
          type: "puja",
          importance: "high"
        },
        { 
          time: "সকাল ১০:০০", 
          timeBangla: "১০:০০",
          event: "প্রাণ প্রতিষ্ঠা", 
          eventEng: "Pran Pratishtha",
          venue: "মূল প্যান্ডেল",
          venueEng: "Main Pandal",
          type: "puja",
          importance: "high"
        },
        { 
          time: "দুপুর ১২:০০", 
          timeBangla: "১২:০০",
          event: "সপ্তমী পূজা", 
          eventEng: "Saptami Puja",
          venue: "মূল প্যান্ডেল",
          venueEng: "Main Pandal",
          type: "puja",
          importance: "high"
        },
        { 
          time: "বিকাল ৫:০০", 
          timeBangla: "১৭:০০",
          event: "সন্ধ্যা আরতি", 
          eventEng: "Evening Aarti",
          venue: "মূল প্যান্ডেল",
          venueEng: "Main Pandal",
          type: "puja",
          importance: "medium"
        },
        { 
          time: "সন্ধ্যা ৭:০০", 
          timeBangla: "১৯:০০",
          event: "সঙ্গীত সন্ধ্যা", 
          eventEng: "Musical Evening",
          venue: "মঞ্চ এলাকা",
          venueEng: "Stage Area",
          type: "cultural",
          importance: "medium"
        },
        { 
          time: "রাত ৯:০০", 
          timeBangla: "২১:০০",
          event: "সামাজিক ভোজন", 
          eventEng: "Community Dinner",
          venue: "ভোজন কক্ষ",
          venueEng: "Dining Hall",
          type: "community",
          importance: "low"
        },
      ]
    },
    {
      day: "মহা অষ্টমী",
      dayBangla: "অষ্টমী",
      date: "২২ অক্টোবর, ২০২৪",
      dayNumber: "৩য় দিন",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      borderColor: "border-purple-200",
      accentColor: "bg-purple-100",
      textColor: "text-purple-700",
      events: [
        { 
          time: "সকাল ৬:০০", 
          timeBangla: "০৬:০০",
          event: "প্রভাতী প্রার্থনা", 
          eventEng: "Morning Prayers",
          venue: "মূল প্যান্ডেল",
          venueEng: "Main Pandal",
          type: "puja",
          importance: "medium"
        },
        { 
          time: "সকাল ১০:০০", 
          timeBangla: "১০:০০",
          event: "অষ্টমী পূজা", 
          eventEng: "Ashtami Puja",
          venue: "মূল প্যান্ডেল",
          venueEng: "Main Pandal",
          type: "puja",
          importance: "high"
        },
        { 
          time: "সকাল ১১:৩০", 
          timeBangla: "১১:ৣ০",
          event: "কুমারী পূজা", 
          eventEng: "Kumari Puja",
          venue: "মূল প্যান্ডেল",
          venueEng: "Main Pandal",
          type: "puja",
          importance: "high"
        },
        { 
          time: "দুপুর ১২:০০", 
          timeBangla: "১২:০০",
          event: "রক্তদান শিবির", 
          eventEng: "Blood Donation Camp",
          venue: "কমিউনিটি হল",
          venueEng: "Community Hall",
          type: "social",
          importance: "high"
        },
        { 
          time: "বিকাল ৩:০০", 
          timeBangla: "১৫:০০",
          event: "ছাত্র সম্মাননা অনুষ্ঠান", 
          eventEng: "Student Appreciation Ceremony",
          venue: "মঞ্চ এলাকা",
          venueEng: "Stage Area",
          type: "social",
          importance: "medium"
        },
        { 
          time: "বিকাল ৫:০০", 
          timeBangla: "১৭:০০",
          event: "সন্ধ্যা আরতি", 
          eventEng: "Evening Aarti",
          venue: "মূল প্যান্ডেল",
          venueEng: "Main Pandal",
          type: "puja",
          importance: "medium"
        },
        { 
          time: "সন্ধ্যা ৬:০০", 
          timeBangla: "১৮:০০",
          event: "সন্ধি পূজা", 
          eventEng: "Sandhi Puja",
          venue: "মূল প্যান্ডেল",
          venueEng: "Main Pandal",
          type: "puja",
          importance: "high"
        },
        { 
          time: "রাত ৮:০০", 
          timeBangla: "২০:০০",
          event: "নাট্য প্রদর্শনী", 
          eventEng: "Drama Performance",
          venue: "মঞ্চ এলাকা",
          venueEng: "Stage Area",
          type: "cultural",
          importance: "medium"
        },
      ]
    },
    {
      day: "মহানবমী",
      dayBangla: "নবমী",
      date: "২৩ অক্টোবর, ২০২৪",
      dayNumber: "৪র্থ দিন",
      color: "bg-gradient-to-br from-yellow-500 to-amber-600",
      borderColor: "border-yellow-200",
      accentColor: "bg-yellow-100",
      textColor: "text-yellow-700",
      events: [
        { 
          time: "সকাল ৬:০০", 
          timeBangla: "০৬:০০",
          event: "প্রভাতী প্রার্থনা", 
          eventEng: "Morning Prayers",
          venue: "মূল প্যান্ডেল",
          venueEng: "Main Pandal",
          type: "puja",
          importance: "medium"
        },
        { 
          time: "সকাল ১০:০০", 
          timeBangla: "১০:০০",
          event: "নবমী পূজা", 
          eventEng: "Navami Puja",
          venue: "মূল প্যান্ডেল",
          venueEng: "Main Pandal",
          type: "puja",
          importance: "high"
        },
        { 
          time: "দুপুর ১২:০০", 
          timeBangla: "১২:০০",
          event: "মহা আরতি", 
          eventEng: "Maha Aarti",
          venue: "মূল প্যান্ডেল",
          venueEng: "Main Pandal",
          type: "puja",
          importance: "high"
        },
        { 
          time: "বিকাল ২:০০", 
          timeBangla: "১৪:০০",
          event: "সামাজিক ভোজ", 
          eventEng: "Community Feast",
          venue: "ভোজন কক্ষ",
          venueEng: "Dining Hall",
          type: "community",
          importance: "medium"
        },
        { 
          time: "বিকাল ৪:০০", 
          timeBangla: "১৬:০০",
          event: "সমাপনী সাংস্কৃতিক অনুষ্ঠান", 
          eventEng: "Final Cultural Program",
          venue: "মঞ্চ এলাকা",
          venueEng: "Stage Area",
          type: "cultural",
          importance: "medium"
        },
        { 
          time: "সন্ধ্যা ৬:০০", 
          timeBangla: "১৮:০০",
          event: "বিসর্জন প্রস্তুতি", 
          eventEng: "Visarjan Preparation",
          venue: "মূল প্যান্ডেল",
          venueEng: "Main Pandal",
          type: "puja",
          importance: "high"
        },
        { 
          time: "রাত ৮:০০", 
          timeBangla: "২০:০০",
          event: "বিসর্জন শোভাযাত্রা", 
          eventEng: "Visarjan Procession",
          venue: "প্যান্ডেল থেকে নদীর ঘাট",
          venueEng: "Pandal to River",
          type: "puja",
          importance: "high"
        },
      ]
    }
  ];

  const getImportanceIcon = (importance) => {
    switch (importance) {
      case 'high':
        return <Star className="w-4 h-4 text-yellow-500 fill-current" />;
      case 'medium':
        return <Heart className="w-4 h-4 text-red-400 fill-current" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'puja':
        return '🙏';
      case 'cultural':
        return '🎭';
      case 'social':
        return '🤝';
      case 'community':
        return '🍽️';
      default:
        return '📅';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent mb-6">
            দুর্গাপূজা কার্যক্রম
          </h1>
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
            <span className="text-3xl">🪷</span>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            চার দিনের দুর্গা পূজার সম্পূর্ণ কার্যক্রম - ঐতিহ্যবাহী পূজা অর্চনা, সাংস্কৃতিক অনুষ্ঠান এবং সামাজিক কার্যক্রম
          </p>
          <p className="text-lg text-gray-500 mt-2">
            Complete 4-day Durga Puja schedule with traditional rituals, cultural programs & community events
          </p>
        </div>

        {/* Schedule Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {scheduleData.map((day, index) => (
            <div key={index} className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 border-2 ${day.borderColor} hover:scale-[1.02]`}>
              {/* Day Header */}
              <div className={`${day.color} text-white p-8 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium opacity-90 bg-white/20 px-3 py-1 rounded-full">
                      {day.dayNumber}
                    </span>
                    <h2 className="text-4xl font-bold mt-3 mb-2">{day.day}</h2>
                    <p className="text-lg opacity-90">{day.date}</p>
                  </div>
                  <div className="text-right">
                    <Calendar className="w-12 h-12 opacity-80 mb-2" />
                    <span className="text-2xl font-bold opacity-90">{day.dayBangla}</span>
                  </div>
                </div>
              </div>

              {/* Events List */}
              <div className="p-8">
                <div className="space-y-6">
                  {day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className={`group relative p-6 rounded-2xl border-2 ${day.borderColor} hover:${day.accentColor} transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-white/70`}>
                      {/* Event Type Badge */}
                      <div className="absolute -top-3 -right-3 flex items-center space-x-1">
                        {getImportanceIcon(event.importance)}
                        <span className="text-2xl">{getTypeIcon(event.type)}</span>
                      </div>

                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <div className={`w-16 h-16 ${day.color} rounded-2xl flex flex-col items-center justify-center text-white shadow-lg`}>
                            <Clock className="w-6 h-6 mb-1" />
                            <span className="text-xs font-bold">{event.timeBangla}</span>
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center space-x-3 mb-3">
                            <span className={`text-sm font-bold ${day.textColor} bg-white px-3 py-1 rounded-full shadow-sm border`}>
                              {event.time}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600 capitalize`}>
                              {event.type}
                            </span>
                          </div>
                          <h3 className="font-bold text-gray-800 text-xl mb-2 leading-tight">
                            {event.event}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3 italic">
                            {event.eventEng}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-gray-600">
                              <MapPin className="w-4 h-4 mr-2 text-red-500" />
                              <div>
                                <span className="font-medium text-gray-800">{event.venue}</span>
                                <span className="text-xs text-gray-500 block">{event.venueEng}</span>
                              </div>
                            </div>
                          </div>
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
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
            বিশেষ কার্যক্রম
          </h2>
          <p className="text-center text-gray-600 mb-12">Special Events</p>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-red-200 hover:scale-[1.02] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-100 to-red-200 rounded-full -mr-20 -mt-20 opacity-50"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-1">রক্তদান শিবির</h3>
                    <p className="text-gray-600">Blood Donation Camp</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  জীবন বাঁচানোর মহৎ কাজে যোগ দিন। পেশাদার চিকিৎসক দল নিরাপদ রক্তদানের জন্য উপস্থিত থাকবেন।
                </p>
                <div className="space-y-3 text-sm bg-red-50 p-6 rounded-2xl">
                  <p><strong className="text-red-700">তারিখ:</strong> ২২ অক্টোবর, ২০২৪ (অষ্টমী)</p>
                  <p><strong className="text-red-700">সময়:</strong> দুপুর ১২:০০ - সন্ধ্যা ৬:০০</p>
                  <p><strong className="text-red-700">স্থান:</strong> কমিউনিটি হল</p>
                </div>
                <button className="mt-6 bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-2xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  রক্তদানে নিবন্ধন
                </button>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-yellow-200 hover:scale-[1.02] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full -mr-20 -mt-20 opacity-50"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-1">ছাত্র সম্মাননা</h3>
                    <p className="text-gray-600">Student Appreciation</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  আমাদের সমাজের ছাত্র-ছাত্রীদের শিক্ষাক্ষেত্রে অসাধারণ সাফল্য উদযাপন। পুরস্কার ও বৃত্তিসহ সম্মাননা অনুষ্ঠান।
                </p>
                <div className="space-y-3 text-sm bg-yellow-50 p-6 rounded-2xl">
                  <p><strong className="text-yellow-700">তারিখ:</strong> ২২ অক্টোবর, ২০২৪ (অষ্টমী)</p>
                  <p><strong className="text-yellow-700">সময়:</strong> বিকাল ৩:০০ - ৪:৩০</p>
                  <p><strong className="text-yellow-700">স্থান:</strong> মঞ্চ এলাকা</p>
                </div>
                <button className="mt-6 bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-8 py-3 rounded-2xl font-semibold hover:from-yellow-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  মনোনীত দেখুন
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-orange-200 inline-block">
            <p className="text-gray-600 text-lg mb-2">🙏 মা দুর্গার আশীর্বাদে সকলের মঙ্গল হোক 🙏</p>
            <p className="text-gray-500 text-sm">May Mother Durga bless everyone with happiness and prosperity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;