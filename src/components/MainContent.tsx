import { useState } from "react";
import {
  Users,
  ArrowUp,
  BookOpen,
  ChartLine,
  UserPlus,
  FileText,
  Info,
  Rocket,
  Lightbulb,
  CalendarPlus,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Link } from "react-router-dom";

const engagementData = [
  { name: "Jan", engagement: 65, attendance: 72 },
  { name: "Feb", engagement: 59, attendance: 65 },
  { name: "Mar", engagement: 70, attendance: 75 },
  { name: "Apr", engagement: 78, attendance: 82 },
  { name: "May", engagement: 85, attendance: 88 },
  { name: "Jun", engagement: 82, attendance: 85 },
  { name: "Jul", engagement: 90, attendance: 92 },
];

const EngagementChart = () => {
  const [showAttendance, setShowAttendance] = useState(true);

  return (
    <div className="w-full h-full p-4">
      <div className="flex justify-end mb-2 space-x-4">
        <button
          onClick={() => setShowAttendance(!showAttendance)}
          className={`text-xs px-3 py-1 rounded-full ${
            showAttendance
              ? "bg-blue-100 text-blue-700"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {showAttendance ? "Hide Attendance" : "Show Attendance"}
        </button>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <AreaChart
          data={engagementData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1A73E8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#1A73E8" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorAttendance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#10B981" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#f0f0f0"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6B7280", fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6B7280", fontSize: 12 }}
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              border: "none",
            }}
            labelStyle={{
              color: "#4B5563",
              fontWeight: "bold",
              fontSize: "12px",
            }}
            formatter={(value, name) => [
              `${value}%`,
              name === "engagement" ? "Engagement" : "Attendance",
            ]}
          />
          <Legend
            verticalAlign="top"
            height={36}
            iconType="circle"
            formatter={(value) => (
              <span className="text-gray-600 text-sm">
                {value === "engagement" ? "Engagement" : "Attendance"}
              </span>
            )}
          />
          <Area
            type="monotone"
            dataKey="engagement"
            stroke="#1A73E8"
            fillOpacity={1}
            fill="url(#colorEngagement)"
            strokeWidth={2}
            dot={{
              stroke: "#1A73E8",
              strokeWidth: 2,
              fill: "white",
              r: 4,
              strokeDasharray: "",
            }}
            activeDot={{
              stroke: "#1A73E8",
              strokeWidth: 2,
              fill: "white",
              r: 6,
            }}
          />
          {showAttendance && (
            <Area
              type="monotone"
              dataKey="attendance"
              stroke="#10B981"
              fillOpacity={1}
              fill="url(#colorAttendance)"
              strokeWidth={2}
              dot={{
                stroke: "#10B981",
                strokeWidth: 2,
                fill: "white",
                r: 4,
                strokeDasharray: "",
              }}
              activeDot={{
                stroke: "#10B981",
                strokeWidth: 2,
                fill: "white",
                r: 6,
              }}
            />
          )}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="bg-gradient-to-br from-soft-gray via-blue-50 to-yellow-50 font-nunito relative overflow-x-hidden">
      {/* Floating Bubbles */}
      <div className="floating-bubble bg-primary-blue w-20 h-20 top-10 left-20"></div>
      <div className="floating-bubble bg-accent-yellow w-16 h-16 top-40 right-32"></div>
      <div className="floating-bubble bg-pink-300 w-12 h-12 top-80 left-1/3"></div>
      <div className="floating-bubble bg-green-300 w-24 h-24 bottom-40 right-20"></div>
      <div className="floating-bubble bg-purple-300 w-14 h-14 bottom-20 left-40"></div>

      {/* Main Content */}
      <div className="relative">
        <div className="container mx-auto px-6 py-8">
          {/* Dashboard Overview */}
          <div
            id="dashboard-overview"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          >
            <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-[#3C91BA]/25 card-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#3C91BA] rounded-full -mr-10 -mt-10"></div>
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="bg-[#3C91BA] p-4 rounded-full shadow-lg">
                  <Users className="text-white text-2xl" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-deep-navy mb-2">2,456</h3>
              <p className="text-gray-600 font-medium">Total Students</p>
              <div className="flex items-center mt-3">
                <div className="bg-green-100 p-1 rounded-full mr-2">
                  <ArrowUp className="text-green-600 text-xs" />
                </div>
                <span className="text-green-600 text-sm font-semibold">
                  12% increase
                </span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-orange-100 card-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full -mr-10 -mt-10"></div>
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-full shadow-lg">
                  <BookOpen className="text-white text-2xl" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-deep-navy mb-2">12</h3>
              <p className="text-gray-600 font-medium">Active Programs</p>
              <div className="flex items-center mt-3">
                <div className="bg-blue-100 p-1 rounded-full mr-2">
                  <Info className="text-primary-blue text-xs" />
                </div>
                <span className="text-primary-blue text-sm font-semibold">
                  2 pending
                </span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-green-100 card-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full -mr-10 -mt-10"></div>
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-full shadow-lg">
                  <ChartLine className="text-white text-2xl" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-deep-navy mb-2">89%</h3>
              <p className="text-gray-600 font-medium">Engagement Rate</p>
              <div className="flex items-center mt-3">
                <div className="bg-green-100 p-1 rounded-full mr-2">
                  <ArrowUp className="text-green-600 text-xs" />
                </div>
                <span className="text-green-600 text-sm font-semibold">
                  7% increase
                </span>
              </div>
            </div>
          </div>
          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Program Rollout */}
              <div
                id="program-rollout"
                className="bg-white rounded-3xl p-8 shadow-lg border-2 border-yellow-100 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full -ml-16 -mt-16"></div>
                <div className="flex justify-between items-center mb-4 relative z-10">
                  <div>
                    <h2 className="text-2xl font-bold text-deep-navy">
                      Program Rollout Status
                    </h2>
                    <p className="text-gray-600">
                      Track your learning programs
                    </p>
                  </div>
                  {/* <button className="bg-gradient-to-r from-primary-blue to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition flex items-center">
                    <Plus className="mr-2" />
                    Add Program
                  </button> */}
                </div>
                <div className="space-y-6 relative z-10">
                  <div className="bg-[#3C91BA]/75 p-6 rounded-2xl border-2 border-blue-200">
                    <div className="flex flex-col md:flex-row gap-5  md:items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-[#3C91BA] p-4 rounded-2xl shadow-lg">
                          <Rocket className="text-white text-xl" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-deep-navy">
                            STEM Week
                          </h3>
                          <p className="text-sm md:text-base text-gray-600">
                            Grade 6-8 • 245 students
                          </p>
                        </div>
                      </div>
                      <div className="text-right flex items-center gap-4">
                        <div className="w-40 h-3 bg-white rounded-full mb-2">
                          <div
                            className="h-3 bg-gradient-to-r from-primary-blue to-[#3C91BA] rounded-full"
                            style={{ width: "75%" }}
                          ></div>
                        </div>
                        <span className="md:text-lg font-bold text-primary-blue">
                          75%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-2xl border-2 border-purple-200">
                    <div className="flex flex-col md:flex-row gap-5 md:items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl shadow-lg">
                          <Lightbulb className="text-white text-xl" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-deep-navy">
                            Entrepreneurship Focus
                          </h3>
                          <p className="text-sm md:text-base text-gray-600">
                            Grade 9-10 • 189 students
                          </p>
                        </div>
                      </div>
                      <div className="text-right flex items-center gap-4">
                        <div className="w-40 h-3 bg-white rounded-full mb-2">
                          <div
                            className="h-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                            style={{ width: "45%" }}
                          ></div>
                        </div>
                        <span className="md:text-lg font-bold text-purple-600">
                          45%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics Chart */}
              <div
                id="analytics-chart"
                className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full -mr-12 -mt-12 opacity-50"></div>
                <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center mb-8 relative z-10">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-deep-navy">
                      Student Engagement Analytics
                    </h2>
                    <p className="text-gray-600 text-sm">Activity overview</p>
                  </div>
                  <select
                    onChange={(e) => {
                      // You can implement time range filtering here
                      console.log("Time range changed:", e.target.value);
                    }}
                    className="bg-gradient-to-r from-accent-yellow to-yellow-400 border-2 border-yellow-300 rounded-full px-6 py-3 text-sm font-semibold text-deep-navy shadow-lg"
                  >
                    <option value="7">Last 7 days</option>
                    <option value="30">Last 30 days</option>
                    <option value="90">Last 3 months</option>
                  </select>
                </div>
                {/* Sample Chart Data */}
                <div className="w-full">
                  <EngagementChart />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <div
                id="quick-actions"
                className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 relative overflow-hidden"
              >
                {/* Floating bubbles */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-pink-300 rounded-full opacity-30 animate-pulse"></div>
                <div
                  className="absolute bottom-6 left-6 w-6 h-6 bg-yellow-300 rounded-full opacity-40 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <h2 className="text-xl md:text-2xl font-bold text-deep-navy mb-4">
                  Quick Actions
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    to="/childManagement"
                    className="flex flex-col items-center justify-center p-2 md:p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full hover:from-blue-100 hover:to-blue-200 transition-all shadow-lg"
                  >
                    <UserPlus className="text-blue-500 text-xl mb-2" />
                    <span className="text-sm font-semibold">Add Student</span>
                  </Link>
                  <Link
                    to="/learning-goals"
                    className="flex flex-col items-center justify-center p-2 md:p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-full hover:from-purple-100 hover:to-purple-200 transition-all shadow-lg"
                  >
                    <Lightbulb className="text-purple-600 text-xl mb-2" />
                    <span className="text-sm font-semibold">Goals</span>
                  </Link>
                  <Link
                    to="/reports"
                    className="flex flex-col items-center justify-center p-2 md:p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-full hover:from-green-100 hover:to-green-200 transition-all shadow-lg"
                  >
                    <FileText className="text-green-600 text-xl mb-2" />
                    <span className="text-sm font-semibold">
                      Export Reports
                    </span>
                  </Link>
                  <Link
                    to="/mentor-sessions"
                    className="flex flex-col items-center justify-center p-2 md:p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-full hover:from-orange-100 hover:to-orange-200 transition-all shadow-lg"
                  >
                    <CalendarPlus className="text-orange-600 text-xl mb-2" />
                    <span className="text-sm font-semibold">Sessions</span>
                  </Link>
                </div>
              </div>
              {/* Upcoming Events */}
              <div
                id="upcoming-events"
                className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 relative overflow-hidden"
              >
                {/* Floating bubbles */}
                <div
                  className="absolute top-6 left-8 w-4 h-4 bg-accent-yellow rounded-full opacity-40 animate-pulse"
                  style={{ animationDelay: "1.5s" }}
                ></div>
                <div
                  className="absolute bottom-8 right-6 w-6 h-6 bg-pink-300 rounded-full opacity-35 animate-pulse"
                  style={{ animationDelay: "3s" }}
                ></div>
                <h2 className="text-2xl font-bold text-deep-navy mb-8">
                  Upcoming Events
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-2xl border-2 border-yellow-200">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent-yellow to-yellow-500 rounded-full flex flex-col items-center justify-center text-white shadow-lg">
                      <span className="text-xs font-bold">MAY</span>
                      <span className="text-lg font-bold">15</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-deep-navy">
                        Career Day
                      </h3>
                      <p className="text-sm text-gray-600">
                        10:00 AM - 2:00 PM
                      </p>
                      <div className="flex -space-x-2 mt-2">
                        <img
                          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                          alt="Student"
                          className="w-6 h-6 rounded-full border-2 border-white"
                        />
                        <img
                          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                          alt="Student"
                          className="w-6 h-6 rounded-full border-2 border-white"
                        />
                        <img
                          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                          alt="Student"
                          className="w-6 h-6 rounded-full border-2 border-white"
                        />
                        <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center">
                          <span className="text-xs font-bold text-gray-600">
                            +8
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-2xl border-2 border-blue-200">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-blue to-blue-600 rounded-full flex flex-col items-center justify-center text-white shadow-lg">
                      <span className="text-xs font-bold">MAY</span>
                      <span className="text-lg font-bold">20</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-deep-navy">
                        Parent-Student Meeting
                      </h3>
                      <p className="text-sm text-gray-600">2:00 PM - 4:00 PM</p>
                      <div className="flex -space-x-2 mt-2">
                        <img
                          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                          alt="Student"
                          className="w-6 h-6 rounded-full border-2 border-white"
                        />
                        <img
                          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg"
                          alt="Student"
                          className="w-6 h-6 rounded-full border-2 border-white"
                        />
                        <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center">
                          <span className="text-xs font-bold text-gray-600">
                            +5
                          </span>
                        </div>
                      </div>
                    </div>
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

export default MainContent;
