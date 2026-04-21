"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function GatePage() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/for-gregg/api/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pin }),
    });

    setLoading(false);

    if (res.ok) {
      router.push("/for-gregg");
      router.refresh();
    } else {
      setError("Incorrect PIN. Try again.");
      setPin("");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-grid-pattern px-6">
      <div className="w-full max-w-md glass-dark rounded-2xl p-8 border border-bright-cyan/20">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold gradient-text mb-2">Sagemind AI</h1>
          <p className="text-white/60 text-sm">Private brief — enter access PIN</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="password"
            inputMode="numeric"
            autoComplete="off"
            autoFocus
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Access PIN"
            className="w-full bg-near-black/50 border border-white/10 focus:border-bright-cyan/60 rounded-xl px-4 py-3 text-white text-center tracking-widest text-lg outline-none transition-colors"
          />

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading || !pin}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Verifying…" : "Enter"}
          </button>
        </form>
      </div>
    </div>
  );
}
