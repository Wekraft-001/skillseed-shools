import {
  ChevronRight,
  Plus,
  Pen,
  Clock,
  Settings,
  Calendar,
  Book,
  Video,
  Headset,
  Users,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";

const ProgramRollout = () => {
  return (
    <div className="bg-[#F5F7FA] min-h-[calc(100vh-80px)]">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Breadcrumb */}
        <div
          id="breadcrumb"
          className="flex items-center space-x-2 mb-8 text-sm"
        >
          <Link to="/" className="text-[#1A73E8] cursor-pointer">
            Dashboard
          </Link>
          <ChevronRight className="text-gray-400 w-4 h-4" />
          <span className="text-gray-600">Program Rollout</span>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Left Column - Program Setup */}
          <div
            id="program-setup"
            className="col-span-1 md:col-span-2 space-y-4 sm:space-y-6"
          >
            {/* Age Group Programs */}
            <div
              id="age-group-programs"
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
                <h2 className="text-xl font-bold">Program Rollout Plans</h2>
                <button className="bg-[#1A73E8] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm w-full sm:w-auto">
                  <Plus className="w-4 h-4 mr-1 inline" />
                  New Plan
                </button>
              </div>

              {/* Age Groups */}
              <div className="space-y-4">
                {/* Elementary (Ages 5-10) */}
                <div
                  id="elementary-group"
                  className="border border-gray-100 rounded-xl p-3 sm:p-4"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4 gap-3 sm:gap-0">
                    <div className="flex items-center space-x-3">
                      <div className="bg-pink-100 p-2 sm:p-3 rounded-full">
                        <Users className="text-pink-500 w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <h3 className="font-semibold">Elementary (Ages 5-10)</h3>
                    </div>
                    <button className="text-[#1A73E8] hover:bg-blue-50 p-1.5 sm:p-2 rounded-full">
                      <Pen className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <span className="text-xs sm:text-sm font-semibold">
                          Creative Arts
                        </span>
                        <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 sm:px-2 sm:py-1 rounded-full">
                          Active
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>2 hours/week</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <span className="text-xs sm:text-sm font-semibold">
                          Basic Science
                        </span>
                        <span className="bg-yellow-100 text-yellow-600 text-xs px-2 py-0.5 sm:px-2 sm:py-1 rounded-full">
                          Pending
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>1.5 hours/week</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Middle School (Ages 11-13) */}
                <div
                  id="middle-school-group"
                  className="border border-gray-100 rounded-xl p-3 sm:p-4"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4 gap-3 sm:gap-0">
                    <div className="flex items-center space-x-3">
                      <div className="bg-purple-100 p-2 sm:p-3 rounded-full">
                        <Users className="text-purple-500 w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <h3 className="font-semibold">
                        Middle School (Ages 11-13)
                      </h3>
                    </div>
                    <button className="text-[#1A73E8] hover:bg-blue-50 p-1.5 sm:p-2 rounded-full">
                      <Pen className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <span className="text-xs sm:text-sm font-semibold">
                          STEAM Projects
                        </span>
                        <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 sm:px-2 sm:py-1 rounded-full">
                          Active
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>3 hours/week</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <span className="text-xs sm:text-sm font-semibold">
                          Digital Skills
                        </span>
                        <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 sm:px-2 sm:py-1 rounded-full">
                          Active
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>2 hours/week</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* High School (Ages 14-18) */}
                <div
                  id="high-school-group"
                  className="border border-gray-100 rounded-xl p-3 sm:p-4"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4 gap-3 sm:gap-0">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-2 sm:p-3 rounded-full">
                        <Rocket className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <h3 className="font-semibold">
                        High School (Ages 14-18)
                      </h3>
                    </div>
                    <button className="text-[#1A73E8] hover:bg-blue-50 p-1.5 sm:p-2 rounded-full">
                      <Pen className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <span className="text-xs sm:text-sm font-semibold">
                          Career Exploration
                        </span>
                        <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 sm:px-2 sm:py-1 rounded-full">
                          Active
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>4 hours/week</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <span className="text-xs sm:text-sm font-semibold">
                          Entrepreneurship
                        </span>
                        <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 sm:px-2 sm:py-1 rounded-full">
                          Planning
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>3 hours/week</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Settings and Info */}
          <div className="space-y-4 sm:space-y-6">
            {/* Quick Setup */}
            <div
              id="quick-setup"
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-bold mb-4 sm:mb-6">Quick Setup</h2>
              <div className="space-y-3 sm:space-y-4">
                <button className="w-full flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Plus className="text-[#1A73E8] w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm">
                      Add New Age Group
                    </span>
                  </div>
                  <ChevronRight className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button className="w-full flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Settings className="text-[#1A73E8] w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm">Program Settings</span>
                  </div>
                  <ChevronRight className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button className="w-full flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Calendar className="text-[#1A73E8] w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm">
                      Schedule Templates
                    </span>
                  </div>
                  <ChevronRight className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Resources */}
            <div
              id="resources"
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-bold mb-4 sm:mb-6">Resources</h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-blue-50 rounded-xl">
                  <div className="bg-blue-100 p-2 sm:p-3 rounded-full">
                    <Book className="text-[#1A73E8] w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">
                      Setup Guide
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Learn how to set up programs
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-purple-50 rounded-xl">
                  <div className="bg-purple-100 p-2 sm:p-3 rounded-full">
                    <Video className="text-purple-600 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">
                      Video Tutorials
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Watch setup tutorials
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support */}
            <div
              id="support"
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-bold mb-4 sm:mb-6">Need Help?</h2>
              <div className="bg-[#1A73E8] bg-opacity-10 p-3 sm:p-4 rounded-xl">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <div className="bg-[#1A73E8] p-1.5 sm:p-2 rounded-full">
                    <Headset className="text-white w-3 h-3 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    Contact Support
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                  Our team is here to help you set up your programs
                </p>
                <button className="w-full bg-[#1A73E8] text-white py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
                  Get Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramRollout;
