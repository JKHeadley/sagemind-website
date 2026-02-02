import Link from "next/link";
import Image from "next/image";

const credentials = [
  {
    title: "18+ Years Building Software",
    description: "Not consulting. Not advising. Actually building production systems that work.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "AWS Certified Solutions Architect",
    description: "Enterprise-grade cloud architecture for scalable systems.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "ML Certification (97.3%)",
    description: "Deep understanding of machine learning and AI applications.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Open Source Creator",
    description: "Dozens of public repos. Tools that help developers save time, for free.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const values = [
  {
    title: "Fully Custom",
    description: "Every solution is custom-built for your specific needs. No templates, no one-size-fits-all.",
    icon: (
      <svg className="w-7 h-7 text-bright-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "Speed & Precision",
    description: "We deliver fast without cutting corners. Your solution is ready when you need it.",
    icon: (
      <svg className="w-7 h-7 text-bright-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Client-Centric",
    description: "Your success is our focus. We listen, understand, and build solutions that work for you.",
    icon: (
      <svg className="w-7 h-7 text-bright-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="bg-near-black">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-animated-gradient opacity-30" />
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-bright-cyan/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 rounded-full glass border border-bright-cyan/30 text-bright-cyan text-sm font-medium mb-8">
              About Us
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8">
              <span className="text-white">Custom Solutions.</span>
              <br />
              <span className="gradient-text">Built for You.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              At SageMind, we believe every business deserves solutions crafted specifically for their
              unique needs. We combine speed with customization to deliver results that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-near-black via-dark-navy/30 to-near-black" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-white">Our Core </span>
              <span className="gradient-text">Values</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide everything we build
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item) => (
              <div
                key={item.title}
                className="glass rounded-3xl p-8 border border-white/5 card-hover text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-bright-cyan/20 to-teal/20 flex items-center justify-center text-3xl mx-auto mb-6 border border-bright-cyan/20">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Service Tracks Summary */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-white">Two Ways We </span>
              <span className="gradient-text">Help</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We offer specialized services designed to meet different business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-8 border border-white/5 card-hover">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-bright-cyan to-teal flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-near-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Small Business Solutions</h3>
              <p className="text-gray-400 mb-6">
                Custom websites and Google Workspace solutions that streamline your workflows
                and establish a professional digital presence.
              </p>
              <Link href="/services#small-business" className="text-bright-cyan font-medium hover:text-light-mint transition-colors inline-flex items-center gap-2">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="glass rounded-2xl p-8 border border-white/5 card-hover">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-bright-cyan to-teal flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-near-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">AI & Data Solutions</h3>
              <p className="text-gray-400 mb-6">
                Custom AI-driven software and data applications that turn your unique
                challenges into tailored solutions.
              </p>
              <Link href="/services#ai-solutions" className="text-bright-cyan font-medium hover:text-light-mint transition-colors inline-flex items-center gap-2">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-near-black via-dark-navy/30 to-near-black" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                Meet <span className="gradient-text">Justin</span>
              </h2>

              <div className="glass rounded-3xl p-8 border border-white/5">
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-near-black border-2 border-bright-cyan/30 glow-cyan">
                    <Image
                      src="/Justin2.png"
                      alt="Justin Headley"
                      fill
                      className="object-cover object-top scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Justin Headley</h3>
                    <p className="text-bright-cyan font-medium">Founder & CEO</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Justin doesn&apos;t talk about building things. He just builds them. For over
                    18 years, he&apos;s been writing code, shipping products, and solving problems
                    that other people said couldn&apos;t be solved.
                  </p>

                  <p>
                    He&apos;s the kind of engineer who creates tools and gives them away for free
                    because he genuinely wants to help people save time. Check his GitHub. It&apos;s
                    full of repos that developers actually use.
                  </p>

                  <p>
                    Justin started SageMind AI because he saw too many businesses stuck with
                    generic solutions that didn&apos;t fit their needs. His approach is simple:
                    understand the client, build something custom, deliver fast.
                  </p>

                  <p className="text-white font-medium">
                    He&apos;d rather let the work speak for itself.
                  </p>
                </div>

                <div className="flex gap-4 mt-8">
                  <a
                    href="https://github.com/JKHeadley"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary py-2.5 px-5 text-sm inline-flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    See His Work
                  </a>
                  <a
                    href="https://linkedin.com/in/jkheadley"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary py-2.5 px-5 text-sm inline-flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Credentials */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                The <span className="gradient-text">Credentials</span>
              </h3>

              <div className="space-y-4">
                {credentials.map((cred) => (
                  <div
                    key={cred.title}
                    className="glass rounded-2xl p-6 border border-white/5 card-hover group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bright-cyan/20 to-teal/20 flex items-center justify-center text-bright-cyan group-hover:scale-110 transition-transform border border-bright-cyan/20">
                        {cred.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1 group-hover:text-bright-cyan transition-colors">
                          {cred.title}
                        </h4>
                        <p className="text-gray-400 text-sm">{cred.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-near-black via-dark-navy/50 to-near-black" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bright-cyan/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-10 lg:p-14 border border-bright-cyan/20 text-center">
            <div className="text-6xl text-bright-cyan/30 mb-6">&ldquo;</div>
            <blockquote className="text-2xl lg:text-3xl text-white font-medium leading-relaxed mb-8">
              The best solutions aren&apos;t built from templates. They&apos;re built from
              conversations. Understanding your unique challenges is where great software begins.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-bright-cyan/30">
                <Image
                  src="/Justin2.png"
                  alt="Justin Headley"
                  fill
                  className="object-cover object-top scale-110"
                />
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">Justin Headley</div>
                <div className="text-gray-400 text-sm">Founder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-animated-gradient" />
        <div className="absolute inset-0 bg-near-black/60" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            <span className="text-white">Ready for a </span>
            <span className="gradient-text">Custom Solution?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Tell us about your project and we&apos;ll build something tailored just for you.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-10 py-4 inline-block">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
