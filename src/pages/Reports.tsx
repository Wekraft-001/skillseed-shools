import { ChevronRight, FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Reports = () => {
  return (
    <div className="bg-[#F5F7FA] min-h-[calc(100vh-80px)] font-nunito">
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
          <span className="text-gray-600">Reports</span>
        </div>

        {/* Report Generator Section */}
        <div
          id="report-generator"
          className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 mb-6 sm:mb-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
            <h2 className="text-xl font-bold">Generate Report</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Report Type
              </label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5">
                <option>Student Progress</option>
                <option>Session Logs</option>
                <option>Summary </option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Age Range
              </label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5">
                <option>Select the age</option>
                <option>6-8</option>
                <option>9-10</option>
                <option>11-12</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Date Range
              </label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5">
                <option>Last 30 days</option>
                <option>Last Quarter</option>
                <option>Last Semester</option>
                <option>Custom Range</option>
              </select>
            </div>
            <div className="space-y-2 flex flex-col">
              <label className="text-sm font-medium text-transparent">.</label>
              <button className="bg-[#1A73E8] text-white px-6 py-2 rounded-full text-sm flex items-center justify-center">
                <FileText className="w-4 h-4 mr-2" />
                Export Report
              </button>
            </div>
          </div>
        </div>

        {/* Recent Reports */}
        <div
          id="recent-reports"
          className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 mb-6 sm:mb-8"
        >
          <h2 className="text-xl font-bold mb-6">Recent Reports</h2>
          <div className="overflow-x-auto -mx-5 sm:-mx-6 px-5 sm:px-6">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="text-left bg-gray-50">
                  <th className="px-4 sm:px-6 py-3 text-sm font-medium text-gray-500 rounded-l-xl">
                    Report Name
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-sm font-medium text-gray-500">
                    Generated Date
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-sm font-medium text-gray-500">
                    Type
                  </th>

                  <th className="px-4 sm:px-6 py-3 text-sm font-medium text-gray-500 rounded-r-xl">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 sm:px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <FileText className="text-red-500 w-4 h-4" />
                      <span className="whitespace-nowrap">
                        Q1_Progress_Report_2025
                      </span>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    May 14, 2025
                  </td>
                  <td className="px-4 sm:px-6 py-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm whitespace-nowrap">
                      Ministry Report
                    </span>
                  </td>

                  <td className="px-4 sm:px-6 py-4 flex items-center justify-center">
                    <div className="flex space-x-3">
                      <button className="text-[#1A73E8] hover:text-blue-700">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 sm:px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <FileText className="text-green-600 w-4 h-4" />
                      <span className="whitespace-nowrap">
                        Attendance_Summary_May2025
                      </span>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    May 12, 2025
                  </td>
                  <td className="px-4 sm:px-6 py-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm whitespace-nowrap">
                      Attendance
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 flex items-center justify-center">
                    <div className="flex space-x-3">
                      <button className="text-[#1A73E8] hover:text-blue-700">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
