import { Play } from "lucide-react";
import Link from "next/link";
import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-purple-700 to-purple-500 pt-32 pb-40 lg:pb-52"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-purple-500/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-10 lg:px-10">
        <div className="max-w-xl animate-hero-in" style={{ animationDelay: "150ms" }}>
          <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[3.2rem]">
            <span className="font-bold">Powerful services</span> for
            powerful applications
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
            We believe we have created the most efficient SaaS landing
            page for your users.
          </p>
          <p className="mt-3 text-sm font-medium text-white/60">
            For as low as{" "}
            <span className="font-semibold text-orange-400">
              $0.95
            </span>{" "}
            per user account
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button className="btn-pop group flex items-center gap-3 rounded-full border border-white/40 py-2 pl-2 pr-6 text-sm font-medium text-white transition hover:border-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition duration-300 group-hover:scale-110 group-hover:bg-white/25">
                <Play size={14} className="ml-0.5 fill-white text-white" />
              </span>
              Watch demo
            </button>
            <Link
              href="/register"
              className="btn-pop rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-orange-900/30 transition hover:bg-orange-600"
            >
              Start Now
            </Link>
          </div>
        </div>

        <div
          className="relative animate-scale-in"
          style={{ animationDelay: "300ms" }}
        >
          <DashboardMockup />
        </div>
      </div>

      {/* bottom wave */}
      <div className="wave-bottom">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
          className="h-24 w-full sm:h-32"
        >
          <path
            d="M0,64 C240,120 480,0 720,32 C960,64 1200,120 1440,64 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
