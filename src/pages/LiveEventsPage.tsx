import { Clock, Users, User, PlayCircle, FileText, Presentation, Link as LinkIcon, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LiveEventsPage = () => {
  return (
    <div className="bg-[#F5F7FA] min-h-[calc(100vh-80px)]">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Breadcrumb */}
        <div id="breadcrumb" className="flex items-center space-x-2 mb-8 text-sm">
          <Link to="/" className="text-[#1A73E8] cursor-pointer">Dashboard</Link>
          <ChevronRight className="text-gray-400 w-4 h-4" />
          <Link to="/tools" className="text-[#1A73E8] cursor-pointer">Tools</Link>
          <ChevronRight className="text-gray-400 w-4 h-4" />
          <span className="text-gray-600">Live Events</span>
        </div>

        {/* Live Events Section */}
        <div id="live-events-header" className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-bold mb-2">Career Discovery Live Events</h1>
          <p className="text-sm sm:text-base text-gray-600">Connect your students with industry experts and mentors in real-time</p>
        </div>

        {/* Upcoming Live Events */}
        <div id="upcoming-live-events" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
              <span className="bg-red-100 text-red-600 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm">Live Now</span>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-3 sm:mb-4">
              <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="Mentor" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-[#FFC107]" />
              <div>
                <h3 className="font-bold">Tech Career Pathways</h3>
                <p className="text-xs sm:text-sm text-gray-600">with John Smith</p>
                <p className="text-xs sm:text-sm text-[#1A73E8]">Software Engineer at Google</p>
              </div>
            </div>
            <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>2:00 PM - 3:30 PM</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>156 students joined</span>
              </div>
            </div>
            <button className="w-full bg-[#1A73E8] text-white py-1.5 sm:py-2 rounded-full hover:bg-blue-700 transition-colors text-xs sm:text-sm">
              Join Session
            </button>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-3 sm:mb-4">
              <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" alt="Mentor" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-[#FFC107]" />
              <div>
                <h3 className="font-bold">Creative Arts in Digital Age</h3>
                <p className="text-xs sm:text-sm text-gray-600">with Sarah Johnson</p>
                <p className="text-xs sm:text-sm text-[#1A73E8]">Digital Artist</p>
              </div>
            </div>
            <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Tomorrow, 4:00 PM</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                <User className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>89 registered</span>
              </div>
            </div>
            <button className="w-full bg-gray-100 text-gray-700 py-1.5 sm:py-2 rounded-full hover:bg-gray-200 transition-colors text-xs sm:text-sm">
              Register Now
            </button>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-3 sm:mb-4">
              <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" alt="Mentor" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-[#FFC107]" />
              <div>
                <h3 className="font-bold">Future of Healthcare</h3>
                <p className="text-xs sm:text-sm text-gray-600">with Dr. Michael Chen</p>
                <p className="text-xs sm:text-sm text-[#1A73E8]">Medical Researcher</p>
              </div>
            </div>
            <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>May 18, 1:00 PM</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                <User className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>45 registered</span>
              </div>
            </div>
            <button className="w-full bg-gray-100 text-gray-700 py-1.5 sm:py-2 rounded-full hover:bg-gray-200 transition-colors text-xs sm:text-sm">
              Register Now
            </button>
          </div>
        </div>

        {/* Past Events and Resources */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Past Events */}
          <div id="past-events" className="col-span-1 lg:col-span-2 bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
              <h2 className="text-xl font-bold">Past Events</h2>
              <button className="text-[#1A73E8] hover:underline text-sm">View All</button>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-xl gap-3 sm:gap-0">
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg" alt="Speaker" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" />
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">Entrepreneurship 101</h3>
                    <p className="text-xs sm:text-sm text-gray-500">Lisa Martinez • May 10, 2025</p>
                  </div>
                </div>
                <button className="flex items-center space-x-1 sm:space-x-2 text-[#1A73E8] text-xs sm:text-sm">
                  <PlayCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Watch Recording</span>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-xl gap-3 sm:gap-0">
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg" alt="Speaker" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" />
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">Space Science Career Path</h3>
                    <p className="text-xs sm:text-sm text-gray-500">Robert Lee • May 8, 2025</p>
                  </div>
                </div>
                <button className="flex items-center space-x-1 sm:space-x-2 text-[#1A73E8] text-xs sm:text-sm">
                  <PlayCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Watch Recording</span>
                </button>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div id="event-resources" className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-4 sm:mb-6">Event Resources</h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="p-3 sm:p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-1 sm:mb-2">
                  <FileText className="text-red-500 w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-semibold text-sm sm:text-base">Career Planning Guide</span>
                </div>
                <button className="text-xs sm:text-sm text-[#1A73E8] hover:underline">Download PDF</button>
              </div>

              <div className="p-3 sm:p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-1 sm:mb-2">
                  <Presentation className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-semibold text-sm sm:text-base">Session Slides</span>
                </div>
                <button className="text-xs sm:text-sm text-[#1A73E8] hover:underline">View Slides</button>
              </div>

              <div className="p-3 sm:p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-1 sm:mb-2">
                  <LinkIcon className="text-purple-500 w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-semibold text-sm sm:text-base">Useful Links</span>
                </div>
                <button className="text-xs sm:text-sm text-[#1A73E8] hover:underline">Browse Resources</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveEventsPage;
