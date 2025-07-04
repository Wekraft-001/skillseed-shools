import { useState } from "react";
import { ChevronRight, Plus, Edit } from "lucide-react";
import { Link } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";
import { PageMetadata } from "../components/PageMetadata";
import AddChildModal from "../components/modals/addChildModal";

type Member = {
  firstName: string;
  lastName: string;
  email: string;
  parentEmail: string;
  grade: string;
  age: string;
};

const ChildManagement = () => {
  const members: Member[] = [
    {
      firstName: "Agnes",
      lastName: "Wambui",
      email: "agnes@gmail.com",
      parentEmail: "wambui@gmail.com",
      grade: "7",
      age: "6",
    },
    {
      firstName: "Juliet",
      lastName: "Kelechi",
      email: "julie@gmail.com",
      parentEmail: "kaycee@gmail.com",
      grade: "5",
      age: "12",
    },
    {
      firstName: "Akere",
      lastName: "Achu",
      email: "akere@gmail.com",
      parentEmail: "kaycee@gmail.com",
      grade: "7",
      age: "15",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <PageMetadata
        title="Member Management | SkillSeed"
        description="Manage your organization's members, roles, and permissions in one place"
      />

      <div className="hidden bg-[#F5F7FA] min-h-[calc(100vh-80px)] font-nunito">
        <div className="container mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 mb-8 text-sm">
            <Link to="/home" className="text-[#3C91BA] cursor-pointer">
              Dashboard
            </Link>
            <ChevronRight className="text-gray-400 w-4 h-4" />
            <span className="text-gray-600">Child Management</span>
          </div>

          {/* Member Table */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 mb-6 sm:mb-8">
            <div className="w-full flex items-center justify-between pb-3">
              <h2 className="text-xl font-bold">Children</h2>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#FAB548] text-white px-4 md:px-8 py-3 rounded-full text-sm flex items-center font-semibold cursor-pointer"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Child
              </button>
            </div>

            <div className="overflow-x-auto -mx-5 sm:-mx-6 px-5 sm:px-6">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="text-left bg-gray-50">
                    <th className="px-4 sm:px-6 py-3 text-sm font-medium text-gray-500">
                      First Name
                    </th>
                    <th className="px-4 sm:px-6 py-3 text-sm font-medium text-gray-500">
                      Last Name
                    </th>
                    <th className="px-4 sm:px-6 py-3 text-sm font-medium text-gray-500">
                      Email
                    </th>
                    <th className="px-4 sm:px-6 py-3 text-sm font-medium text-gray-500">
                      Parent's Email
                    </th>
                    <th className="px-4 sm:px-6 py-3 text-sm font-medium text-gray-500">
                      Grade
                    </th>
                    <th className="px-4 sm:px-6 py-3 text-sm font-medium text-gray-500">
                      Status
                    </th>
                    <th className="px-4 sm:px-6 py-3 text-sm font-medium text-gray-500">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {members.map((member, index) => (
                    <tr key={index}>
                      <td className="px-4 sm:px-6 py-4 text-sm text-gray-500">
                        {member.firstName}
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-gray-500">
                        {member.lastName}
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-gray-500">
                        {member.email}
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-gray-500">
                        {member.parentEmail}
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-gray-500">
                        {member.grade}
                      </td>
                      <td className="px-4 sm:px-6 py-4">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                          Active
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-4">
                        <div className="flex space-x-3">
                          <button className="text-[#3C91BA] hover:text-[#3C91BA]/50">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <TiDeleteOutline size={20} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* UPDATE */}
      <div className="relative h-screen bg-gradient-to-br from-soft-gray via-blue-50 to-yellow-50 font-nunito overflow-x-hidden">
        <div className="container mx-auto px-6 py-8">
          {/* Student Capacity Card */}
          <div
            id="student-capacity"
            className="bg-white rounded-3xl p-8 shadow-lg border-2 border-[#FAB548]/20 mb-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FAB548]/50 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-4 left-8 w-6 h-6 bg-yellow-300 rounded-full opacity-40 pulse-slow"></div>
            <div
              className="absolute top-12 right-20 w-4 h-4 bg-pink-300 rounded-full opacity-30 pulse-slow"
              style={{ animationDelay: "1s" }}
            ></div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between relative z-10">
              <div className="flex items-center space-x-6 mb-6 lg:mb-0">
                <div className="bg-[#3C91BA] p-6 rounded-full shadow-lg">
                  {/* Users Icon */}
                  <svg
                    className="text-white text-3xl w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 640 512"
                  >
                    <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"></path>
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl md:text-3xl font-bold text-deep-navy">
                    Student Capacity
                  </h2>
                  <p className="text-gray-600 md:text-lg">
                    Premium Plan Allocation
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600 font-semibold">
                      27 students remaining
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-[#3C91BA]/35 p-6 rounded-2xl border-2 border-blue-200">
                  <p className="text-gray-600 text-sm">Students Added</p>
                  <p className="text-2xl md:text-4xl font-bold text-primary-blue">3 / 30</p>
                  <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
                    <div
                      className="bg-[#3C91BA] h-3 rounded-full"
                      style={{ width: "10%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Child Management Header */}
          <div
            id="child-management-header"
            className="flex flex-col gap-4 md:flex-row justify-between md:items-center mb-4"
          >
            <div>
              <h2 className="text-xl md:text-3xl font-bold text-deep-navy">
                Registered Children
              </h2>
              <p className="text-gray-600">
                Manage your school's student profiles
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#FAB548] text-black px-4 md:px-8 py-3 rounded-full text-sm md:text-lg flex items-center justify-center font-semibold cursor-pointer"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Child
            </button>
          </div>
          {/* Children Table */}
          <div
            id="children-table"
            className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-24 h-24 bg-[#FAB548]/35 rounded-full -ml-12 -mt-12"></div>
            <div className="absolute top-16 right-12 w-5 h-5 bg-accent-yellow rounded-full opacity-40 pulse-slow"></div>
            <div
              className="absolute bottom-12 left-20 w-7 h-7 bg-green-300 rounded-full opacity-30 pulse-slow"
              style={{ animationDelay: "2.5s" }}
            ></div>
            <div className="relative z-10 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-100">
                    <th className="text-left py-4 px-4 text-deep-navy font-semibold">
                      Child
                    </th>
                    <th className="text-left py-4 px-4 text-deep-navy font-semibold">
                      Age
                    </th>
                    <th className="text-left py-4 px-4 text-deep-navy font-semibold">
                      Class
                    </th>
                    <th className="text-left py-4 px-4 text-deep-navy font-semibold">
                      Parent Email
                    </th>
                    <th className="text-left py-4 px-4 text-deep-navy font-semibold">
                      Status
                    </th>
                    <th className="text-center py-4 px-4 text-deep-navy font-semibold">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-amber-100">
                  {members.map((member, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-50 hover:bg-blue-50 transition"
                    >
                      <td className="py-6 px-4">
                        <div className="flex items-center space-x-4">
                          <img
                            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                            alt="Emma"
                            className="w-12 h-12 rounded-full border-3 border-pink-200 shadow-lg"
                          />
                          <div>
                            <h3 className="font-bold text-deep-navy">
                              {member.firstName + " " + member.lastName}
                            </h3>
                            <p className="text-gray-500 text-sm">
                              {member.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-6 px-4 text-gray-600 whitespace-nowrap">
                        {member.age}
                      </td>
                      <td className="py-6 px-4 whitespace-nowrap">
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                          Grade {member.grade}
                        </span>
                      </td>
                      <td className="py-6 px-4 text-gray-600 whitespace-nowrap">
                        {member.parentEmail}
                      </td>
                      <td className="py-6 px-4">
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                          Active
                        </span>
                      </td>
                      <td className="py-6 px-4 text-center">
                        <div className="flex justify-center space-x-2">
                          <button className="bg-[#3C91BA] text-white p-2 rounded-full hover:bg-blue-600 transition">
                            {/* Pen Icon */}
                            <svg
                              className="text-sm w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 512 512"
                            >
                              <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                            </svg>
                          </button>
                          <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                            {/* Trash Icon */}
                            <svg
                              className="text-sm w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 448 512"
                            >
                              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Add Child */}
      <AddChildModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
};

export default ChildManagement;
