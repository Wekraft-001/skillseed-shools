import React, { useState } from "react";
import type { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Star, Rocket } from "lucide-react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

// Type definition for login form
interface LoginForm {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const { handleSubmit } = useForm<LoginForm>();

  const [loginDetails, setLoginDetails] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { email, password } = loginDetails;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async () => {
    setLoading(true);
    setErrorMessage(null);

    const url = `${apiURL}/auth/school/signin`;

    try {
      const response = await axios.post(url, loginDetails);
      console.log(response, "response");

      const accessToken = response.data.access_token;
      localStorage.setItem("schoolToken", accessToken);

      navigate("/home");
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[100vh] bg-[#F5F7FA] flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-[500px] p-8 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#FFC107] rounded-full opacity-10"></div>
        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#1A73E8] rounded-full opacity-10"></div>

        {/* Header */}
        <div className="text-center mb-8">
          <img
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
            alt="Welcome"
            className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-[#FFC107]"
          />
          <h1 className="text-2xl font-bold text-[#0A1F44]">
            Skillseed School Portal Login
          </h1>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#0A1F44]">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-[#1A73E8] focus:ring-2 focus:ring-[#1A73E8] focus:ring-opacity-20 outline-none transition"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#0A1F44]">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-[#1A73E8] focus:ring-2 focus:ring-[#1A73E8] focus:ring-opacity-20 outline-none transition"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-0 inset-y-0 right-0 pr-3 flex items-center text-gray-500 cursor-pointer"
              >
                {showPassword ? (
                  <IoIosEye size={25} />
                ) : (
                  <IoIosEyeOff size={25} />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#1A73E8] hover:bg-blue-600 text-white py-3 rounded-full transition duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Rocket className="w-5 h-5" />
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Sign In"
            )}
          </button>

          {errorMessage && (
            <div className="bg-red-500 text-white text-sm p-4 mt-4 text-center rounded-md">
              {errorMessage}
            </div>
          )}
        </form>

        {/* Decorative Icons */}
        <div className="absolute top-20 right-4 text-[#FFC107] text-xl">
          <Star className="w-5 h-5" />
        </div>
        <div className="absolute bottom-12 left-4 text-[#1A73E8] text-xl">
          <Rocket className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default Signin;
