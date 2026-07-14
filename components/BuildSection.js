import { Check } from "lucide-react";
import Reveal from "./Reveal";

function CheckItem({ children }) {
  return (
    <li className="flex items-center gap-3 text-sm text-gray-600">
      <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-orange-100 text-orange-600">
        <Check size={12} strokeWidth={3} />
      </span>
      {children}
    </li>
  );
}

function StatCard() {
  return (
    <div className="relative mx-auto max-w-sm">
      <div className="card-hover rounded-2xl bg-purple-700 p-5 shadow-2xl">
        <div className="flex items-center justify-between">
          <span className="font-display text-base font-bold text-white">
            saas
          </span>
          <div className="h-6 w-6 rounded-full bg-white/20" />
        </div>
        <p className="mt-4 text-[11px] text-white/60">Welcome,</p>
        <p className="text-xs font-semibold text-white">Alexander Donovan</p>

        <div className="mt-4 rounded-xl bg-white p-3">
          <p className="text-[10px] text-gray-400">Sales Statistics</p>
          <p className="mt-1 text-base font-bold text-purple-700">+17%</p>
          <div className="mt-1 flex items-end gap-3 text-[9px] text-gray-400">
            <span>4790 total in june</span>
          </div>
          <svg viewBox="0 0 200 40" className="mt-1 h-8 w-full">
            <path
              d="M0,32 Q30,5 60,22 T120,14 T200,28 L200,40 L0,40 Z"
              fill="url(#gradstat)"
            />
            <defs>
              <linearGradient id="gradstat" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f5941f" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#f5941f" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="animate-float absolute -right-6 -top-8 hidden w-40 rounded-xl bg-white p-3 shadow-xl sm:block">
        <p className="text-[9px] text-gray-400">Country Usage</p>
        <p className="text-xs font-bold text-purple-700">
          01. USA <span className="font-normal text-gray-400">02 Germany</span>
        </p>
      </div>

      <div className="animate-float-slow absolute -bottom-6 -left-6 hidden w-36 rounded-xl bg-white p-3 shadow-xl sm:block">
        <p className="text-[9px] text-gray-400">API Integrations</p>
        <p className="text-xs font-bold text-orange-500">1256</p>
      </div>
    </div>
  );
}

function DeviceCard() {
  return (
    <div className="relative mx-auto max-w-sm">
      <div className="card-hover rounded-3xl bg-orange-500 p-6 shadow-2xl">
        <p className="font-display text-lg font-bold text-white">Dashboard</p>
        <p className="mt-1 text-xs text-white/80">Settings</p>
        <p className="mt-1 text-xs text-white/80">User account</p>
        <p className="mt-1 text-xs text-white/80">Language</p>

        <div className="mt-5 rounded-xl bg-white p-4">
          <p className="text-[10px] text-gray-400">Latest Statistics</p>
          <p className="mt-1 text-lg font-bold text-orange-500">+42%</p>
          <div className="mt-2 flex items-center gap-3">
            <svg viewBox="0 0 32 32" className="h-12 w-12">
              <circle r="16" cx="16" cy="16" fill="#8b4fe0" />
              <path d="M16 16 L16 0 A16 16 0 0 1 30 22 Z" fill="#f5941f" />
              <path d="M16 16 L30 22 A16 16 0 0 1 8 30 Z" fill="#2a1250" />
            </svg>
            <div className="text-[10px] text-gray-500 leading-4">
              <p>30 sales</p>
              <p>13 new accounts</p>
              <p>188 shares</p>
            </div>
          </div>
        </div>
      </div>

      <div className="animate-float-slow absolute -bottom-8 -right-6 hidden w-44 rounded-xl bg-white p-4 shadow-xl sm:block">
        <p className="text-[9px] text-gray-400">User Statistics</p>
        <p className="text-sm font-bold text-purple-700">
          25,467 <span className="text-orange-500">+25%</span>
        </p>
        <svg viewBox="0 0 150 30" className="mt-1 h-6 w-full">
          <path
            d="M0,25 Q20,5 40,18 T80,10 T150,20"
            fill="none"
            stroke="#f5941f"
            strokeWidth="2.5"
          />
        </svg>
      </div>
    </div>
  );
}

function NotificationCard() {
  return (
    <div className="relative mx-auto max-w-sm">
      <div className="card-hover rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-black/5">
        <p className="text-[11px] text-gray-400">Welcome,</p>
        <p className="text-xs font-semibold text-purple-700">
          Alexander Donovan
        </p>
        <p className="mt-2 text-[10px] text-gray-400">
          Last login: 12 March 2018, 4:30 AM
        </p>

        <div className="mt-4 flex items-center justify-between rounded-xl bg-gray-50 p-3">
          <span className="text-[10px] text-gray-400">Notifications</span>
          <span className="h-2 w-2 rounded-full bg-orange-500" />
        </div>

        <div className="mt-3 rounded-xl bg-gray-50 p-3">
          <p className="text-[10px] text-gray-400">API Integrations</p>
          <p className="text-xs font-bold text-purple-700">
            1256 <span className="font-normal text-gray-400">total in june</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BuildSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl space-y-28 px-6 lg:px-10">
        {/* Block 1 */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal direction="right" className="order-2 lg:order-1">
            <h2 className="font-display text-3xl font-semibold leading-snug text-purple-950 sm:text-4xl">
              Build your SAAS landing page using the{" "}
              <span className="font-bold">intelligent BEM interface</span>
            </h2>
            <p className="mt-5 text-gray-500">
              Blocks, Elements and Modifiers. A smart HTML/CSS structure
              that can easily be reused. Layout driven by the purpose of
              modularity.
            </p>
            <ul className="mt-6 space-y-3">
              <CheckItem>Simple and Smart HTML code</CheckItem>
              <CheckItem>Works reintegrated in any part of the layout</CheckItem>
              <CheckItem>Reuse the elements from one design to another</CheckItem>
            </ul>
          </Reveal>
          <Reveal direction="left" delay={150} className="order-1 lg:order-2">
            <StatCard />
          </Reveal>
        </div>

        {/* Block 2 */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal direction="right">
            <DeviceCard />
          </Reveal>
          <Reveal direction="left" delay={150}>
            <h2 className="font-display text-3xl font-semibold leading-snug text-purple-950 sm:text-4xl">
              Powerful services for{" "}
              <span className="font-bold">powerful applications</span>
            </h2>
            <p className="mt-5 text-gray-500">
              Responsive code that makes your landing page look good on
              all devices (desktops, tablets, and phones). Created with
              mobile specialists.
            </p>
            <ul className="mt-6 space-y-3">
              <CheckItem>Responsive code</CheckItem>
              <CheckItem>Look good on all devices</CheckItem>
              <CheckItem>Created with mobile specialists</CheckItem>
            </ul>
          </Reveal>
        </div>

        {/* Block 3 */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal direction="right" className="order-2 lg:order-1">
            <h2 className="font-display text-3xl font-semibold leading-snug text-purple-950 sm:text-4xl">
              Layout driven by the{" "}
              <span className="font-bold">purpose of modularity</span>
            </h2>
            <p className="mt-5 text-gray-500">
              Choose between multiple unique designs and easy integrate
              elements from one design to another. Following the latest
              design trends.
            </p>
            <ul className="mt-6 space-y-3">
              <CheckItem>Elements from one design to another</CheckItem>
              <CheckItem>Following the latest design trends</CheckItem>
              <CheckItem>Reuse the elements from one design to another</CheckItem>
            </ul>
          </Reveal>
          <Reveal direction="left" delay={150} className="order-1 lg:order-2">
            <NotificationCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
