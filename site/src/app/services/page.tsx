import Link from "next/link";

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your business, challenges, and goals to understand exactly what you need.",
  },
  {
    step: "02",
    title: "Design",
    description: "We craft a tailored solution designed specifically for your unique requirements.",
  },
  {
    step: "03",
    title: "Build",
    description: "We develop your solution with regular updates so you see progress throughout.",
  },
  {
    step: "04",
    title: "Launch",
    description: "We deploy your solution and provide support to ensure everything runs smoothly.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-near-black">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-animated-gradient opacity-30" />
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-bright-cyan/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 rounded-full glass border border-bright-cyan/30 text-bright-cyan text-sm font-medium mb-8">
              Our Services
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8">
              <span className="text-white">Tailored Solutions, </span>
              <span className="gradient-text">Built for You</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              We offer two specialized service tracks, each designed to meet specific business needs.
              Every solution is custom-built for your unique situation.
            </p>
          </div>
        </div>
      </section>

      {/* Service Track 1: Small Business Solutions */}
      <section id="small-business" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 lg:p-12 border border-white/5">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-bright-cyan to-teal flex items-center justify-center">
                    <svg className="w-8 h-8 text-near-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-bright-cyan text-sm font-medium mb-1">Service Track 1</div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white">
                      Small Business Solutions
                    </h2>
                  </div>
                </div>

                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Custom websites and personalized Google Workspace solutions designed to streamline
                  your workflows and establish a professional digital presence. We build exactly what
                  your business needs, not generic templates.
                </p>

                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-bright-cyan uppercase tracking-wider mb-4">
                    Perfect For
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Small Businesses", "Startups", "Local Services", "Professional Practices", "Growing Teams"].map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 rounded-full bg-bright-cyan/10 text-bright-cyan text-sm border border-bright-cyan/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Get Started
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="space-y-6">
                <div className="bg-near-black/50 rounded-2xl p-6 border border-white/5">
                  <h3 className="font-semibold text-white mb-4 flex items-center gap-3">
                    <svg className="w-6 h-6 text-bright-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Custom Website Development
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Unique design tailored to your brand",
                      "Mobile-responsive and fast-loading",
                      "SEO-optimized for visibility",
                      "Easy content management",
                      "Hosting and domain setup",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-bright-cyan to-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-near-black" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-near-black/50 rounded-2xl p-6 border border-white/5">
                  <h3 className="font-semibold text-white mb-4 flex items-center gap-3">
                    <svg className="w-6 h-6 text-bright-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Google Workspace Solutions
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Professional email setup",
                      "Shared drives and file organization",
                      "Calendar and scheduling optimization",
                      "Custom workflow automation",
                      "Team collaboration tools",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-bright-cyan to-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-near-black" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Track 2: AI & Data Solutions */}
      <section id="ai-solutions" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-near-black via-dark-navy/30 to-near-black" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bright-cyan/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 lg:p-12 border border-white/5">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-bright-cyan to-teal flex items-center justify-center">
                    <svg className="w-8 h-8 text-near-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-bright-cyan text-sm font-medium mb-1">Service Track 2</div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white">
                      AI & Data Solutions
                    </h2>
                  </div>
                </div>

                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Custom AI-driven software and data solutions that transform your unique challenges
                  into tailored applications. We integrate AI to unlock your business potential and
                  create competitive advantages.
                </p>

                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-bright-cyan uppercase tracking-wider mb-4">
                    Perfect For
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Data-Rich Businesses", "Process Automation", "Custom Applications", "Analytics Needs", "AI Integration"].map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 rounded-full bg-bright-cyan/10 text-bright-cyan text-sm border border-bright-cyan/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Discuss Your Project
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="lg:order-1 space-y-6">
                <div className="bg-near-black/50 rounded-2xl p-6 border border-white/5">
                  <h3 className="font-semibold text-white mb-4 flex items-center gap-3">
                    <svg className="w-6 h-6 text-bright-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Custom AI Applications
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "AI assistants and chatbots",
                      "Intelligent automation workflows",
                      "Natural language processing",
                      "Predictive analytics",
                      "Custom integrations with your tools",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-bright-cyan to-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-near-black" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-near-black/50 rounded-2xl p-6 border border-white/5">
                  <h3 className="font-semibold text-white mb-4 flex items-center gap-3">
                    <svg className="w-6 h-6 text-bright-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Data Solutions
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Data analysis and visualization",
                      "Dashboard and reporting systems",
                      "Data pipeline development",
                      "Business intelligence tools",
                      "Database design and optimization",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-bright-cyan to-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-near-black" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bright-cyan/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">How We </span>
              <span className="gradient-text">Work</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              A straightforward process focused on delivering exactly what you need
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <div key={phase.step} className="relative">
                {/* Connector line */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-bright-cyan/50 to-transparent" />
                )}

                <div className="text-center relative">
                  <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-bright-cyan to-teal flex items-center justify-center text-near-black text-3xl font-bold mx-auto mb-6 glow-cyan">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                  <p className="text-gray-400">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">What Sets Us </span>
              <span className="gradient-text">Apart</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "100% Custom",
                description: "No templates, no cookie-cutter solutions. Everything we build is tailored specifically to your needs.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                ),
              },
              {
                title: "Fast Delivery",
                description: "We work efficiently to deliver your solution quickly without sacrificing quality.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: "Client-Focused",
                description: "Your success is our priority. We listen, understand, and build solutions that actually work for you.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="glass rounded-2xl p-8 border border-white/5 text-center card-hover">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-bright-cyan/20 to-teal/20 flex items-center justify-center text-bright-cyan mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-animated-gradient" />
        <div className="absolute inset-0 bg-near-black/60" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            <span className="text-white">Ready to Get </span>
            <span className="gradient-text">Started?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Tell us about your project and we&apos;ll create a custom solution built just for you.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-10 py-4 inline-block">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
