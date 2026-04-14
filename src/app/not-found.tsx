import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-[#050505] flex flex-col items-center justify-center px-6 text-center">
      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#d4620a] mb-8">
        Page Not Found
      </p>
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6">
        404
      </h1>
      <p className="text-lg text-white/40 font-light max-w-md mb-12">
        This page does not exist. Like a business absent from AI recommendations
        — invisible.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="bg-white text-[#050505] text-sm font-bold px-8 py-4 hover:bg-[#d4620a] hover:text-white transition-colors"
        >
          Back to Homepage
        </Link>
        <Link
          href="/#contact"
          className="border border-white/20 text-white text-sm font-bold px-8 py-4 hover:border-white transition-colors"
        >
          Start a Diagnostic
        </Link>
      </div>
    </section>
  );
}
