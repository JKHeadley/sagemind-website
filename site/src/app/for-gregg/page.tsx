"use client";

import { motion } from "framer-motion";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Image from "next/image";
import { ReactNode } from "react";
import ForecastTool from "@/components/pitch/ForecastTool";

// Brand palette for light theme
const NAVY = "#02222e";
const TEAL = "#008276";
const DARK_TEAL = "#014f4f";

// ─────────────────────────────────────────────────────────────
//  Helpers
// ─────────────────────────────────────────────────────────────

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[#008276] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-[#02222e] mb-6 leading-tight">
      {children}
    </h2>
  );
}

function Card({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return (
    <div
      className={`rounded-2xl bg-white p-6 md:p-7 h-full shadow-sm transition-shadow hover:shadow-md ${
        accent ? "border-2 border-[#008276]/30" : "border border-slate-200"
      }`}
    >
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  Page
// ─────────────────────────────────────────────────────────────

export default function GreggPage() {
  return (
    <div className="bg-white text-[#02222e]">
      {/* HERO */}
      <section className="relative pt-28 pb-16 px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${NAVY} 1px, transparent 1px), linear-gradient(90deg, ${NAVY} 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[#008276]/8 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#08f1c7]/8 blur-3xl" />

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#008276]/10 border border-[#008276]/30 text-[#008276] text-sm font-medium">
              Prepared for Gregg Medgalia · April 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-[1.05] mt-6"
          >
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${TEAL} 0%, ${DARK_TEAL} 100%)`,
              }}
            >
              Sagemind AI
            </span>
            <br />
            <span className="text-[#02222e]">Business Plan</span>
          </motion.h1>
        </div>
      </section>

      {/* EXECUTIVE SUMMARY */}
      <section className="py-14 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <SectionLabel>Executive Summary</SectionLabel>
            <SectionTitle>Executive Summary</SectionTitle>
          </Reveal>

          <Reveal>
            <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-6">
              Sagemind AI LLC is a Nevada-based AI solutions company helping small and
              mid-sized businesses integrate AI into their operations. Founded in 2024 by
              Justin Headley (technical) and Adriana Headley (operations), Sagemind
              delivers custom AI agents, automated workflows, AI-powered websites, and
              bespoke applications built on top of clients' existing Google Workspace data
              — at a fraction of what enterprise consultancies charge, by using AI to
              build AI.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-slate-700 mb-3">
              Alongside consulting, Sagemind operates four additional lines:
            </p>
            <ul className="space-y-2 text-slate-700 mb-6">
              <li className="flex gap-3">
                <span className="text-[#008276] mt-1">›</span>
                <span>
                  <strong className="text-[#02222e]">AI-powered websites for small businesses</strong>{" "}
                  — a productized offering led by Adriana Headley, with 15 production-ready
                  sites already built and a target market of the estimated 8–10 million
                  U.S. small businesses without a web presence.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#008276] mt-1">›</span>
                <span>
                  <strong className="text-[#02222e]">Google Workspace custom applications</strong>{" "}
                  — dashboards, internal tools, and AI agents built on top of clients'
                  existing Sheets, Drive, Gmail, and Calendar data.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#008276] mt-1">›</span>
                <span>
                  <strong className="text-[#02222e]">Bot-Me</strong> (
                  <a
                    href="https://bot-me.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#008276] underline hover:text-[#014f4f]"
                  >
                    bot-me.ai
                  </a>
                  ), a Sagemind-owned multi-tenant SaaS platform for AI assistants.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#008276] mt-1">›</span>
                <span>
                  <strong className="text-[#02222e]">Dawn</strong> (
                  <a
                    href="https://dawn.bot-me.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#008276] underline hover:text-[#014f4f]"
                  >
                    dawn.bot-me.ai
                  </a>
                  ), a Sagemind-owned AI conversation product with 200+ users.
                </span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-slate-700 text-base md:text-lg leading-relaxed">
              The company generated{" "}
              <strong className="text-[#008276]">$46.9K in 2025</strong>, is tracking
              toward <strong className="text-[#008276]">~$100K in 2026</strong> based on
              Q1 results, and operates at{" "}
              <strong className="text-[#008276]">60% net margin</strong>. Sagemind is
              self-funding and profitable.
            </p>
          </Reveal>
        </div>
      </section>

      {/* THE PROBLEM WE SOLVE */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <SectionLabel>The Problem We Solve</SectionLabel>
            <SectionTitle>The Problem We Solve</SectionTitle>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                h: "SMBs are underserved in the AI transition.",
                p: "Enterprise consultancies (McKinsey, Accenture, Deloitte) charge $300–500/hr, pricing out companies in the $1M–$50M revenue range.",
              },
              {
                h: "Off-the-shelf AI tools are too generic.",
                p: "ChatGPT and Copilot help individual users but don't solve business-specific workflow problems.",
              },
              {
                h: "SMB owners know they need AI but don't know where to start.",
                p: "They hear about it everywhere, see competitors adopting it, and feel increasingly behind.",
              },
              {
                h: "The legacy SaaS model is being disrupted.",
                p: "Companies are overpaying for rigid software that's expensive to customize and maintain.",
              },
            ].map((item, i) => (
              <Reveal key={item.h} delay={i * 0.06}>
                <Card>
                  <h3 className="text-lg font-bold mb-2 text-[#008276] leading-snug">
                    {item.h}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">{item.p}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SOLUTION */}
      <section className="py-14 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <SectionLabel>Our Solution</SectionLabel>
            <SectionTitle>Our Solution</SectionTitle>
            <p className="text-slate-700 mb-8">
              Sagemind offers five interconnected lines of work:
            </p>
          </Reveal>

          <div className="space-y-4 mb-12">
            {[
              {
                n: 1,
                title: "AI Integration Consulting",
                body: "Custom AI agents and automations tailored to each business's specific workflows. We don't sell a product; we solve the actual problem. Current clients: B2Lead, GCI, PBX Software, CUSAC.",
              },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 0.04}>
                <Card>
                  <div className="flex items-start gap-4 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-[#008276]/10 border border-[#008276]/30 flex items-center justify-center text-[#008276] font-bold flex-shrink-0">
                      {s.n}
                    </div>
                    <h3 className="text-xl font-bold pt-1 text-[#02222e]">{s.title}</h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed md:pl-14">{s.body}</p>
                </Card>
              </Reveal>
            ))}

            {/* #2 — Websites with visual stat strip */}
            <Reveal delay={0.08}>
              <Card>
                <div className="flex items-start gap-4 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-[#008276]/10 border border-[#008276]/30 flex items-center justify-center text-[#008276] font-bold flex-shrink-0">
                    2
                  </div>
                  <h3 className="text-xl font-bold pt-1 text-[#02222e]">
                    AI-Powered Websites for Small Businesses
                  </h3>
                </div>
                <p className="text-slate-700 leading-relaxed md:pl-14 mb-5">
                  Custom-coded websites with AI features built in (chat assistant, lead
                  qualifier, auto-captioning galleries), sold at three fixed one-time
                  tiers. No monthly fees, no subscriptions — clients own 100% of the code,
                  with free hosting set up in their name. Built specifically for the 27%
                  of U.S. small businesses (roughly 8–10 million) that still have no
                  website. We pre-build a custom, mobile-responsive site for a target
                  business — complete with an AI chatbot, local SEO, and click-to-call —
                  then introduce it to the owner already live.
                </p>
                <div className="md:pl-14 grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-[#e6f7f4] to-white border border-[#008276]/20 p-4 text-center">
                    <div className="text-3xl font-bold text-[#008276]">15</div>
                    <div className="text-xs text-slate-600 mt-1 leading-tight">
                      Pre-built sites<br />ready for outreach
                    </div>
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-[#e6f7f4] to-white border border-[#008276]/20 p-4 text-center">
                    <div className="text-3xl font-bold text-[#008276]">2</div>
                    <div className="text-xs text-slate-600 mt-1 leading-tight">
                      In active<br />production
                    </div>
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-[#e6f7f4] to-white border border-[#008276]/20 p-4 text-center">
                    <div className="text-3xl font-bold text-[#008276]">5</div>
                    <div className="text-xs text-slate-600 mt-1 leading-tight">
                      Live portfolio<br />builds (incl. ours)
                    </div>
                  </div>
                </div>
                <p className="md:pl-14 text-sm text-slate-600 mt-4 italic">
                  Built across auto repair, restaurants, bakeries, barber shops, and local
                  trades in the Bay Area.
                </p>
              </Card>
            </Reveal>

            {/* #3 — Workspace with integration pills */}
            <Reveal delay={0.1}>
              <Card>
                <div className="flex items-start gap-4 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-[#008276]/10 border border-[#008276]/30 flex items-center justify-center text-[#008276] font-bold flex-shrink-0">
                    3
                  </div>
                  <h3 className="text-xl font-bold pt-1 text-[#02222e]">
                    Google Workspace Custom Applications
                  </h3>
                </div>
                <p className="text-slate-700 leading-relaxed md:pl-14 mb-5">
                  For the majority of SMBs that already run on Google Workspace, Sagemind
                  builds custom dashboards, internal tools, reporting systems, and AI
                  agents that read and act on their existing Sheets, Drive, Gmail, and
                  Calendar data. Clients get purpose-built software on top of the stack
                  they already use — no platform migration, no data movement. Delivered
                  under the same consulting engagement structure.
                </p>
                <div className="md:pl-14 flex flex-wrap gap-2">
                  {[
                    { label: "Sheets", color: "#0F9D58" },
                    { label: "Drive", color: "#FFC107" },
                    { label: "Gmail", color: "#EA4335" },
                    { label: "Calendar", color: "#4285F4" },
                  ].map((app) => (
                    <span
                      key={app.label}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-sm text-slate-700"
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: app.color }}
                      />
                      {app.label}
                    </span>
                  ))}
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.12}>
              <Card>
                <div className="flex items-start gap-4 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-[#008276]/10 border border-[#008276]/30 flex items-center justify-center text-[#008276] font-bold flex-shrink-0">
                    4
                  </div>
                  <h3 className="text-xl font-bold pt-1 text-[#02222e]">Bot-Me Platform</h3>
                </div>
                <p className="text-slate-700 leading-relaxed md:pl-14">
                  A Sagemind-owned multi-tenant SaaS platform where AI assistants can be
                  built and deployed for specific audiences (currently serving YouTube
                  influencer communities, with room to expand).{" "}
                  <a
                    href="https://bot-me.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#008276] underline hover:text-[#014f4f] font-medium"
                  >
                    Visit bot-me.ai →
                  </a>
                </p>
              </Card>
            </Reveal>

            <Reveal delay={0.16}>
              <Card>
                <div className="flex items-start gap-4 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-[#008276]/10 border border-[#008276]/30 flex items-center justify-center text-[#008276] font-bold flex-shrink-0">
                    5
                  </div>
                  <h3 className="text-xl font-bold pt-1 text-[#02222e]">Dawn</h3>
                </div>
                <p className="text-slate-700 leading-relaxed md:pl-14">
                  A Sagemind-owned AI conversation product with persistent memory, running
                  on Bot-Me. Live, 200+ users.{" "}
                  <a
                    href="https://dawn.bot-me.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#008276] underline hover:text-[#014f4f] font-medium"
                  >
                    Visit dawn.bot-me.ai →
                  </a>
                </p>
              </Card>
            </Reveal>
          </div>

          <Reveal>
            <h3 className="text-xl md:text-2xl font-bold mb-5 text-[#02222e]">
              What makes our approach different:
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  ),
                  text: "We use AI to build AI — our delivery is AI-native, making us materially faster and cheaper than traditional consultancies.",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="17 1 21 5 17 9" />
                      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                      <polyline points="7 23 3 19 7 15" />
                      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                    </svg>
                  ),
                  text: "Our small-business website offering inverts the normal sales cycle: the site is already built when we reach out, triggering ownership psychology and compressing the path to close.",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  ),
                  text: "We charge for outcomes (milestones or productized pricing), not hours — clients get predictable pricing.",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 4 23 10 17 10" />
                      <polyline points="1 20 1 14 7 14" />
                      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                    </svg>
                  ),
                  text: "Solutions are reusable across verticals — what we build for one construction firm or one local restaurant adapts to the next.",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  ),
                  text: "We build on the tools clients already use — for Google Workspace users, that means custom dashboards and applications against their existing Sheets/Drive/Gmail/Calendar data, with no platform migration required.",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ),
                  text: "We own the platform (Bot-Me), not just the services.",
                },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="bg-white rounded-xl border border-slate-200 p-5 h-full hover:shadow-md hover:border-[#008276]/30 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-[#008276]/10 border border-[#008276]/20 flex items-center justify-center text-[#008276] mb-3">
                      <div className="w-5 h-5">{item.icon}</div>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRICING TIERS (new visual section) */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <SectionLabel>Website Pricing Structure</SectionLabel>
            <SectionTitle>Three fixed one-time tiers. No subscriptions.</SectionTitle>
            <p className="text-slate-700 mb-8 max-w-3xl">
              Every tier is one-time pricing. Clients own 100% of the code and receive a
              complete handoff. Free hosting is set up in the client's name. Post-launch
              changes bill at $125/hr.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: "Starter",
                price: "$1,499+",
                features: [
                  "AI Chat Assistant trained on the business",
                  "AI-drafted copy, client refines",
                  "Custom Next.js, sub-1s loads",
                  "Long-scroll landing page",
                  "Responsive (phone / tablet / desktop)",
                  "On-page SEO + contact form",
                  "Domain + free hosting + SSL",
                  "Complete code handoff",
                ],
              },
              {
                name: "Professional",
                highlight: true,
                price: "$2,999+",
                features: [
                  "Everything in Starter",
                  "AI Lead Qualifier",
                  "Multi-page architecture (up to 5 pages)",
                  "Custom branded design",
                  "Enhanced SEO + LocalBusiness schema",
                  "Service area / location features",
                  "Lead-capture form with routing",
                ],
              },
              {
                name: "Premium",
                price: "$5,999+",
                features: [
                  "Everything in Professional",
                  "Custom AI Agent built for the business",
                  "Any ONE add-on included",
                  "Advanced SEO (rich snippets, schema)",
                  "Google Business Profile sync",
                  "Analytics dashboard setup",
                  "Priority 5–7 day build",
                ],
              },
            ].map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div
                  className={`rounded-2xl p-6 h-full relative transition-all ${
                    t.highlight
                      ? "bg-gradient-to-br from-[#e6f7f4] to-white border-2 border-[#008276] shadow-md"
                      : "bg-white border border-slate-200 shadow-sm hover:shadow-md"
                  }`}
                >
                  {t.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#008276] text-white text-xs font-bold uppercase tracking-wide">
                      Most common
                    </div>
                  )}
                  <div className="text-sm text-slate-500 mb-1">One-time</div>
                  <div className="text-2xl font-bold mb-1 text-[#02222e]">{t.name}</div>
                  <div className="text-4xl font-bold text-[#008276] mb-5">{t.price}</div>
                  <ul className="space-y-2">
                    {t.features.map((f) => (
                      <li key={f} className="text-slate-700 text-sm flex gap-2">
                        <span className="text-[#008276] mt-0.5 flex-shrink-0">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <p className="text-slate-500 text-sm italic mt-6">
              Optional add-ons (galleries, bilingual translation, CMS, booking,
              e-commerce, additional AI agents) extend any tier without changing the
              underlying price.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PORTFOLIO SHOWCASE */}
      <section className="py-14 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <SectionLabel>Portfolio</SectionLabel>
            <SectionTitle>Live portfolio builds</SectionTitle>
            <p className="text-slate-700 mb-8 max-w-3xl">
              Five live sites, four delivered free to clients in exchange for case
              studies, reviews, and referrals.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                name: "Sagemindai.io",
                desc: "Our own company site",
                url: "https://sagemindai.io",
              },
              {
                name: "Dental City",
                desc: "Costa Rica dental practice",
                url: "https://dentalcitycr.com",
              },
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <Card>
                  <div className="aspect-[16/10] rounded-lg bg-gradient-to-br from-[#e6f7f4] to-[#f8fafc] border border-slate-200 mb-4 overflow-hidden">
                    <img
                      src={`https://api.microlink.io/?url=${encodeURIComponent(p.url)}&screenshot=true&meta=false&embed=screenshot.url`}
                      alt={`${p.name} preview`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#02222e] mb-1">{p.name}</h3>
                  <p className="text-sm text-slate-600 mb-3">{p.desc}</p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#008276] font-medium text-sm hover:text-[#014f4f]"
                  >
                    View live site →
                  </a>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="text-slate-500 text-sm italic mt-6">
              Additional portfolio builds (Cordoza Electric + 2 more) are near completion
              and will go live shortly.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MARKET — redesigned funnel */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <SectionLabel>Market</SectionLabel>
            <SectionTitle>Market</SectionTitle>
            <p className="text-slate-700 mb-8">
              <strong className="text-[#02222e]">Target:</strong> Small and mid-sized
              businesses ($1M–$50M revenue) in the U.S. that need AI integration but can't
              afford enterprise consultancies.
            </p>
          </Reveal>

          <div className="space-y-3 mb-8">
            {[
              {
                label: "TAM",
                subtitle: "Total Addressable Market",
                size: "$60B – $300B",
                basis: "~6M U.S. SMBs × $10K–$50K AI integration spend",
                widthPct: 100,
                color: "#14b8a6",
              },
              {
                label: "SAM",
                subtitle: "Serviceable Addressable Market",
                size: "$5B – $25B",
                basis: "~500K SMBs in tech-forward verticals",
                widthPct: 70,
                color: "#0d9488",
              },
              {
                label: "SOM",
                subtitle: "Serviceable Obtainable (Years 1–3)",
                size: "$500K – $4M",
                basis: "50–200 clients in construction, healthcare, and Vistage network",
                widthPct: 35,
                color: "#008276",
              },
            ].map((seg, i) => (
              <Reveal key={seg.label} delay={i * 0.1}>
                <div className="flex items-center gap-4">
                  <div className="w-20 md:w-28 flex-shrink-0">
                    <div className="text-xl font-bold text-[#02222e]">{seg.label}</div>
                    <div className="text-xs text-slate-500 leading-tight">
                      {seg.subtitle}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div
                      className="rounded-r-xl px-5 py-4 text-white transition-all"
                      style={{
                        width: `${seg.widthPct}%`,
                        background: `linear-gradient(90deg, ${seg.color}, ${seg.color}cc)`,
                      }}
                    >
                      <div className="flex flex-wrap items-baseline gap-3">
                        <span className="text-xl md:text-2xl font-bold">{seg.size}</span>
                        <span className="text-sm text-white/90">{seg.basis}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <p className="text-slate-700">
              Our initial focus is on construction, healthcare, and professional services —
              sectors where we have proof points and warm network access.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TRACTION */}
      <section className="py-14 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <SectionLabel>Traction</SectionLabel>
            <SectionTitle>Traction</SectionTitle>
          </Reveal>

          <Reveal>
            <Card>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left p-2"></th>
                        <th className="text-right p-2 font-semibold text-slate-700">2025</th>
                        <th className="text-right p-2 font-semibold text-slate-700">Q1 2026</th>
                        <th className="text-right p-2 font-semibold text-slate-700">Annualized</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="p-2 font-medium text-[#02222e]">Revenue</td>
                        <td className="p-2 text-right text-[#008276] font-bold">$46.9K</td>
                        <td className="p-2 text-right text-[#008276] font-bold">$25.1K</td>
                        <td className="p-2 text-right text-[#008276] font-bold">~$100K</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="p-2 font-medium text-[#02222e]">Net Income</td>
                        <td className="p-2 text-right text-slate-700">$26.5K</td>
                        <td className="p-2 text-right text-slate-700">$11.2K</td>
                        <td className="p-2 text-right text-slate-700">~$45K</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium text-[#02222e]">Net Margin</td>
                        <td className="p-2 text-right text-slate-700">60%</td>
                        <td className="p-2 text-right text-slate-700">45%</td>
                        <td className="p-2 text-right text-slate-700">—</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { label: "2025", revenue: 46.9, net: 26.5 },
                        { label: "Q1 2026", revenue: 25.1, net: 11.2 },
                        { label: "Annualized", revenue: 100, net: 45 },
                      ]}
                      margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
                    >
                      <CartesianGrid stroke="#e2e8f0" vertical={false} />
                      <XAxis
                        dataKey="label"
                        tick={{ fill: "#475569", fontSize: 12 }}
                        axisLine={{ stroke: "#cbd5e1" }}
                      />
                      <YAxis
                        tick={{ fill: "#475569", fontSize: 12 }}
                        axisLine={{ stroke: "#cbd5e1" }}
                        tickLine={false}
                      />
                      <Tooltip
                        contentStyle={{
                          background: "#ffffff",
                          border: "1px solid #008276",
                          borderRadius: 8,
                        }}
                      />
                      <Bar dataKey="revenue" fill="#008276" radius={[6, 6, 0, 0]} name="Revenue ($K)" />
                      <Bar dataKey="net" fill="#44b6a2" radius={[6, 6, 0, 0]} name="Net ($K)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="space-y-2 text-slate-700 mt-8">
              {[
                <><strong>2x YoY growth</strong> — Q1 2026 revenue is already 53% of all of 2025.</>,
                <><strong>4 paying consulting clients:</strong> B2Lead (largest), GCI, PBX Software, CUSAC.</>,
                <><strong>1 qualified consulting prospect:</strong> Dempsey Construction — $15K proposal out.</>,
                <><strong>4 live portfolio website builds:</strong> Dental City, Cordoza Electric, plus 2 additional small-business sites — delivered free in exchange for case studies, client reviews, and referrals. Sagemind's own site (sagemindai.io) is also live.</>,
                <><strong>15 pre-built small-business websites</strong> ready for personalized outreach to targeted Bay Area owners, with 2 additional sites in active production.</>,
                <><strong>Owned products:</strong> Bot-Me platform live with paying subscribers. Dawn generating early subscription revenue from 200+ users.</>,
                <><strong>Organic signal:</strong> Construction-sector referrals coming through the Vistage network via Tommy Southam (GCI VP).</>,
              ].map((line, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#008276] mt-1">›</span>
                  <span className="leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FORECAST TOOL */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <SectionLabel>Interactive Forecast</SectionLabel>
            <SectionTitle>Baseline + growth, projected forward.</SectionTitle>
            <p className="text-slate-700 mb-8 max-w-3xl">
              Our current Q1 2026 run-rate is the baseline — what existing clients already
              produce. Adjust the growth sliders to layer new client acquisition on top
              and see how the 12-month trajectory shifts.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ForecastTool />
          </Reveal>
        </div>
      </section>

      {/* BUSINESS MODEL */}
      <section className="py-14 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <SectionLabel>Business Model</SectionLabel>
            <SectionTitle>Business Model</SectionTitle>
          </Reveal>

          <Reveal>
            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="text-left p-4 font-semibold text-[#02222e]">Revenue Stream</th>
                    <th className="text-left p-4 font-semibold text-[#02222e]">Model</th>
                    <th className="text-left p-4 font-semibold text-[#02222e]">Ownership</th>
                    <th className="text-left p-4 font-semibold text-[#02222e]">Status</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-slate-100">
                    <td className="p-4 font-medium text-[#02222e]">AI Consulting</td>
                    <td className="p-4">Milestone projects ($5K–$25K) + hourly retainers ($150/hr)</td>
                    <td className="p-4">100% Sagemind</td>
                    <td className="p-4 text-[#008276] font-medium">Active, growing</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-4 font-medium text-[#02222e]">Small-Business Websites</td>
                    <td className="p-4">One-time tiered pricing: $1,499+ / $2,999+ / $5,999+</td>
                    <td className="p-4">100% Sagemind</td>
                    <td className="p-4">15 pre-built, 2 in progress, 4 portfolio live</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-4 font-medium text-[#02222e]">Bot-Me Platform</td>
                    <td className="p-4">Subscriptions + profit-share arrangements</td>
                    <td className="p-4">100% Sagemind</td>
                    <td className="p-4 text-[#008276] font-medium">Active</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-[#02222e]">Dawn</td>
                    <td className="p-4">Subscriptions</td>
                    <td className="p-4">100% Sagemind</td>
                    <td className="p-4">Early stage</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal>
            <h3 className="text-xl font-bold mb-3 text-[#02222e]">Unit economics today:</h3>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li className="flex gap-3">
                <span className="text-[#008276] mt-1">›</span>
                <span>Gross margin on consulting: ~99% (founder-delivered, no COGS).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#008276] mt-1">›</span>
                <span>Net margin: 60% (2025) / 45% (Q1 2026 — lower reflects healthy scaling investment in AI tooling).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#008276] mt-1">›</span>
                <span>Average consulting engagement: $8K–$23K upfront + $1K–$3K/month retainer potential.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#008276] mt-1">›</span>
                <span>
                  Website economics: fixed one-time tier pricing ($1,499–$5,999+ per build)
                  against mostly-labor delivery cost; reusable AI components and Next.js
                  framework are built once and amortized across every client, so effective
                  margin per build improves as volume grows.
                </span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="text-xl font-bold mb-3 text-[#02222e]">Pricing evolution:</h3>
            <p className="text-slate-700 leading-relaxed">
              We are transitioning consulting from hourly ($150/hr) to milestone-based
              pricing. Hourly caps revenue at (hours × rate); milestones decouple revenue
              from hours, align with client outcomes, and let margins grow as we get
              faster. The small-business website offering is already productized with fixed
              tier pricing — predictable revenue per build, reusable AI components that
              amortize engineering cost across clients, and a clean code-handoff model that
              keeps the client relationship uncomplicated after delivery.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FINANCIAL SNAPSHOT */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <SectionLabel>Financial Snapshot</SectionLabel>
            <SectionTitle>Financial Snapshot</SectionTitle>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5 mb-6">
            <Reveal>
              <Card>
                <div className="text-xs text-[#008276] uppercase tracking-widest mb-3 font-semibold">
                  2025 Full Year (Actuals)
                </div>
                <ul className="space-y-2">
                  {[
                    ["Revenue", "$43.8K (Service Income)"],
                    ["Operating expenses", "$17.2K"],
                    ["Net income", "$26.5K"],
                    ["Net margin", "60.5%"],
                  ].map(([k, v], i, arr) => (
                    <li
                      key={k}
                      className={`flex justify-between ${
                        i < arr.length - 1 ? "border-b border-slate-100 pb-2" : ""
                      }`}
                    >
                      <span className="text-slate-600">{k}</span>
                      <span className="font-bold text-[#02222e]">{v}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>

            <Reveal delay={0.08}>
              <Card>
                <div className="text-xs text-[#008276] uppercase tracking-widest mb-3 font-semibold">
                  Q1 2026 (Actuals, Novo Bank)
                </div>
                <ul className="space-y-2">
                  {[
                    ["Revenue", "$25.1K"],
                    ["Operating expenses", "$13.8K"],
                    ["Net income", "$11.2K"],
                    ["Cash on hand (Mar 31)", "$12,996"],
                  ].map(([k, v], i, arr) => (
                    <li
                      key={k}
                      className={`flex justify-between ${
                        i < arr.length - 1 ? "border-b border-slate-100 pb-2" : ""
                      }`}
                    >
                      <span className="text-slate-600">{k}</span>
                      <span className="font-bold text-[#02222e]">{v}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>

          <Reveal>
            <h3 className="text-lg font-bold mb-3 text-[#02222e]">
              Top expense categories (Q1 2026):
            </h3>
            <ul className="space-y-2 text-slate-700 mb-4">
              <li className="flex gap-3">
                <span className="text-[#008276] mt-1">›</span>
                <span>AI tools and APIs: $4.9K (35%) — our largest variable cost, directly tied to delivery capacity</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#008276] mt-1">›</span>
                <span>Owner draws: $5.0K (36%)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#008276] mt-1">›</span>
                <span>Legal, infrastructure, dev tools, marketing, debt service: balance</span>
              </li>
            </ul>
            <p className="text-slate-700">
              Business is profitable and cash-generating. Largest cost (AI/API access) scales with revenue.
            </p>
          </Reveal>
        </div>
      </section>

      {/* COMPETITIVE LANDSCAPE */}
      <section className="py-14 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <SectionLabel>Competitive Landscape</SectionLabel>
            <SectionTitle>Competitive Landscape</SectionTitle>
          </Reveal>

          <Reveal>
            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="text-left p-4 font-semibold text-[#02222e]">Competitor Type</th>
                    <th className="text-left p-4 font-semibold text-[#02222e]">Examples</th>
                    <th className="text-left p-4 font-semibold text-[#02222e]">Their Weakness</th>
                    <th className="text-left p-4 font-semibold text-[#02222e]">Our Advantage</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-slate-100">
                    <td className="p-4 font-medium text-[#02222e]">Enterprise consultancies</td>
                    <td className="p-4">McKinsey, Accenture, Deloitte</td>
                    <td className="p-4">$300–500/hr, enterprise-only</td>
                    <td className="p-4 text-[#008276] font-medium">3–5x cheaper, SMB-native</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-4 font-medium text-[#02222e]">Freelance AI developers</td>
                    <td className="p-4">Upwork, Toptal</td>
                    <td className="p-4">No methodology, inconsistent quality</td>
                    <td className="p-4 text-[#008276] font-medium">Proven process, reusable frameworks</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-4 font-medium text-[#02222e]">Generic AI SaaS tools</td>
                    <td className="p-4">Jasper, Copy.ai, stock chatbots</td>
                    <td className="p-4">One-size-fits-all</td>
                    <td className="p-4 text-[#008276] font-medium">Custom-built for each client's workflow</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-[#02222e]">DIY (ChatGPT, Copilot)</td>
                    <td className="p-4">End users</td>
                    <td className="p-4">No integration, just chat</td>
                    <td className="p-4 text-[#008276] font-medium">We build it into their actual systems</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <SectionLabel>Team</SectionLabel>
            <SectionTitle>Team</SectionTitle>
          </Reveal>

          <div className="space-y-4 mb-6">
            <Reveal>
              <Card accent>
                <h3 className="text-xl font-bold mb-1 text-[#02222e]">Justin Headley</h3>
                <div className="text-[#008276] text-sm mb-3 font-medium">
                  Founder, CEO & Technical Lead
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Full-stack developer and AI engineer. Built the Bot-Me platform, Dawn,
                  and the instar agent infrastructure from the ground up. Currently also
                  employed at the Monroe Institute; transitions to full-time Sagemind when
                  revenue supports a $150K/year minimum salary. Line of sight: 12–18
                  months.
                </p>
              </Card>
            </Reveal>

            <Reveal delay={0.08}>
              <Card accent>
                <h3 className="text-xl font-bold mb-1 text-[#02222e]">Adriana Headley</h3>
                <div className="text-[#008276] text-sm mb-3 font-medium">COO</div>
                <p className="text-slate-700 leading-relaxed">
                  Runs Sagemind business operations — finance, client relationships,
                  compliance — and leads the small-business website offering and Google
                  Workspace custom application practice. Currently also employed full-time
                  at B2Lead (Sagemind's largest consulting client), a dual role giving her
                  unique operator insight into client delivery. Time at Sagemind rebalances
                  gradually in step with the company's growth, with her B2Lead relationship
                  continuing long-term.
                </p>
              </Card>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <p className="text-slate-500 italic text-sm">
              Near-term hiring priority: dedicated sales/business development, at ~$15K in
              combined monthly revenue (retainer MRR + rolling website builds + platform
              subs).
            </p>
          </Reveal>
        </div>
      </section>

      {/* GO-TO-MARKET */}
      <section className="py-14 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <SectionLabel>Go-to-Market</SectionLabel>
            <SectionTitle>Go-to-Market</SectionTitle>
            <p className="text-slate-700 mb-8">
              Sagemind runs two parallel go-to-market motions, each matched to a different
              segment:
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5 mb-6">
            <Reveal>
              <Card>
                <h3 className="text-lg font-bold mb-4 text-[#02222e]">
                  Consulting (mid-market, Vistage-adjacent):
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li>
                    <strong className="text-[#008276]">Current:</strong> 100%
                    referral-driven. Every paying consulting client came through
                    word-of-mouth or Vistage-network introduction.
                  </li>
                  <li>
                    <strong className="text-[#008276]">Near-term:</strong> Vistage
                    network expansion, published case studies (Dental City, Cordoza),
                    LinkedIn content cadence, "AI readiness assessment" as a lead magnet.
                  </li>
                  <li>
                    <strong className="text-[#008276]">Medium-term:</strong> Industry
                    events, partnerships with IT service providers, vertical-specific
                    marketing (construction first, healthcare second).
                  </li>
                </ul>
              </Card>
            </Reveal>

            <Reveal delay={0.08}>
              <Card>
                <h3 className="text-lg font-bold mb-4 text-[#02222e]">
                  Small-Business Websites (local SMB):
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li>
                    <strong className="text-[#008276]">Current:</strong> 15 sites built to
                    date, all production-ready for personalized outreach to their intended
                    owners, plus 2 additional sites in active production. The site is
                    already built when we make contact — a fundamentally stronger cold
                    pitch than "we'd like to build you a website." Four free portfolio
                    builds provide live proof points, client testimonials, and referral
                    momentum.
                  </li>
                  <li>
                    <strong className="text-[#008276]">Near-term:</strong> Direct outreach
                    cadence (email + phone follow-up) to the 15 target owners, then expand
                    the target list and repeat. Conversion benchmark: 20–30% close rate on
                    spec-site pitches vs. 1–5% on traditional cold outreach.
                  </li>
                  <li>
                    <strong className="text-[#008276]">Medium-term:</strong> Referrals
                    from happy small-business clients (each closes the loop on the next
                    2–3 via neighborhood adjacency), plus expansion into additional metro
                    areas using the same architecture.
                  </li>
                </ul>
              </Card>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <p className="text-slate-700">
              <strong className="text-[#02222e]">Long-term:</strong> Self-serve Bot-Me
              tier for smaller clients, turning the owned platform into a third revenue
              engine alongside consulting and productized websites.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 12-MONTH OPERATING PLAN */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <SectionLabel>12-Month Operating Plan</SectionLabel>
            <SectionTitle>12-Month Operating Plan</SectionTitle>
            <p className="text-slate-700 mb-8">
              Client acquisition begins immediately. Legal and operational cleanup run in
              parallel, not as a prerequisite.
            </p>
          </Reveal>

          <div className="space-y-3">
            {[
              {
                period: "Month 1–3",
                primary: "Client scale-up, both lines. Consulting: close Dempsey, convert Vistage warm leads, pitch 2–3 additional mid-market prospects. Websites: execute outreach on the 15 pre-built sites, close first 3–5 paying clients, complete the 2 sites in progress, expand target list.",
                parallel: "Sign LSB/AI Guy agreement, complete IP assignment to Sagemind LLC, trademark filings initiated.",
              },
              {
                period: "Month 3–6",
                primary: "Reach 8–10 paying consulting clients + close 10–15 website builds. Target ~$15K in combined monthly revenue — retainer MRR (consulting + platform subs) plus rolling one-time website revenue.",
                parallel: "Legal cleanup complete. Operating Agreement updated.",
              },
              {
                period: "Month 6–9",
                primary: "First sales/BD addition (contractor or FTE) to sustain outbound pace.",
                parallel: "Case studies published (Dental City, Cordoza, early website wins).",
              },
              {
                period: "Month 9–12",
                primary: "Productize consulting recurring offering. Grow combined monthly revenue to $20K+ (retainer MRR + sustained website build pipeline + platform subs).",
                parallel: "Decision point: Justin transitions to full-time Sagemind if revenue supports.",
              },
            ].map((t, i) => (
              <Reveal key={t.period} delay={i * 0.06}>
                <div className="grid md:grid-cols-[140px_1fr] gap-4 items-start">
                  <div className="text-[#008276] font-bold flex items-center gap-2 pt-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#008276] flex-shrink-0" />
                    {t.period}
                  </div>
                  <Card>
                    <div className="text-xs uppercase tracking-widest text-[#008276] mb-1 font-semibold">
                      Primary Focus (Growth)
                    </div>
                    <p className="text-slate-700 mb-3 leading-relaxed">{t.primary}</p>
                    <div className="text-xs uppercase tracking-widest text-slate-400 mb-1 font-semibold">
                      Parallel Focus (Foundation)
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{t.parallel}</p>
                  </Card>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-14 px-6 bg-gradient-to-br from-[#e6f7f4] via-slate-50 to-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <SectionLabel>Vision</SectionLabel>
            <SectionTitle>Vision</SectionTitle>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { year: "Year 1", outcome: "10+ paying clients, $150K+ annual revenue, Justin full-time at Sagemind." },
              { year: "Year 2", outcome: "Team of 4–5, $500K+ revenue, productized recurring offering generating MRR." },
              { year: "Year 3", outcome: "Bot-Me platform producing meaningful recurring SaaS revenue alongside consulting." },
              { year: "Year 5", outcome: "The go-to AI integration company for SMBs in our chosen verticals, $3–5M revenue, genuine services-to-product business." },
            ].map((v, i) => (
              <Reveal key={v.year} delay={i * 0.08}>
                <Card>
                  <div className="text-[#008276] text-xs uppercase tracking-widest mb-2 font-semibold">
                    {v.year}
                  </div>
                  <p className="text-slate-700 leading-relaxed text-sm">{v.outcome}</p>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.25}>
            <p className="text-lg md:text-xl text-center text-[#02222e] italic mt-6 max-w-3xl mx-auto">
              We're building the AI department that every growing business needs but can't
              build themselves.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-14 px-6 border-t border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="flex justify-center mb-6">
              <Image
                src="/logo-dark.png"
                alt="Sagemind AI"
                width={56}
                height={56}
                className="opacity-90"
              />
            </div>
            <SectionLabel>Contact</SectionLabel>
            <div className="space-y-2 text-slate-700">
              <div>
                <strong className="text-[#02222e]">Justin Headley</strong> —{" "}
                <a href="mailto:justin@sagemindai.io" className="text-[#008276] hover:text-[#014f4f] underline">
                  justin@sagemindai.io
                </a>
              </div>
              <div>
                <strong className="text-[#02222e]">Adriana Headley</strong> —{" "}
                <a href="mailto:adriana@sagemindai.io" className="text-[#008276] hover:text-[#014f4f] underline">
                  adriana@sagemindai.io
                </a>
              </div>
              <div>
                <strong className="text-[#02222e]">Web:</strong>{" "}
                <a href="https://sagemindai.io" className="text-[#008276] hover:text-[#014f4f] underline">
                  sagemindai.io
                </a>
              </div>
            </div>

            <div className="mt-10 text-slate-400 text-sm italic">
              Sagemind AI LLC · Nevada · sagemindai.io
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
