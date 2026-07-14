"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Settings,
  Users,
  Globe,
  LifeBuoy,
  BarChart3,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { getSession, logout } from "@/lib/auth";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Settings, label: "Settings" },
  { icon: Users, label: "User account" },
  { icon: Globe, label: "Language" },
  { icon: LifeBuoy, label: "Support" },
  { icon: BarChart3, label: "Statistics" },
];

export default function DashboardPage() {
  const router = useRouter();
  const [session, setSession] = useState(null);
  const [checked, setChecked] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const s = getSession();
    if (!s) {
      router.replace("/login");
      return;
    }
    setSession(s);
    setChecked(true);
  }, [router]);

  function handleLogout() {
    logout();
    router.push("/");
  }

  if (!checked) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-sm text-gray-400">Loading...</p>
      </main>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-orange-500 p-6 text-white transition-transform duration-300 lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="font-display text-lg font-bold">
            saas
          </Link>
          <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mt-8 space-y-1">
          {navItems.map((item, i) => (
            <button
              key={item.label}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition ${
                i === 0 ? "bg-white/15" : "hover:bg-white/10"
              }`}
            >
              <item.icon size={16} />
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          className="btn-pop mt-8 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-white/90 hover:bg-white/10"
        >
          <LogOut size={16} />
          Sign Out
        </button>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1">
        <header className="flex items-center justify-between border-b border-gray-100 bg-white px-6 py-4">
          <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} className="text-purple-950" />
          </button>
          <div>
            <p className="text-xs text-gray-400">Welcome,</p>
            <p className="text-sm font-semibold text-purple-700">
              {session?.name}
            </p>
          </div>
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-purple-500 to-orange-400" />
        </header>

        <main className="p-6 lg:p-10">
          <div className="mb-8 rounded-2xl bg-purple-700 p-6 text-white">
            <p className="text-sm text-white/70">Your current plan</p>
            <p className="mt-1 font-display text-2xl font-bold">
              {session?.plan || "FREE"}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-hover rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
              <p className="text-xs text-gray-400">Sales Statistics</p>
              <p className="mt-2 text-2xl font-bold text-purple-700">+17%</p>
              <svg viewBox="0 0 100 30" className="mt-2 h-8 w-full">
                <path
                  d="M0,25 Q15,5 30,18 T60,10 T100,20"
                  fill="none"
                  stroke="#8b4fe0"
                  strokeWidth="2.5"
                />
              </svg>
            </div>

            <div className="card-hover rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
              <p className="text-xs text-gray-400">API Integrations</p>
              <p className="mt-2 text-2xl font-bold text-orange-500">1,256</p>
              <p className="mt-1 text-xs text-gray-400">total this month</p>
            </div>

            <div className="card-hover rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
              <p className="text-xs text-gray-400">Team Members</p>
              <p className="mt-2 text-2xl font-bold text-purple-700">24</p>
              <p className="mt-1 text-xs text-gray-400">active this week</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <p className="text-sm font-semibold text-purple-950">
              Account details
            </p>
            <div className="mt-4 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
              <div>
                <p className="text-xs text-gray-400">Full name</p>
                <p className="mt-1 font-medium text-purple-950">
                  {session?.name}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Email</p>
                <p className="mt-1 font-medium text-purple-950">
                  {session?.email}
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
