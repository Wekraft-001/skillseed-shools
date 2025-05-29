import { useState } from "react";
import { Card } from "./ui/card";
import {
  Users,
  ArrowUp,
  BookOpen,
  ChartLine,
  UserPlus,
  FileText,
  Info,
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
    <div className="bg-[#FFF5EB] min-h-[calc(100vh-80px)] font-nunito">
      <div className="container mx-auto px-6 py-8">
        {/* Dashboard Overview */}
        <div
          id="dashboard-overview"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="text-[#1A73E8] w-6 h-6" />
              </div>
              <span className="text-sm text-gray-500">Total Students</span>
            </div>
            <h3 className="text-3xl font-bold">2,456</h3>
            <p className="text-green-500 text-sm mt-2 flex items-center">
              <ArrowUp className="w-4 h-4 mr-1" /> 12% from last month
            </p>
          </Card>

          {/* <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <School className="text-purple-600 w-6 h-6" />
              </div>
              <span className="text-sm text-gray-500">Active Staff</span>
            </div>
            <h3 className="text-3xl font-bold">184</h3>
            <p className="text-green-500 text-sm mt-2 flex items-center">
              <ArrowUp className="w-4 h-4 mr-1" /> 4% from last month
            </p>
          </Card> */}

          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <BookOpen className="text-orange-600 w-6 h-6" />
              </div>
              <span className="text-sm text-gray-500">Active Programs</span>
            </div>
            <h3 className="text-3xl font-bold">12</h3>
            <p className="text-blue-500 text-sm mt-2 flex items-center">
              <Info className="w-4 h-4 mr-1" /> 2 pending approval
            </p>
          </Card>

          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <ChartLine className="text-green-600 w-6 h-6" />
              </div>
              <span className="text-sm text-gray-500">Engagement Rate</span>
            </div>
            <h3 className="text-3xl font-bold">89%</h3>
            <p className="text-green-500 text-sm mt-2 flex items-center">
              <ArrowUp className="w-4 h-4 mr-1" /> 7% from last month
            </p>
          </Card>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Program Rollout */}
            <Card
              id="program-rollout"
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h2 className="text-xl font-bold">Learning Curve Overview</h2>
                {/* <Button className="bg-[#1A73E8] text-white rounded-full text-sm">
                  <Plus className="mr-2 h-4 w-4" />Add Program
                </Button> */}
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <ChartLine className="text-[#1A73E8] w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">STEAM Week</h3>
                      <p className="text-sm text-gray-500">Grade 6-8</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-32">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-2 bg-[#1A73E8] rounded-full"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm font-semibold">75%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <BookOpen className="text-purple-600 w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Entrepreneurship Focus</h3>
                      <p className="text-sm text-gray-500">Grade 9-10</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-32">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-2 bg-purple-600 rounded-full"
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm font-semibold">45%</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Analytics Chart */}
            <Card
              id="analytics-chart"
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h2 className="text-xl font-bold">Engagement Analytics</h2>
                <select
                  className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm"
                  onChange={(e) => {
                    // You can implement time range filtering here
                    console.log("Time range changed:", e.target.value);
                  }}
                >
                  <option value="7">Last 7 days</option>
                  <option value="30">Last 30 days</option>
                  <option value="90">Last 3 months</option>
                </select>
              </div>
              <div className="h-[300px] w-full">
                <EngagementChart />
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card
              id="quick-actions"
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <UserPlus className="text-[#1A73E8] w-6 h-6 mb-2" />
                  <span className="text-sm">Add Student</span>
                </button>
                {/* <button className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <UserSearch className="text-[#1A73E8] w-6 h-6 mb-2" />
                  <span className="text-sm">Manage Staff</span>
                </button> */}
                {/* <button className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <MessageSquare className="text-[#1A73E8] w-6 h-6 mb-2" />
                  <span className="text-sm">Message Parents</span>
                </button> */}
                <button className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <FileText className="text-[#1A73E8] w-6 h-6 mb-2" />
                  <span className="text-sm">Export Reports</span>
                </button>
              </div>
            </Card>

            {/* Recent Activities */}
            {/* <Card id="recent-activities" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-6">Recent Activities</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <UserCheck className="text-[#1A73E8] w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm">New student registration approved</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CalendarCheck className="text-green-600 w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm">Career Discovery Day scheduled</p>
                    <p className="text-xs text-gray-500">4 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Book className="text-purple-600 w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm">New learning resources added</p>
                    <p className="text-xs text-gray-500">Yesterday</p>
                  </div>
                </div>
              </div>
            </Card> */}

            {/* Upcoming Events */}
            <Card
              id="upcoming-events"
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-bold mb-6">Upcoming Events</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FFC107] rounded-xl flex flex-col items-center justify-center text-white">
                    <span className="text-sm font-bold">MAY</span>
                    <span className="text-lg font-bold">15</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Career Day</h3>
                    <p className="text-sm text-gray-500">10:00 AM - 2:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FFC107] rounded-xl flex flex-col items-center justify-center text-white">
                    <span className="text-sm font-bold">MAY</span>
                    <span className="text-lg font-bold">20</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Parent-Teacher Meeting</h3>
                    <p className="text-sm text-gray-500">2:00 PM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
