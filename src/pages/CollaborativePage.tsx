import { Book, Video, Puzzle, Plus, Link as ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const CollaborativePage = () => {
  return (
    <div className="bg-[#F5F7FA] min-h-[calc(100vh-80px)]">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Breadcrumb */}
        <div
          id="breadcrumb"
          className="flex items-center space-x-2 mb-8 text-sm"
        >
          <Link to="/home" className="text-[#1A73E8] cursor-pointer">
            Dashboard
          </Link>
          <ChevronRight className="text-gray-400 w-4 h-4" />
          <Link to="/tools" className="text-[#1A73E8] cursor-pointer">
            Tools
          </Link>
          <ChevronRight className="text-gray-400 w-4 h-4" />
          <span className="text-gray-600">Collaborative Page</span>
        </div>

        {/* Tools Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Messaging Parents Section */}
          <div
            id="messaging-section"
            className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
              <h2 className="text-xl font-bold">Parent Messages</h2>
              <button className="bg-[#1A73E8] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm w-full sm:w-auto flex items-center justify-center">
                <Plus className="w-4 h-4 mr-1.5" />
                New Message
              </button>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:items-center sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 cursor-pointer">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                  alt="Parent"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <p className="text-sm text-gray-500 truncate">
                    Latest update about Tom's progress...
                  </p>
                </div>
                <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                  New
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:items-center sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 cursor-pointer">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                  alt="Parent"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">Michael Brown</h3>
                  <p className="text-sm text-gray-500 truncate">
                    Question about next week's...
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mentor Suggestions Section */}
          <div
            id="mentor-section"
            className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
              <h2 className="text-xl font-bold">Suggested Mentors</h2>
              <button className="text-[#1A73E8] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm border border-[#1A73E8] w-full sm:w-auto">
                View All
              </button>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="p-3 sm:p-4 bg-gray-50 rounded-xl">
                <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:items-center sm:space-x-4 mb-2 sm:mb-3">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                    alt="Mentor"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">Dr. Emily White</h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Science & Technology
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 sm:py-1 rounded-full">
                    Physics
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 sm:py-1 rounded-full">
                    Robotics
                  </span>
                </div>
              </div>
              <div className="p-3 sm:p-4 bg-gray-50 rounded-xl">
                <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:items-center sm:space-x-4 mb-2 sm:mb-3">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg"
                    alt="Mentor"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">James Wilson</h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Arts & Design
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 sm:py-1 rounded-full">
                    Digital Art
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 sm:py-1 rounded-full">
                    Animation
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Educational Resources Section */}
          <div
            id="resources-section"
            className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
              <h2 className="text-xl font-bold">Recommended Resources</h2>
              <button className="text-[#1A73E8] hover:text-blue-700 p-1.5 rounded-full">
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-[#FFC107] p-2 sm:p-3 rounded-xl">
                    <Book className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm sm:text-base">
                      Introduction to Coding
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Interactive course for beginners
                    </p>
                  </div>
                  <ChevronRight className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
              <div className="p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-[#FFC107] p-2 sm:p-3 rounded-xl">
                    <Video className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm sm:text-base">
                      Science Experiments
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Video series for Grade 6-8
                    </p>
                  </div>
                  <ChevronRight className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
              <div className="p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-[#FFC107] p-2 sm:p-3 rounded-xl">
                    <Puzzle className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm sm:text-base">
                      Math Games Collection
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Interactive learning tools
                    </p>
                  </div>
                  <ChevronRight className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Timeline */}
        <div
          id="activity-timeline"
          className="mt-4 sm:mt-6 bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
            <h2 className="text-xl font-bold">Recent Communications</h2>
            <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-sm w-full sm:w-auto">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
            </select>
          </div>
          <div className="relative pl-6 sm:pl-8 space-y-4 sm:space-y-6 before:content-[''] before:absolute before:left-2 before:top-2 before:w-0.5 before:h-full before:bg-gray-200">
            <div className="relative">
              <div className="absolute -left-8 sm:-left-10 top-2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full"></div>
              <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">
                      Parent Newsletter Sent
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Monthly update about school activities and achievements
                    </p>
                  </div>
                  <span className="text-xs text-gray-500">2 hours ago</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 sm:-left-10 top-2 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full"></div>
              <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">
                      New Mentor Session Scheduled
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Career guidance session with Dr. Emily White
                    </p>
                  </div>
                  <span className="text-xs text-gray-500">Yesterday</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 sm:-left-10 top-2 w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full"></div>
              <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">
                      Resource Library Updated
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Added new STEAM learning materials
                    </p>
                  </div>
                  <span className="text-xs text-gray-500">2 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborativePage;
