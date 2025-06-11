import { Search, X, Plus, FlaskConical, Palette, Code, Music, Rocket, Lightbulb, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ClassAssignment = () => {
  return (
    <div className="bg-[#F5F7FA] min-h-[calc(100vh-80px)] py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <div id="breadcrumb" className="flex items-center space-x-2 mb-8 text-sm">
          <Link to="/home" className="text-[#1A73E8] cursor-pointer">Dashboard</Link>
          <ChevronRight className="text-gray-400 w-4 h-4" />
          <span className="text-gray-600">Class Assignment</span>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Student List */}
          <div id="student-list" className="lg:col-span-4 bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-xl font-bold">Students</h2>
              <div className="relative w-full sm:w-auto">
                <input type="text" placeholder="Search students..." className="pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm w-full sm:w-48" />
                <Search className="w-4 h-4 absolute left-4 top-3 text-gray-400" />
              </div>
            </div>

            <div className="space-y-4 max-h-[600px] overflow-y-auto">
              <div id="student-1" className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl border-2 border-[#1A73E8] cursor-pointer">
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" className="w-10 h-10 rounded-full" alt="Student" />
                <div>
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <p className="text-sm text-gray-500">Grade 6</p>
                </div>
              </div>

              <div id="student-2" className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-xl cursor-pointer">
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" className="w-10 h-10 rounded-full" alt="Student" />
                <div>
                  <h3 className="font-semibold">Michael Chen</h3>
                  <p className="text-sm text-gray-500">Grade 7</p>
                </div>
              </div>

              <div id="student-3" className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-xl cursor-pointer">
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" className="w-10 h-10 rounded-full" alt="Student" />
                <div>
                  <h3 className="font-semibold">Emma Davis</h3>
                  <p className="text-sm text-gray-500">Grade 6</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Assignment Options */}
          <div className="lg:col-span-8 space-y-6">
            {/* Student Details */}
            <div id="student-details" className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" className="w-16 h-16 rounded-full border-4 border-[#FFC107]" alt="Student" />
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold">Sarah Johnson</h2>
                    <p className="text-gray-500">Student ID: #12345</p>
                  </div>
                </div>
                <button className="bg-[#1A73E8] text-white px-6 py-2 rounded-full text-sm w-full sm:w-auto">
                  Save Changes
                </button>
              </div>
            </div>

            {/* Class Assignment Section */}
            <div id="class-assignment" className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6">Class Assignment</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Current Classes */}
                <div id="current-classes">
                  <h4 className="text-sm font-semibold text-gray-500 mb-4">CURRENT CLASSES</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="bg-green-100 p-2 rounded-full">
                          <FlaskConical className="text-green-600 w-5 h-5" />
                        </div>
                        <span>Science Club</span>
                      </div>
                      <button className="text-red-500 hover:text-red-600">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <Palette className="text-purple-600 w-5 h-5" />
                        </div>
                        <span>Art Class</span>
                      </div>
                      <button className="text-red-500 hover:text-red-600">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Available Classes */}
                <div id="available-classes">
                  <h4 className="text-sm font-semibold text-gray-500 mb-4">AVAILABLE CLASSES</h4>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Code className="text-[#1A73E8] w-5 h-5" />
                        </div>
                        <span>Coding Club</span>
                      </div>
                      <Plus className="text-[#1A73E8] w-5 h-5" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="bg-orange-100 p-2 rounded-full">
                          <Music className="text-orange-600 w-5 h-5" />
                        </div>
                        <span>Music Class</span>
                      </div>
                      <Plus className="text-[#1A73E8] w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Program Goals */}
            <div id="program-goals" className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6">Program Goals</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-2 mb-3">
                    <Rocket className="text-[#1A73E8] w-5 h-5" />
                    <h4 className="font-semibold">STEAM Focus</h4>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-[#1A73E8] rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <span className="text-sm">60%</span>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-2 mb-3">
                    <Lightbulb className="text-[#FFC107] w-5 h-5" />
                    <h4 className="font-semibold">Innovation</h4>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-[#FFC107] rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <span className="text-sm">75%</span>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-2 mb-3">
                    <Users className="text-green-600 w-5 h-5" />
                    <h4 className="font-semibold">Leadership</h4>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-green-600 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    <span className="text-sm">45%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassAssignment;
