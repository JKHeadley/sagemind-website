"use client";

import { useEffect, useState } from "react";

const steps = [
  { label: "Your Data", icon: "📊" },
  { label: "AI Processing", icon: "🧠" },
  { label: "Real Results", icon: "🚀" },
];

export default function ProcessAnimation() {
  const [activeStep, setActiveStep] = useState(0);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Generate flowing particles
    const particleInterval = setInterval(() => {
      setParticles((prev) => {
        const newParticle = {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100,
        };
        const filtered = prev.filter((p) => Date.now() - p.id < 3000);
        return [...filtered, newParticle].slice(-15);
      });
    }, 200);
    return () => clearInterval(particleInterval);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Main container */}
      <div className="relative aspect-square">
        {/* Background glow */}
        <div className="absolute inset-0 bg-bright-cyan/10 rounded-full blur-3xl scale-110" />

        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-2 border-bright-cyan/20" />
        <div className="absolute inset-4 rounded-full border border-bright-cyan/10" />
        <div className="absolute inset-8 rounded-full border border-teal/10" />

        {/* Rotating ring */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: "20s" }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-bright-cyan rounded-full glow-cyan" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-teal rounded-full" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-light-blue rounded-full" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-medium-teal rounded-full" />
        </div>

        {/* Flowing particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-bright-cyan rounded-full animate-ping"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDuration: "1.5s",
            }}
          />
        ))}

        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            {/* Animated step display */}
            <div className="relative h-32 flex items-center justify-center">
              {steps.map((step, index) => (
                <div
                  key={step.label}
                  className={`absolute transition-all duration-500 ${
                    activeStep === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-75"
                  }`}
                >
                  <div className="text-5xl mb-3">{step.icon}</div>
                  <div className="text-white font-semibold text-lg">{step.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step indicators */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeStep === index
                  ? "bg-bright-cyan w-6"
                  : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Timeline below */}
      <div className="mt-16 flex items-center justify-between px-4">
        {steps.map((step, index) => (
          <div key={step.label} className="flex items-center">
            <div
              className={`flex flex-col items-center transition-all duration-300 ${
                activeStep === index ? "scale-110" : "opacity-50"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-all duration-300 ${
                  activeStep === index
                    ? "bg-gradient-to-br from-bright-cyan to-teal glow-cyan"
                    : "bg-white/10"
                }`}
              >
                {step.icon}
              </div>
              <span className="text-xs text-gray-400 mt-2 whitespace-nowrap">{step.label}</span>
            </div>
            {index < steps.length - 1 && (
              <div className="w-12 sm:w-20 h-0.5 mx-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10" />
                <div
                  className={`absolute inset-y-0 left-0 bg-gradient-to-r from-bright-cyan to-teal transition-all duration-500 ${
                    activeStep > index ? "w-full" : "w-0"
                  }`}
                />
                {activeStep === index && (
                  <div className="absolute inset-y-0 w-4 bg-gradient-to-r from-transparent via-bright-cyan to-transparent animate-pulse"
                       style={{ left: "50%" }} />
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* "Weeks not months" badge */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-bright-cyan/30">
          <div className="w-2 h-2 bg-bright-cyan rounded-full animate-pulse" />
          <span className="text-bright-cyan text-sm font-medium">Delivered in weeks, not months</span>
        </div>
      </div>
    </div>
  );
}
