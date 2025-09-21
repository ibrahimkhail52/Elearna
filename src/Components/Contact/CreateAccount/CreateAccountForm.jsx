import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod schema for validation
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
  saveInfo: z.boolean().optional(),
});

export default function CreateAccountForm() {
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    try {
      console.log("Form Data:", data);
      setSubmitError(false);
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(true);
    }
  };

  return (
    <div className="min-h-screen relative bottom-52 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl font-bold mb-2 text-center sm:text-left">
          Fill out for contact
        </h2>
        <p className="text-gray-500 mb-6 text-center sm:text-left">
          Lorem ipsum dolor sit amet consectetur libero donec.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Your name*"
              {...register("name")}
              className={`w-full p-3 border rounded-md focus:outline-none transition-colors ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Your email*"
              {...register("email")}
              className={`w-full p-3 border rounded-md focus:outline-none transition-colors ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Subject */}
          <div>
            <input
              type="text"
              placeholder="Subject*"
              {...register("subject")}
              className={`w-full p-3 border rounded-md focus:outline-none transition-colors ${
                errors.subject ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              placeholder="Your message*"
              rows="5"
              {...register("message")}
              className={`w-full p-3 border rounded-md focus:outline-none transition-colors ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Save info */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="saveInfo"
              {...register("saveInfo")}
              className="h-4 w-4 border-gray-300 rounded"
            />
            <label htmlFor="saveInfo" className="text-sm text-gray-600">
              Save information for next time
            </label>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-[#0b2f2f] text-white px-6 py-3 rounded-md hover:bg-[#093030] transition-colors w-full sm:w-auto"
          >
            Send Message
          </button>

          {/* Error alert */}
          {submitError && (
            <div className="bg-red-100 text-red-600 p-3 rounded-md mt-4">
              Oops! Something went wrong while submitting the form.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
