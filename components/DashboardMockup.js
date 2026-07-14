import {
  LayoutDashboard,
  Settings,
  Users,
  Globe,
  LifeBuoy,
  BarChart3,
  LogOut,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Settings, label: "Settings" },
  { icon: Users, label: "User account" },
  { icon: Globe, label: "Language" },
  { icon: LifeBuoy, label: "Support" },
  { icon: BarChart3, label: "Statistics" },
  { icon: LogOut, label: "Sign Out" },
];

export default function DashboardMockup() {
  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      {/* Main dashboard card */}
      <div className="animate-float-slow relative z-10 flex overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* sidebar */}
        <div className="hidden w-32 flex-col bg-orange-500 py-5 sm:flex">
          <span className="px-5 pb-4 font-display text-lg font-bold text-white">
            saas
          </span>
          {navItems.map((item, i) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 px-5 py-2.5 text-[11px] font-medium text-white/90 ${
                i === 0 ? "bg-white/15" : ""
              }`}
            >
              <item.icon size={13} />
              <span className="truncate">{item.label}</span>
            </div>
          ))}
        </div>

        {/* main content */}
        <div className="flex-1 p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[11px] text-gray-400">Welcome,</p>
              <p className="text-xs font-semibold text-purple-700">
                Alexander Donovan
              </p>
            </div>
            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-purple-500 to-orange-400" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-gray-50 p-3">
              <p className="text-[10px] text-gray-400">Sales Statistics</p>
              <p className="mt-1 text-lg font-bold text-purple-700">+17%</p>
              <svg viewBox="0 0 100 30" className="mt-1 h-6 w-full">
                <path
                  d="M0,25 Q15,5 30,18 T60,10 T100,20"
                  fill="none"
                  stroke="#8b4fe0"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
            <div className="rounded-xl bg-gray-50 p-3">
              <p className="text-[10px] text-gray-400">Country Usage</p>
              <div className="mt-1 flex items-center gap-2">
                <svg viewBox="0 0 32 32" className="h-10 w-10">
                  <circle
                    r="16"
                    cx="16"
                    cy="16"
                    fill="#f5941f"
                  />
                  <path
                    d="M16 16 L16 0 A16 16 0 0 1 30 22 Z"
                    fill="#8b4fe0"
                  />
                  <path
                    d="M16 16 L30 22 A16 16 0 0 1 8 30 Z"
                    fill="#2a1250"
                  />
                </svg>
                <div className="text-[9px] text-gray-400 leading-4">
                  <p>
                    <span className="font-semibold text-purple-700">01.</span>{" "}
                    USA
                  </p>
                  <p>02 Germany</p>
                  <p>03 Japan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 rounded-xl bg-gray-50 p-3">
            <p className="text-[10px] text-gray-400">API Integrations</p>
            <p className="mt-1 text-sm font-bold text-purple-700">
              1256{" "}
              <span className="text-[10px] font-normal text-gray-400">
                total in june
              </span>
            </p>
            <svg viewBox="0 0 200 36" className="mt-1 h-8 w-full">
              <path
                d="M0,30 Q30,5 60,20 T120,12 T200,24 L200,36 L0,36 Z"
                fill="url(#g1)"
              />
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b4fe0" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#8b4fe0" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* floating mobile card */}
      <div className="animate-float absolute -right-4 -bottom-10 z-20 hidden w-40 rounded-2xl bg-white p-4 shadow-2xl sm:block lg:-right-10">
        <p className="font-display text-sm font-bold text-purple-700">saas</p>
        <div className="mt-2 h-16 w-16 mx-auto">
          <svg viewBox="0 0 32 32" className="h-full w-full">
            <circle r="16" cx="16" cy="16" fill="#f5941f" />
            <path d="M16 16 L16 0 A16 16 0 0 1 30 22 Z" fill="#8b4fe0" />
            <path d="M16 16 L30 22 A16 16 0 0 1 8 30 Z" fill="#2a1250" />
          </svg>
        </div>
        <p className="mt-2 text-center text-[10px] text-gray-400">
          User Statistics
        </p>
      </div>

      {/* small floating badge */}
      <div className="animate-float-slower absolute -left-6 top-10 z-20 hidden rounded-xl bg-white px-4 py-3 shadow-xl sm:block">
        <p className="text-[10px] text-gray-400">Latest Statistics</p>
        <p className="text-sm font-bold text-orange-500">+42%</p>
      </div>
    </div>
  );
}
