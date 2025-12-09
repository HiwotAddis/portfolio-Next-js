"use client";
import React, { useState } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xanezegy", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _replyto: e.target.email.value,
          email: e.target.email.value,
          subject: e.target.subject.value,
          message: e.target.message.value,
        }),
      });

      if (response.ok) {
        setEmailSubmitted(true);
        e.target.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div className="z-10 flex flex-col items-start">
          <h5 className="text-left text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 my-2">
            Let's Connect
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md text-left">
            {" "}
            I'm currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-3 text-[#ADB7BE]">
              <span className="p-2 rounded-full bg-[#181818]">
                <PhoneIcon className="h-6 w-6 text-pink-500" />
              </span>
              <span className="text-white font-medium">+251 961 256 116</span>
            </div>
            <div className="flex items-center gap-3 text-[#ADB7BE]">
              <span className="p-2 rounded-full bg-[#181818]">
                <EnvelopeIcon className="h-6 w-6 text-pink-500" />
              </span>
              <span className="text-white font-medium">
                addishiwot963@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-3 text-[#ADB7BE]">
              <span className="p-2 rounded-full bg-[#181818]">
                <MapPinIcon className="h-6 w-6 text-pink-500" />
              </span>
              <span className="text-white font-medium">
                Addis Ababa, Ethiopia
              </span>
            </div>
          </div>
        </div>
        <div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="your@email.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block mb-2 text-sm font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block mb-2 text-sm font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 min-h-[120px]"
                placeholder="Your message here..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-purple-400 to-pink-600 text-white font-medium py-2.5 px-5 rounded-lg w-full hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {emailSubmitted && (
              <p className="text-green-500 text-sm mt-2 text-center font-medium">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
