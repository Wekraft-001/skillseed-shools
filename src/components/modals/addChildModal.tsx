import React, { useState } from "react";
import type { ChangeEvent } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Camera, ArrowRight } from "lucide-react";

interface AddChildModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  age: string;
  grade: string;
  password: string;
}

const AddChildModal: React.FC<AddChildModalProps> = ({
  open,
  onOpenChange,
}) => {
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const token = localStorage.getItem("schoolToken");
  const { handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    age: "",
    grade: "",
    password: "",
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert("Image too large. Max size is 2MB.");
      return;
    }

    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleAddChild = async () => {
    const { firstName, lastName, age, grade, password } = formData;

    if (!image) {
      alert("Profile image is required.");
      return;
    }

    setLoading(true);
    const form = new FormData();
    form.append("firstName", firstName);
    form.append("lastName", lastName);
    form.append("age", age);
    form.append("grade", grade);
    form.append("password", password);
    form.append("role", "student");
    form.append("image", image);

    try {
      const response = await axios.post(`${apiURL}/school/dashboard/register-student`, form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 201) {
        alert("Child added successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          age: "",
          grade: "",
          password: "",
        });
        setImage(null);
        setPreview(null);
        onOpenChange(false);
      }
    } catch (error: any) {
      const message = error?.response?.data?.message || "Something went wrong.";
      alert(message);
    } finally {
      setLoading(false);
    }
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
          </DialogHeader>

          <form
            onSubmit={handleSubmit(handleAddChild)}
            className="space-y-4 relative z-10"
          >
            <div className="grid gap-5">
              {["firstName", "lastName", "age", "grade", "password"].map(
                (field) => (
                  <div key={field} className="space-y-2">
                    <label className="block text-gray-700 font-medium capitalize">
                      {field === "grade"
                        ? "Grade"
                        : field.replace(/([A-Z])/g, " $1")}
                    </label>
                    <Input
                      type="text"
                      value={formData[field as keyof FormData]}
                      onChange={(e) =>
                        handleInputChange(
                          field as keyof FormData,
                          e.target.value
                        )
                      }
                      placeholder={`Enter ${field}`}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600"
                    />
                  </div>
                )
              )}
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Profile Picture</h3>
              <div className="flex items-center space-x-6">
                <div className="relative group">
                  <img
                    src={
                      preview ||
                      "https://via.placeholder.com/96x96.png?text=Preview"
                    }
                    className="w-24 h-24 rounded-full border-4 border-blue-600 object-cover shadow-lg bg-gray-100"
                    alt="Preview"
                  />
                  <label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      hidden
                    />
                    <span className="absolute bottom-0 right-0 bg-yellow-400 p-2 rounded-full border-2 border-white hover:bg-yellow-400/90 text-gray-900 cursor-pointer">
                      <Camera className="w-4 h-4" />
                    </span>
                  </label>
                </div>
                <span className="text-gray-500 text-sm">
                  JPG or PNG, Max 2MB
                </span>
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-7">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-[#3C91BA] text-white rounded-full font-semibold hover:bg-blue-600/90 flex items-center space-x-2"
              >
                <span>{loading ? "Submitting..." : "Submit"}</span>
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
