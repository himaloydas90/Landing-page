import Reveal from "./Reveal";
import Link from "next/link";

export default function CTA() {
  return (
    <section
      id="get-started"
      className="relative overflow-hidden bg-purple-950 pb-24 pt-28 text-center"
    >
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-purple-600/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="wave-bottom top-0 rotate-180">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          preserveAspectRatio="none"
          className="h-20 w-full"
        >
          <path
            d="M0,50 C240,100 480,0 720,25 C960,50 1200,100 1440,50 L1440,100 L0,100 Z"
            fill="white"
          />
        </svg>
      </div>

      <Reveal duration={800} className="relative mx-auto max-w-2xl px-6">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Get Started Now!
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-white/70">
          We believe we have created the most efficient SaaS landing page
          for your users. Landing page with features that will convince
          you to use it for your SaaS business.
        </p>
        <Link
          href="/register"
          className="btn-pop mt-9 inline-block rounded-full bg-orange-500 px-9 py-3 text-sm font-semibold text-white shadow-xl shadow-orange-950/30 transition hover:bg-orange-600"
        >
          Upgrade my account
        </Link>
      </Reveal>
    </section>
  );
}
