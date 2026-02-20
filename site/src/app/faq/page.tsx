"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    category: "Pricing & Cost",
    questions: [
      {
        question: "How much does a custom website cost?",
        answer:
          "Small business websites typically start around $2,500 for a polished, custom-built site. More complex sites with advanced features, integrations, or e-commerce can range higher. We scope every project individually and give you a clear, fixed quote upfront — no surprises.",
      },
      {
        question: "How much do AI and custom software projects cost?",
        answer:
          "AI and data projects vary widely based on scope — from focused automation tools to full platforms. Because every project is different, we start with a free discovery call to understand your needs, then provide a detailed proposal with transparent pricing. No commitment until you're comfortable with the scope and cost.",
      },
      {
        question: "How do you structure engagements?",
        answer:
          "We offer three engagement models depending on what fits your project: fixed-price projects with a clear scope and deliverable, hourly consulting for advisory or ongoing development work, and monthly retainers for teams that need continuous support. Most clients start with a fixed-price project.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes. For larger projects, we typically split payments across milestones — a portion upfront, progress payments at key deliverables, and the balance at launch. We're flexible and happy to find a structure that works for your budget.",
      },
    ],
  },
  {
    category: "Timeline",
    questions: [
      {
        question: "How long does a typical project take?",
        answer:
          "Most projects are completed in days to weeks, not months. We move fast without cutting corners. The exact timeline depends on scope, but we'll give you a clear estimate upfront.",
      },
      {
        question: "When can we start?",
        answer:
          "Usually within a week of signing. We'll schedule a kickoff call to align on goals and get moving right away.",
      },
    ],
  },
  {
    category: "Process",
    questions: [
      {
        question: "What's your development process?",
        answer:
          "Discovery call → Proposal → Build → Review → Launch. You're involved at every step. We share progress regularly and gather your feedback at each milestone.",
      },
      {
        question: "Do you provide ongoing support?",
        answer:
          "Yes, we offer maintenance packages and are always available for updates, changes, or troubleshooting after launch.",
      },
      {
        question: "What if I need changes after launch?",
        answer:
          "We build with flexibility in mind. Changes and updates are always possible, and we're here to help as your needs evolve.",
      },
      {
        question: "Do I own the code/website?",
        answer:
          "Absolutely. You own everything we build for you: code, designs, content, all of it. It's yours.",
      },
    ],
  },
  {
    category: "AI & Technical",
    questions: [
      {
        question: "What kind of AI solutions can you build?",
        answer:
          "Custom chatbots, data analysis tools, automation systems, and AI-powered applications tailored to your specific business needs. We focus on practical AI that solves real problems.",
      },
      {
        question: "What technologies do you use?",
        answer:
          "We choose the best tools for each project: React, Next.js, Python, Node.js, various AI/ML frameworks, and Google Cloud services. We're technology-agnostic and pick what works best for your needs.",
      },
      {
        question: "Can you integrate AI into my existing systems?",
        answer:
          "We can certainly try and will do our best, but we can't guarantee every integration will work. We'll assess your current systems upfront and be honest about what's feasible before you commit.",
      },
    ],
  },
  {
    category: "Client Requirements",
    questions: [
      {
        question: "What do you need from me to get started?",
        answer:
          "Just your ideas and goals. We'll guide you through everything else: content, images, and technical decisions. We make the process easy.",
      },
      {
        question: "Do I need to provide all the content?",
        answer:
          "Not necessarily. We can help with copywriting and content strategy, or work with what you already have. Either way, we'll make sure your message comes through clearly.",
      },
      {
        question: "Do I need technical knowledge?",
        answer:
          "Not at all. We handle all the technical details and explain things in plain language. You focus on your business; we handle the tech.",
      },
    ],
  },
  {
    category: "Revisions & Feedback",
    questions: [
      {
        question: "How many revisions are included?",
        answer:
          "Each project includes 2-3 rounds of revisions at each milestone. We want you to be happy with the result, and most clients finalize within these rounds. If you need more changes, we're happy to accommodate at our hourly rate.",
      },
      {
        question: "How does the feedback process work?",
        answer:
          "We share progress regularly and gather your feedback at each milestone. You're never left in the dark, and your input shapes the final product.",
      },
    ],
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-white group-hover:text-bright-cyan transition-colors pr-4">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full bg-bright-cyan/10 flex items-center justify-center transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            className="w-5 h-5 text-bright-cyan"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-gray-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="bg-near-black">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-animated-gradient opacity-30" />
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-bright-cyan/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 rounded-full glass border border-bright-cyan/30 text-bright-cyan text-sm font-medium mb-6">
            Got Questions?
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Frequently Asked </span>
            <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about working with SageMind. Can&apos;t find
            what you&apos;re looking for?{" "}
            <Link href="/contact" className="text-bright-cyan hover:text-light-mint transition-colors">
              Get in touch
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((section) => (
            <div key={section.category} className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-bright-cyan" />
                {section.category}
              </h2>
              <div className="glass rounded-2xl px-6 border border-white/5">
                {section.questions.map((faq) => (
                  <FAQItem
                    key={faq.question}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-10 border border-bright-cyan/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              We&apos;re here to help. Reach out and we&apos;ll get back to you as soon as
              possible.
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
