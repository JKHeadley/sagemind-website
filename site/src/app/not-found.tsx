import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-near-black min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-animated-gradient opacity-30" />
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-bright-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-teal/10 rounded-full blur-3xl" />

      <div className="relative text-center px-4 py-20">
        {/* 404 Number */}
        <div className="text-[10rem] lg:text-[14rem] font-bold leading-none mb-4">
          <span className="gradient-text text-glow">404</span>
        </div>

        {/* Message */}
        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-md mx-auto">
          Looks like this page wandered off. Let&apos;s get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>

        {/* Decorative element */}
        <div className="mt-16 glass rounded-2xl p-6 max-w-sm mx-auto border border-white/5">
          <p className="text-gray-400 text-sm">
            Looking for something specific? Check out our{" "}
            <Link href="/services" className="text-bright-cyan hover:text-light-mint transition-colors">
              services
            </Link>{" "}
            or{" "}
            <Link href="/about" className="text-bright-cyan hover:text-light-mint transition-colors">
              learn more about us
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
