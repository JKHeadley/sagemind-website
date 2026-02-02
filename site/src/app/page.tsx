import Image from "next/image";
import Link from "next/link";
import ProcessAnimation from "@/components/ProcessAnimation";

const stats = [
  { value: "18+", label: "Years Building" },
  { value: "Fast", label: "Turnaround" },
  { value: "Direct", label: "Communication" },
  { value: "100%", label: "Custom Built" },
];

export default function Home() {
  return (
    <div className="bg-near-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-animated-gradient opacity-50" />
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0 radial-gradient-overlay" />

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-bright-cyan/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-float-delayed" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block px-4 py-2 rounded-full glass border border-bright-cyan/30 text-bright-cyan text-sm font-medium mb-8">
                Custom Solutions, Built Fast
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Your Vision,</span>
                <br />
                <span className="gradient-text text-glow">Custom Built</span>
              </h1>
              <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
                Every business is unique. We craft <span className="text-bright-cyan font-semibold">tailored solutions</span> that
                fit your specific needs, from custom websites to AI-powered applications. No templates. No one-size-fits-all.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact" className="btn-primary text-center">
                  Start Your Project
                </Link>
                <Link href="/services" className="btn-secondary text-center">
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <ProcessAnimation />
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-6 text-center card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-bright-cyan/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-bright-cyan rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Two Service Tracks */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-near-black via-dark-navy/50 to-near-black" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-bright-cyan/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full glass border border-bright-cyan/30 text-bright-cyan text-sm font-medium mb-6">
              Two Ways We Help
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Solutions </span>
              <span className="gradient-text">Tailored to You</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Whether you need a professional web presence or custom AI software, we build exactly what your business needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Service Track 1: Small Business */}
            <div className="glass rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-bright-cyan/30 transition-all card-hover group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-bright-cyan to-teal flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-near-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-bright-cyan transition-colors">
                Small Business Solutions
              </h3>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                Custom websites and Google Workspace solutions designed specifically for your business.
                We streamline your workflows and give you a professional digital presence that stands out.
              </p>
              <ul className="space-y-3 mb-8">
                {["Custom website design and development", "Google Workspace setup and optimization", "Workflow automation", "Ongoing support and maintenance"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-bright-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/services#small-business" className="inline-flex items-center gap-2 text-bright-cyan font-medium hover:text-light-mint transition-colors">
                Learn more
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Service Track 2: AI & Data */}
            <div className="glass rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-bright-cyan/30 transition-all card-hover group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-bright-cyan to-teal flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-near-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-bright-cyan transition-colors">
                AI & Data Solutions
              </h3>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                Tailored AI-driven software and data applications built for your unique challenges.
                We turn your specific needs into tailored solutions that unlock your business potential.
              </p>
              <ul className="space-y-3 mb-8">
                {["Custom AI application development", "Data analysis and visualization", "Intelligent automation", "Integration with existing systems"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-bright-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/services#ai-solutions" className="inline-flex items-center gap-2 text-bright-cyan font-medium hover:text-light-mint transition-colors">
                Learn more
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project - Bot-Me.ai */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 particles-bg opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full glass border border-bright-cyan/30 text-bright-cyan text-sm font-medium mb-6">
              Featured Project
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">See What We </span>
              <span className="gradient-text">Build</span>
            </h2>
          </div>

          <div className="glass rounded-3xl p-8 lg:p-12 border-gradient card-hover">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bright-cyan to-teal flex items-center justify-center">
                    <svg className="w-6 h-6 text-near-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white">Bot-Me.ai</h3>
                </div>
                <p className="text-2xl text-bright-cyan font-medium mb-4">
                  AI Assistants for YouTube Influencers
                </p>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  A custom AI platform built for content creators. Intelligent assistants that understand their brand,
                  engage with their audience, and help scale their influence while maintaining their unique voice.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {["AI Agents", "YouTube API", "NLP", "Brand Voice AI"].map((tag) => (
                    <span key={tag} className="px-4 py-2 rounded-full bg-bright-cyan/10 text-bright-cyan text-sm border border-bright-cyan/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://www.bot-me.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Visit Bot-Me.ai
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-bright-cyan/20 to-teal/20 rounded-2xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-dark-navy to-near-black rounded-2xl p-8 border border-bright-cyan/20">
                  <div className="aspect-video bg-near-black rounded-xl flex items-center justify-center border border-white/5">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-bright-cyan to-teal flex items-center justify-center animate-pulse-glow">
                        <svg className="w-10 h-10 text-near-black" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                        </svg>
                      </div>
                      <p className="text-gray-500 text-sm">Custom AI Platform</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SageMind */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-near-black via-dark-navy to-near-black" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bright-cyan/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                <span className="text-white">Why </span>
                <span className="gradient-text">SageMind?</span>
              </h2>

              <div className="space-y-8">
                {[
                  {
                    title: "Fully Custom",
                    description: "No templates, no cookie-cutter solutions. Every project is crafted specifically for your unique needs and goals.",
                  },
                  {
                    title: "Speed That Matters",
                    description: "We deliver fast without cutting corners. Your solution is ready when you need it, not months down the road.",
                  },
                  {
                    title: "Client-Centric Approach",
                    description: "Your success is our focus. We listen, understand your challenges, and build solutions that actually solve them.",
                  },
                ].map((item, index) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-bright-cyan to-teal flex items-center justify-center text-near-black font-bold text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass rounded-3xl p-8 border border-bright-cyan/20">
                <div className="text-6xl mb-6">&ldquo;</div>
                <blockquote className="text-2xl text-white font-medium leading-relaxed mb-8">
                  We craft solutions <span className="text-bright-cyan">specifically for each client</span>,
                  integrating technology to unlock potential. Speed and customization are what set us apart.
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-bright-cyan/30">
                    <Image
                      src="/Justin2.png"
                      alt="Justin Headley"
                      fill
                      className="object-cover object-top scale-110"
                    />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">Justin Headley</div>
                    <div className="text-gray-400">Founder, SageMind AI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-animated-gradient" />
        <div className="absolute inset-0 bg-near-black/60" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            <span className="text-white">Ready for a </span>
            <span className="gradient-text">Custom Solution?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Tell us about your project. We&apos;ll craft something built just for you.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-10 py-4 inline-block">
            Start the Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
