import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Camera, ArrowRight } from "lucide-react";

// Define the component props
interface AddChildModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Define the form data structure
interface FormData {
  fullName: string;
  specialty: string;
  email: string;
  phone: string;
  bio: string;
}

const AddChildModal: React.FC<AddChildModalProps> = ({
  open,
  onOpenChange,
}) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    specialty: "Science",
    email: "",
    phone: "",
    bio: "",
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 bg-white">
        <div className="bg-white rounded-3xl shadow-md p-8 relative overflow-hidden">
          <span className="absolute left-0 top-0 w-24 h-24 bg-blue-600 opacity-10 rounded-full z-0"></span>
          <span className="absolute right-0 bottom-0 w-32 h-32 bg-yellow-400 opacity-10 rounded-full z-0"></span>

          <DialogHeader className="relative z-10 mb-8">
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Add Child
            </DialogTitle>
            {/* <p className="text-gray-500">Add a new mentor to SkillSeed</p> */}
          </DialogHeader>

          <form className="space-y-4 relative z-10">
            <div className="grid gap-5">
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  First Name
                </label>
                <Input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                  placeholder="e.g. Jane Doe"
                  className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  Last Name
                </label>

                <Input
                  type="text"
                  value={formData.specialty}
                  onChange={(e) =>
                    handleInputChange("specialty", e.target.value)
                  }
                  placeholder="e.g. Science"
                  className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  Email Address
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="child@example.com"
                  className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  Parent Email
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="Enter phone number"
                  className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Grade</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="Enter phone number"
                  className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Profile Picture</h3>
              <div className="flex items-center space-x-6">
                <div className="relative group">
                  <img
                    src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=96&h=96&facepad=2&q=80"
                    className="w-24 h-24 rounded-full border-4 border-blue-600 object-cover shadow-lg bg-gray-100"
                    alt="Profile"
                  />
                  <button
                    type="button"
                    className="absolute bottom-0 right-0 bg-yellow-400 p-2 rounded-full border-2 border-white hover:bg-yellow-400/90 text-gray-900"
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-gray-500 text-sm">
                  Use a cute photo! (JPG or PNG, Max 2MB)
                </span>
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-7">
              <button
                type="submit"
                className="px-6 py-3 bg-[#3C91BA] text-white rounded-full font-semibold hover:bg-blue-600/90 flex items-center space-x-2"
              >
                <span>Submit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddChildModal;
