"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface TimeSlot {
  start: string;
  end: string;
  display: string;
}

type Status = "loading" | "selecting" | "confirming" | "submitting" | "success" | "error";

export default function SchedulePage() {
  const [slots, setSlots] = useState<Record<string, TimeSlot[]>>({});
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [status, setStatus] = useState<Status>("loading");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    notes: "",
  });

  // Fetch available slots on mount
  useEffect(() => {
    async function fetchSlots() {
      try {
        const response = await fetch("/api/schedule/slots");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to load slots");
        }

        setSlots(data.slots);
        const dates = Object.keys(data.slots);
        if (dates.length > 0) {
          setSelectedDate(dates[0]);
        }
        setStatus("selecting");
      } catch (error) {
        setStatus("error");
        setErrorMessage(
          error instanceof Error ? error.message : "Failed to load available times"
        );
      }
    }

    fetchSlots();
  }, []);

  const handleSlotSelect = (slot: TimeSlot) => {
    setSelectedSlot(slot);
    setStatus("confirming");
  };

  const handleBack = () => {
    setSelectedSlot(null);
    setStatus("selecting");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/schedule/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          slot: selectedSlot,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to book");
      }

      setStatus("success");
    } catch (error) {
      setStatus("confirming");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to book. Please try again."
      );
    }
  };

  const formatDateHeader = (dateStr: string) => {
    const date = new Date(dateStr + "T12:00:00");
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  const formatSelectedDateTime = () => {
    if (!selectedSlot || !selectedDate) return "";
    const date = new Date(selectedSlot.start);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }) + " at " + selectedSlot.display + " Pacific";
  };

  const dates = Object.keys(slots);

  return (
    <div className="bg-near-black min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-animated-gradient opacity-30" />
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-bright-cyan/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 rounded-full glass border border-bright-cyan/30 text-bright-cyan text-sm font-medium mb-8">
            Free Consultation
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Book a </span>
            <span className="gradient-text">30-Minute Call</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let&apos;s discuss your project, challenges, and how we can help. No obligations, just a conversation.
          </p>
        </div>
      </section>

      {/* Scheduler */}
      <section className="py-12 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-6 lg:p-10 border border-white/5">
            {/* Loading State */}
            {status === "loading" && (
              <div className="text-center py-16">
                <div className="w-12 h-12 border-2 border-bright-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-gray-400">Loading available times...</p>
              </div>
            )}

            {/* Error State */}
            {status === "error" && (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Unable to Load Schedule</h3>
                <p className="text-gray-400 mb-6">{errorMessage}</p>
                <Link href="/contact" className="btn-primary">
                  Contact Us Instead
                </Link>
              </div>
            )}

            {/* Success State */}
            {status === "success" && (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-bright-cyan to-teal flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-near-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">You&apos;re All Set!</h3>
                <p className="text-gray-300 mb-2">Your consultation has been booked for:</p>
                <p className="text-bright-cyan font-semibold text-lg mb-6">{formatSelectedDateTime()}</p>
                <p className="text-gray-400 mb-8">
                  Check your email for the calendar invite with meeting details.
                </p>
                <Link href="/" className="btn-secondary">
                  Back to Home
                </Link>
              </div>
            )}

            {/* Slot Selection */}
            {status === "selecting" && (
              <>
                <h2 className="text-xl font-bold text-white mb-6">Select a Date & Time</h2>

                {dates.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-400 mb-4">No available times in the next two weeks.</p>
                    <Link href="/contact" className="text-bright-cyan hover:text-light-mint transition-colors">
                      Contact us to arrange a time
                    </Link>
                  </div>
                ) : (
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Date Selection */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Date</h3>
                      <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                        {dates.map((date) => (
                          <button
                            key={date}
                            onClick={() => setSelectedDate(date)}
                            className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                              selectedDate === date
                                ? "bg-bright-cyan/20 border-bright-cyan/50 text-white"
                                : "bg-near-black/50 border-white/5 text-gray-300 hover:border-bright-cyan/30"
                            } border`}
                          >
                            <span className="font-medium">{formatDateHeader(date)}</span>
                            <span className="text-gray-500 text-sm ml-2">
                              ({slots[date].length} slots)
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Selection */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                        Time (Pacific)
                      </h3>
                      {selectedDate && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[400px] overflow-y-auto pr-2">
                          {slots[selectedDate].map((slot) => (
                            <button
                              key={slot.start}
                              onClick={() => handleSlotSelect(slot)}
                              className="px-4 py-3 rounded-xl bg-near-black/50 border border-white/5 text-gray-300 hover:border-bright-cyan/50 hover:text-white transition-all text-center"
                            >
                              {slot.display}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Confirmation Form */}
            {(status === "confirming" || status === "submitting") && selectedSlot && (
              <>
                <button
                  onClick={handleBack}
                  disabled={status === "submitting"}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 disabled:opacity-50"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to times
                </button>

                <div className="bg-gradient-to-br from-bright-cyan/10 to-teal/10 rounded-2xl p-6 border border-bright-cyan/20 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bright-cyan to-teal flex items-center justify-center text-near-black">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Selected Time</p>
                      <p className="text-white font-semibold">{formatSelectedDateTime()}</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white mb-6">Your Information</h2>

                {errorMessage && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-sm mb-6">
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        disabled={status === "submitting"}
                        className="w-full px-4 py-3 bg-near-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-bright-cyan focus:ring-1 focus:ring-bright-cyan outline-none transition-all disabled:opacity-50"
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
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        disabled={status === "submitting"}
                        className="w-full px-4 py-3 bg-near-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-bright-cyan focus:ring-1 focus:ring-bright-cyan outline-none transition-all disabled:opacity-50"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      disabled={status === "submitting"}
                      className="w-full px-4 py-3 bg-near-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-bright-cyan focus:ring-1 focus:ring-bright-cyan outline-none transition-all disabled:opacity-50"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-300 mb-2">
                      What would you like to discuss?
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      disabled={status === "submitting"}
                      className="w-full px-4 py-3 bg-near-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-bright-cyan focus:ring-1 focus:ring-bright-cyan outline-none transition-all resize-none disabled:opacity-50"
                      placeholder="Brief description of your project or questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === "submitting" ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Booking...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Confirm Booking
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Alternative contact */}
          {(status === "selecting" || status === "confirming") && (
            <p className="text-center text-gray-500 mt-8">
              Prefer email?{" "}
              <Link href="/contact" className="text-bright-cyan hover:text-light-mint transition-colors">
                Send us a message
              </Link>
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
