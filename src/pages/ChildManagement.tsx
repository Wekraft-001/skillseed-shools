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
};

const ChildManagement = () => {
  const members: Member[] = [
    {
      firstName: "Agnes",
      lastName: "Wambui",
      email: "agnes@gmail.com",
      parentEmail: "wambui@gmail.com",
      grade: "7",
    },
    {
      firstName: "Juliet",
      lastName: "Kelechi",
      email: "julie@gmail.com",
      parentEmail: "kaycee@gmail.com",
      grade: "5",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <PageMetadata
        title="Member Management | SkillSeed"
        description="Manage your organization's members, roles, and permissions in one place"
      />

      <div className="bg-[#F5F7FA] min-h-[calc(100vh-80px)] font-nunito">
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

      {/* Modal for Add Child */}
      {/* {isModalOpen && (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Add New Member</h3>
            <div className="space-y-3">
              {["firstName", "lastName", "email", "parentEmail", "grade"].map(
                (field) => (
                  <input
                    key={field}
                    type="text"
                    name={field}
                    placeholder={field.replace(/([A-Z])/g, " $1")}
                    value={(newMember as any)[field]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg text-sm"
                  />
                )
              )}
            </div>
            <div className="flex justify-end space-x-3 mt-5">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-lg text-gray-600 hover:text-black"
              >
                Cancel
              </button>
              <button
                onClick={handleAddMember}
                className="px-4 py-2 bg-[#FAB548] text-white rounded-lg text-sm"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )} */}
      <AddChildModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
};

export default ChildManagement;
