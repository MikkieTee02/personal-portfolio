"use client";
import { Send } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import {
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

interface FormData {
  name: string;
  message: string;
  email: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok){
        throw new Error("Failed to send message")
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      })
    } catch (error) {
      setStatus("error");
      console.error("Error sending message:", error);

    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="py-16">
      <div className="w-[90%] md:w-[80%] lg:w-[w-70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/*Left side*/}
        <div>
          <h2 className=" text-teal-400  text-xl md:text-3xl xl:text-4xl font-medium mb-6">
            Let's Get in Touch
          </h2>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Have a project in mind? Let's discuss how we can work together to
            bring your ideas to life.
          </p>
          <div className="mt-7">
            {/*Contact info*/}
            <div className="flex items-center space-x-3 mb-4">
              <BiPhone className="w-7 h-7 text-teal-400" />
              <p className="sm:text-lg text-base font-semibold text-gray-400">
                +263774898583
              </p>
            </div>

            <div className="flex items-center space-x-3 mb-4">
              <BiEnvelope className="w-7 h-7 text-teal-400" />
              <Link
                href="mailto:mikaelanyamasoka@gmail.com"
                className="sm:text-lg text-base font-semibold text-gray-400"
              >
                mikaelanyamasoka@gmail.com
              </Link>
            </div>

            <div className="flex items-center space-x-3 mb-4">
              <BiMap className="w-7 h-7 text-teal-400" />
              <p className="sm:text-lg text-base font-semibold text-gray-400">
                Victoria Falls, Zimbabwe
              </p>
            </div>
          </div>
          {/*Social icons*/}
          <div className="flex items-center mt-8 space-x-3">
            <div className="w-14 h-14 bg-slate-900 rounded-full border-2 flex items-center justify-center flex-col cursor-pointer hover:bg-slate-800 transition-all hover:border-teal-500 duration-300">
              <FaLinkedin className="text-gray-500 w-6 h-6" />
            </div>
            <div className="w-14 h-14 bg-slate-900 rounded-full border-2 flex items-center justify-center flex-col cursor-pointer hover:bg-slate-800 hover:border-teal-500 transition-all duration-300">
              <FaGithub className="text-gray-500 w-6 h-6" />
            </div>
            <div className="w-14 h-14 bg-slate-900 rounded-full border-2 flex items-center justify-center flex-col cursor-pointer hover:bg-slate-800 hover:border-teal-500 transition-all duration-300">
              <FaWhatsapp className="text-gray-500 w-6 h-6" />
            </div>
          </div>
        </div>

        {/*Right side form*/}
        <div className="px-4 p-6 bg-slate-800 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6 ">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                Full Name*
              </label>
              <input
                required
                value={formData.name}
                onChange={handleChange}
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name "
                className="w-full px-4
               py-2 rounded-md border-gray-700 bg-slate-900 focus:ring-purple-500 focus:border-none placeholder:text-gray-300/50"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                Email*
              </label>
              <input
                required
                value={formData.email}
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email "
                className="w-full px-4
               py-2 rounded-md border-gray-700 bg-slate-900 focus:ring-purple-500 focus:border-none placeholder:text-gray-300/50"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-white"
              >
                Message*
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                id="message"
                name="message"
                placeholder="Enter your message "
                className="w-full px-4
               py-2 rounded-md border-gray-700 bg-slate-900 focus:ring-purple-500 focus:border-none placeholder:text-gray-300/50"
              />
            </div>

            <button
              type="submit"

              className="w-full bg-teal-400 hover:bg-teal-500 hover:shadow-lg hover:shadow-teal-600/50 text-slate-900 py-3 rounded-md inline-flex items-center justify-center gap-2 transition-all duration-300"
            >
              <div className=" flex items-center space-x-2 ">
                {status === "loading" ? "Sending..." : "Send Message"}
              </div>
            </button>
            {
              status=== "success" && (
                <p className="text-green-500 text-center"> Message sent successfully! </p>
              )
            }

            {
              status==="error" && (
                <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
              )
            }
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
