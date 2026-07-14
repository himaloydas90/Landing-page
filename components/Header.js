"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, LogOut } from "lucide-react";
import { getSession, logout } from "@/lib/auth";

const links = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(getSession());
  }, []);

  function handleLogout() {
    logout();
    setSession(null);
    router.push("/");
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-30 animate-nav-in">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between py-7">
          <a
            href="#home"
            className="font-display text-xl font-semibold tracking-[0.2em] text-white"
          >
            LATERAL
          </a>

          <nav className="hidden items-center gap-10 lg:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="relative text-sm font-medium text-white/85 transition hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            {session ? (
              <>
                <Link
                  href="/dashboard"
                  className="btn-pop rounded-full border border-white/40 px-5 py-2 text-sm font-medium text-white transition hover:border-white hover:bg-white/10"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="btn-pop flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-900/30 transition hover:bg-orange-600"
                >
                  <LogOut size={14} />
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="btn-pop rounded-full border border-white/40 px-5 py-2 text-sm font-medium text-white transition hover:border-white hover:bg-white/10"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="btn-pop rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-900/30 transition hover:bg-orange-600"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="text-white lg:hidden"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="animate-hero-in mx-6 mb-4 rounded-2xl bg-purple-900/95 p-6 backdrop-blur lg:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-white/90 transition hover:text-orange-400"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-3">
              {session ? (
                <>
                  <Link
                    href="/dashboard"
                    onClick={() => setOpen(false)}
                    className="btn-pop rounded-full border border-white/40 px-5 py-2 text-center text-sm font-medium text-white"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      setOpen(false);
                      handleLogout();
                    }}
                    className="btn-pop rounded-full bg-orange-500 px-5 py-2 text-center text-sm font-semibold text-white"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="btn-pop rounded-full border border-white/40 px-5 py-2 text-center text-sm font-medium text-white"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setOpen(false)}
                    className="btn-pop rounded-full bg-orange-500 px-5 py-2 text-center text-sm font-semibold text-white"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
