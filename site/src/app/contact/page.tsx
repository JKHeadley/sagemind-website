"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-near-black min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-animated-gradient opacity-30" />
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-40 left-10 w-96 h-96 bg-bright-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-teal/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 rounded-full glass border border-bright-cyan/30 text-bright-cyan text-sm font-medium mb-8">
              Contact Us
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8">
              <span className="text-white">Let&apos;s Start </span>
              <span className="gradient-text">Building</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Tell us about your project and we&apos;ll craft a custom solution built just for you. We&apos;d love to hear about your challenges and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <div className="glass rounded-3xl p-8 lg:p-10 border border-white/5">
                <h2 className="text-2xl font-bold text-white mb-8">
                  Send Us a Message
                </h2>

                {status === "success" ? (
                  <div className="bg-gradient-to-br from-bright-cyan/20 to-teal/20 rounded-2xl p-8 border border-bright-cyan/30 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-bright-cyan to-teal flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-near-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Thanks for reaching out!
                    </h3>
                    <p className="text-gray-300 mb-6">
                      We&apos;ll review your message and get back to you within 1-2 business days.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="text-bright-cyan hover:text-light-mint transition-colors font-medium"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {status === "error" && (
                      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-sm">
                        {errorMessage}
                      </div>
                    )}

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        className="w-full px-4 py-4 bg-near-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-bright-cyan focus:ring-1 focus:ring-bright-cyan outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        className="w-full px-4 py-4 bg-near-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-bright-cyan focus:ring-1 focus:ring-bright-cyan outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="you@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        className="w-full px-4 py-4 bg-near-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-bright-cyan focus:ring-1 focus:ring-bright-cyan outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        className="w-full px-4 py-4 bg-near-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-bright-cyan focus:ring-1 focus:ring-bright-cyan outline-none transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Tell us about your project or challenges..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === "loading" ? (
                        <>
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-8">
                  Other Ways to Connect
                </h2>
              </div>

              {/* Schedule Call */}
              <div className="glass rounded-2xl p-6 border border-white/5 card-hover group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bright-cyan/20 to-teal/20 flex items-center justify-center text-bright-cyan group-hover:scale-110 transition-transform border border-bright-cyan/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-2 group-hover:text-bright-cyan transition-colors">
                      Schedule a Call
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Prefer to talk live? Book a free 30-minute consultation to discuss your project.
                    </p>
                    <Link href="/schedule" className="text-bright-cyan font-medium hover:text-light-mint transition-colors inline-flex items-center gap-2">
                      Book a time
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="glass rounded-2xl p-6 border border-white/5 card-hover group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bright-cyan/20 to-teal/20 flex items-center justify-center text-bright-cyan group-hover:scale-110 transition-transform border border-bright-cyan/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-2 group-hover:text-bright-cyan transition-colors">
                      Email Us
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      For general inquiries or detailed project discussions.
                    </p>
                    <a
                      href="mailto:info@sagemindai.io"
                      className="text-bright-cyan font-medium hover:text-light-mint transition-colors"
                    >
                      info@sagemindai.io
                    </a>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="glass rounded-2xl p-6 border border-white/5 card-hover group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bright-cyan/20 to-teal/20 flex items-center justify-center text-bright-cyan group-hover:scale-110 transition-transform border border-bright-cyan/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-4 group-hover:text-bright-cyan transition-colors">
                      Connect Online
                    </h3>
                    <div className="flex gap-3">
                      <a
                        href="https://github.com/JKHeadley"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-bright-cyan hover:bg-bright-cyan/10 transition-all"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                      <a
                        href="https://linkedin.com/company/sagemind-ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-bright-cyan hover:bg-bright-cyan/10 transition-all"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="glass rounded-2xl p-6 border border-bright-cyan/20 bg-gradient-to-br from-bright-cyan/5 to-teal/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bright-cyan to-teal flex items-center justify-center text-near-black">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Bay Area, California</h3>
                    <p className="text-gray-400 text-sm">Available for remote work worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
