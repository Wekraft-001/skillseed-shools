import React, { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Camera, ArrowRight } from "lucide-react";

interface Student {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  parentEmail: string;
  grade: string;
  age: string;
  image: string;
  disabled?: boolean;
}

interface AddChildModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  child?: Student | null;
}

interface FormData {
  firstName: string;
  lastName: string;
  parentEmail: string;
  age: string;
  grade: string;
  password: string;
  plainPassword: string;
}

const AddChildModal: React.FC<AddChildModalProps> = ({
  open,
  onOpenChange,
  child,
}) => {
  const queryClient = useQueryClient();
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const token = localStorage.getItem("schoolToken");
  const { handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(child?.image || null);

  const [formData, setFormData] = useState<FormData>({
    firstName: child?.firstName || "",
    lastName: child?.lastName || "",
    parentEmail: child?.parentEmail || "",
    age: child?.age || "",
    grade: child?.grade || "",
    password: "",
    plainPassword: "",
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

  // const handleSubmitChild = async () => {
  //   const { firstName, lastName, parentEmail, age, grade, password } = formData;

  //   // Only require image if adding new child
  //   if (!child && !image) {
  //     alert("Profile image is required.");
  //     return;
  //   }

  //   setLoading(true);
  //   const form = new FormData();
  //   form.append("firstName", firstName);
  //   form.append("lastName", lastName);
  //   form.append("parentEmail", parentEmail);
  //   form.append("age", age);
  //   form.append("grade", grade);
  //   if (!child) form.append("password", password); // Only for new child
  //   form.append("role", "student");
  //   if (image) form.append("image", image);

  //   try {
  //     if (child) {
  //       // Edit existing child
  //       await axios.patch(
  //         `${apiURL}/school/dashboard/students/${child._id}`, // dynamic id
  //         form,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  //       alert("Child updated successfully!");
  //     } else {
  //       // Add new child
  //       await axios.post(`${apiURL}/school/dashboard/register-student`, form, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       alert("Child added successfully!");
  //     }

  //     // Reset form
  //     setFormData({
  //       firstName: "",
  //       lastName: "",
  //       parentEmail: "",
  //       age: "",
  //       grade: "",
  //       password: "",
  //     });
  //     setImage(null);
  //     setPreview(null);
  //     onOpenChange(false);

  //     // Refetch students if using react-query
  //     queryClient.invalidateQueries({ queryKey: ["students"] });
  //   } catch (error: any) {
  //     alert(error?.response?.data?.message || "Something went wrong.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmitChild = async () => {
    setLoading(true);

    const updatedFormData = {
      ...formData,
      plainPassword: formData.password,
    };

    const form = new FormData();

    Object.entries(updatedFormData).forEach(([key, value]) => {
      if (value) form.append(key, value);
    });
    if (image) form.append("image", image);
    form.append("role", "student");

    try {
      if (child) {
        // PATCH request for editing
        await axios.patch(
          `${apiURL}/school/dashboard/students/${child._id}`,
          form,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        alert("Child updated successfully!");
      } else {
        // POST request for adding
        await axios.post(`${apiURL}/school/dashboard/register-student`, form, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Child added successfully!");
      }
      setFormData({
        firstName: "",
        lastName: "",
        parentEmail: "",
        age: "",
        grade: "",
        password: "",
        plainPassword: "",
      });
      setImage(null);
      setPreview(null);
      onOpenChange(false);
      queryClient.invalidateQueries({ queryKey: ["students"] });
    } catch (error: any) {
      const message = error?.response?.data?.message || "Something went wrong.";
      alert(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (child) {
      setFormData({
        firstName: child.firstName,
        lastName: child.lastName,
        parentEmail: child.parentEmail,
        age: child.age,
        grade: child.grade,
        password: "", // password can stay empty unless you want to reset it
        plainPassword: "",
      });
      setPreview(child.image || null);
    } else {
      setFormData({
        firstName: "",
        lastName: "",
        parentEmail: "",
        age: "",
        grade: "",
        password: "",
        plainPassword: "",
      });
      setImage(null);
      setPreview(null);
    }
  }, [child, open]);
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 bg-white">
        <div className="bg-white rounded-3xl shadow-md p-8 relative overflow-hidden">
          <DialogHeader className="relative z-10 mb-8">
            <DialogTitle className="text-2xl font-bold text-gray-900">
              {child ? "Edit Child" : "Add Child"}
            </DialogTitle>
          </DialogHeader>

          <form
            onSubmit={handleSubmit(handleSubmitChild)}
            className="space-y-4 relative z-10"
          >
            <div className="grid gap-5">
              {[
                "firstName",
                "lastName",
                "parentEmail",
                "age",
                "grade",
                "password",
              ].map((field) => (
                <div key={field} className="space-y-2">
                  <label className="block text-gray-700 font-medium capitalize">
                    {field === "grade"
                      ? "Grade"
                      : field.replace(/([A-Z])/g, " $1")}
                  </label>
                  <Input
                    type={field === "password" ? "password" : "text"}
                    value={formData[field as keyof FormData]}
                    onChange={(e) =>
                      handleInputChange(field as keyof FormData, e.target.value)
                    }
                    placeholder={`Enter ${field}`}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600"
                    disabled={!!child && field === "password"}
                  />
                </div>
              ))}
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
                <span>
                  {loading ? "Submitting..." : child ? "Update" : "Submit"}
                </span>
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
