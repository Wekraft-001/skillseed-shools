import { ChevronRight, Download, ArrowUp, Info, Flame, Brain, Laptop, FlaskConical, Palette, Users, Lightbulb, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Analytics = () => {
  return (
    <div className="bg-[#F5F7FA] min-h-[calc(100vh-80px)] overflow-y-auto font-nunito">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Breadcrumb */}
        <div id="breadcrumb" className="flex items-center space-x-2 mb-8 text-sm">
          <Link to="/" className="text-[#1A73E8] cursor-pointer">Dashboard</Link>
          <ChevronRight className="text-gray-400 w-4 h-4" />
          <span className="text-gray-600">Analytics</span>
        </div>

        {/* Analytics Header */}
        <div id="analytics-header" className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6 sm:mb-8">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#212121]">Class Analytics</h1>
            <p className="text-gray-500">Track student engagement and development metrics</p>
          </div>
          <div className="flex flex-col sm:flex-row w-full sm:w-auto space-y-3 sm:space-y-0 sm:space-x-4">
            <select className="bg-white border border-gray-200 rounded-full px-4 py-2">
              <option>Grade 6-A</option>
              <option>Grade 6-B</option>
              <option>Grade 7-A</option>
            </select>
            <button className="bg-[#1A73E8] text-white px-6 py-2 rounded-full flex items-center justify-center sm:justify-start">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div id="key-metrics" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <BarChart className="text-[#1A73E8] w-5 h-5" />
              </div>
              <span className="text-sm text-gray-500">Average Engagement</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">87%</h3>
            <div className="mt-2 flex items-center text-sm text-green-500">
              <ArrowUp className="w-4 h-4 mr-1" />
              <span>5% vs last month</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Lightbulb className="text-purple-600 w-5 h-5" />
              </div>
              <span className="text-sm text-gray-500">Skills Mastered</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">24</h3>
            <div className="mt-2 flex items-center text-sm text-green-500">
              <ArrowUp className="w-4 h-4 mr-1" />
              <span>3 new this week</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Info className="text-green-600 w-5 h-5" />
              </div>
              <span className="text-sm text-gray-500">Active Time</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">4.2h</h3>
            <div className="mt-2 flex items-center text-sm text-blue-500">
              <Info className="w-4 h-4 mr-1" />
              <span>Daily average</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Lightbulb className="text-orange-600 w-5 h-5" />
              </div>
              <span className="text-sm text-gray-500">Learning Paths</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">8</h3>
            <div className="mt-2 flex items-center text-sm text-orange-500">
              <Flame className="w-4 h-4 mr-1" />
              <span>2 in progress</span>
            </div>
          </div>
        </div>

        {/* Main Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Career Interests */}
          <div id="career-interests" className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Popular Career Interests</h2>
              <button className="text-[#1A73E8] hover:underline text-sm">View Details</button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center space-x-3">
                  <Laptop className="text-[#1A73E8] w-4 h-4" />
                  <span>Technology</span>
                </div>
                <div className="w-full sm:w-48 h-2 bg-gray-100 rounded-full">
                  <div className="h-2 bg-[#1A73E8] rounded-full" style={{ width: '85%' }}></div>
                </div>
                <span className="text-sm font-semibold ml-auto sm:ml-0">85%</span>
              </div>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center space-x-3">
                  <FlaskConical className="text-purple-600 w-4 h-4" />
                  <span>Science</span>
                </div>
                <div className="w-full sm:w-48 h-2 bg-gray-100 rounded-full">
                  <div className="h-2 bg-purple-600 rounded-full" style={{ width: '70%' }}></div>
                </div>
                <span className="text-sm font-semibold ml-auto sm:ml-0">70%</span>
              </div>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center space-x-3">
                  <Palette className="text-green-600 w-4 h-4" />
                  <span>Arts</span>
                </div>
                <div className="w-full sm:w-48 h-2 bg-gray-100 rounded-full">
                  <div className="h-2 bg-green-600 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <span className="text-sm font-semibold ml-auto sm:ml-0">65%</span>
              </div>
            </div>
          </div>

          {/* Skill Development */}
          <div id="skill-development" className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
              <h2 className="text-xl font-bold">Skill Development</h2>
              <select className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm">
                <option>This Quarter</option>
                <option>Last Quarter</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-xl text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                  <Brain className="text-[#1A73E8] w-6 h-6" />
                </div>
                <h3 className="font-semibold">Problem Solving</h3>
                <p className="text-sm text-gray-500">Advanced</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="text-purple-600 w-6 h-6" />
                </div>
                <h3 className="font-semibold">Teamwork</h3>
                <p className="text-sm text-gray-500">Intermediate</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-green-100 rounded-full flex items-center justify-center">
                  <Lightbulb className="text-green-600 w-6 h-6" />
                </div>
                <h3 className="font-semibold">Creativity</h3>
                <p className="text-sm text-gray-500">Advanced</p>
              </div>
            </div>
          </div>

          {/* Engagement Timeline */}
          <div id="engagement-timeline" className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 col-span-1 lg:col-span-2">
            <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
              <h2 className="text-xl font-bold">Engagement Timeline</h2>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 rounded-full bg-gray-100 text-sm">Daily</button>
                <button className="px-4 py-2 rounded-full bg-[#1A73E8] text-white text-sm">Weekly</button>
                <button className="px-4 py-2 rounded-full bg-gray-100 text-sm">Monthly</button>
              </div>
            </div>
            <div className="h-[200px] sm:h-[300px] bg-gray-50 rounded-xl flex items-center justify-center">
              <p className="text-gray-400">Engagement Timeline Chart Goes Here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
