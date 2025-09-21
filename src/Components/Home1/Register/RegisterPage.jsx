import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import logo from "../../../assets/BlogOne img/navImg/Elearna.svg"; // ✅ Import logo
import BgImg from "../../../assets/Home1 img/Hero2 img/bg-img.avif"; // ✅ Background image

/* ---------- Icons ---------- */
const MailIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
    <path d="m22 8-10 6L2 8" />
  </svg>
);

const LockIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const EyeIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeSlashIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.82 21.82 0 0 1 5.06-5.94" />
    <path d="M1 1l22 22" />
    <path d="M9.88 9.88A3 3 0 0 0 12 15a3 3 0 0 0 2.12-.88" />
  </svg>
);

/* ---------- Validation ---------- */
const signupSchema = z
  .object({
    email: z
      .string()
      .min(8, { message: "Email must be at least 8 characters" })
      .email({ message: "Please enter a valid email" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" })
      .regex(/[A-Z]/, { message: "Include at least one uppercase letter" })
      .regex(/[a-z]/, { message: "Include at least one lowercase letter" })
      .regex(/[@$!%*?&]/, {
        message: "Include a special character (@, $, !, %, *, ?, &)",
      }),
    confirmPassword: z
      .string()
      .min(6, { message: "Confirm password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (values) => {
    console.log(values);
    reset();
  };

  return (
    <div
      className="relative min-h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/90 via-cyan-950/90 to-black/90"></div>

      {/* ✅ Logo Top-Left */}
      <img
        src={logo}
        alt="Logo"
        className="object-contain fixed top-4 left-4 z-50"
      />

      {/* Main Content */}
      <div className="relative z-10 flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-12">
        <div className="w-full max-w-md sm:max-w-lg">
          <div className="text-center mb-6">
            <h1 className="text-3xl mt-4 sm:text-4xl font-extrabold text-white animate-fadeIn">
              Create Account ✨
            </h1>
            <p className="mt-2 text-gray-300 animate-fadeIn delay-100">
              Join <span className="text-yellow-400 font-semibold">50k+</span>{" "}
              learners growing with us.
            </p>
          </div>

          {/* Card (✅ Removed dark:bg-black/80) */}
          <div className="bg-[#20383E]/95 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl hover:shadow-yellow-400/40 transition-all duration-500 h-auto max-h-[90vh] overflow-y-auto">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              noValidate
            >
              {/* Email */}
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className={`peer w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 text-white placeholder-transparent border-2 ${
                    errors.email ? "border-red-500" : "border-gray-600"
                  } focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 transition`}
                  placeholder="you@example.com"
                />
                <label
                  htmlFor="email"
                  className="absolute left-12 top-1/2 -translate-y-1/2 text-gray-400 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-yellow-400 peer-focus:text-sm transition-all"
                >
                  Email Address
                </label>
                <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-yellow-400 pointer-events-none" />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  className={`peer w-full pl-12 pr-12 py-4 rounded-xl bg-white/5 text-white placeholder-transparent border-2 ${
                    errors.password ? "border-red-500" : "border-gray-600"
                  } focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 transition`}
                  placeholder="••••••••"
                />
                <label
                  htmlFor="password"
                  className="absolute left-12 top-1/2 -translate-y-1/2 text-gray-400 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-yellow-400 peer-focus:text-sm transition-all"
                >
                  Password
                </label>
                <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-yellow-400 pointer-events-none" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 text-lg"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="w-5 h-5" />
                  ) : (
                    <EyeIcon className="w-5 h-5" />
                  )}
                </button>
                {errors.password && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  {...register("confirmPassword")}
                  className={`peer w-full pl-12 pr-12 py-4 rounded-xl bg-white/5 text-white placeholder-transparent border-2 ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-600"
                  } focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 transition`}
                  placeholder="••••••••"
                />
                <label
                  htmlFor="confirmPassword"
                  className="absolute left-12 top-1/2 -translate-y-1/2 text-gray-400 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-yellow-400 peer-focus:text-sm transition-all"
                >
                  Confirm Password
                </label>
                <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-yellow-400 pointer-events-none" />
                {errors.confirmPassword && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-500 transition-transform duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Creating Account..." : "Sign Up"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ✅ Footer */}
      <footer className="relative z-10 bg-black/50 text-xs text-gray-200 px-6 py-6 text-center">
        © 2025 Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default Signup;
