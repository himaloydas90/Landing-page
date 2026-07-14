"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import Reveal from "./Reveal";

const plans = [
  {
    name: "FREE",
    monthly: 0,
    yearly: 0,
    popular: false,
    features: [
      "1 User Account",
      "10 Team Members",
      "Unlimited Emails Accounts",
      "Set And Manage Permissions",
    ],
  },
  {
    name: "PRO",
    monthly: 49,
    yearly: 470,
    popular: true,
    features: [
      "50 User Account",
      "500 Team Members",
      "Unlimited Emails Accounts",
      "Set And Manage Permissions",
      "API & extension support",
      "Developer support",
    ],
  },
  {
    name: "ULTRA",
    monthly: 99,
    yearly: 950,
    popular: false,
    features: [
      "Unlimited User Account",
      "Unlimited Team Members",
      "Unlimited Emails Accounts",
      "Set And Manage Permissions",
      "API & extension support",
      "A / B testing",
    ],
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-purple-950 sm:text-4xl">
            Our Plans
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            We believe we have created the most efficient SaaS landing page
            for your users. Landing page with features that will convince
            you to use it for your SaaS business.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mx-auto mt-8 flex w-fit items-center rounded-full bg-gray-100 p-1">
            <span
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-purple-700 shadow transition-transform duration-300 ease-out ${
                yearly ? "translate-x-[calc(100%+8px)]" : "translate-x-0"
              }`}
            />
            <button
              onClick={() => setYearly(false)}
              className={`relative z-10 rounded-full px-6 py-2 text-sm font-medium transition-colors duration-300 ${
                !yearly ? "text-white" : "text-gray-500"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`relative z-10 rounded-full px-6 py-2 text-sm font-medium transition-colors duration-300 ${
                yearly ? "text-white" : "text-gray-500"
              }`}
            >
              Yearly
            </button>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 120}
              direction="up"
              className={`card-hover relative rounded-2xl border p-8 text-left ${
                plan.popular
                  ? "border-transparent bg-purple-700 text-white shadow-2xl lg:scale-105"
                  : "border-gray-100 bg-gray-50 text-purple-950 hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <span className="animate-pulse-soft absolute -top-3 left-8 rounded-full bg-orange-500 px-3 py-1 text-[10px] font-bold tracking-wide text-white">
                  POPULAR
                </span>
              )}

              <p
                className={`text-xs font-semibold tracking-widest ${
                  plan.popular ? "text-white/70" : "text-gray-400"
                }`}
              >
                {plan.name}
              </p>
              <p className="mt-3 flex items-end gap-1">
                <span className="text-2xl font-bold">$</span>
                <span
                  key={yearly ? "y" : "m"}
                  className="font-display animate-scale-in text-5xl font-bold"
                  style={{ animationDuration: "400ms" }}
                >
                  {yearly ? plan.yearly : plan.monthly}
                </span>
                <span
                  className={`mb-1 text-sm ${
                    plan.popular ? "text-white/70" : "text-gray-400"
                  }`}
                >
                  / {yearly ? "year" : "month"}
                </span>
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check
                      size={16}
                      strokeWidth={3}
                      className={
                        plan.popular ? "mt-0.5 text-orange-400" : "mt-0.5 text-orange-500"
                      }
                    />
                    <span
                      className={plan.popular ? "text-white/90" : "text-gray-600"}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/register?plan=${plan.name.toLowerCase()}`}
                className={`btn-pop mt-8 block w-full rounded-full py-2.5 text-center text-sm font-semibold transition ${
                  plan.popular
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "border border-purple-200 text-purple-700 hover:bg-purple-50"
                }`}
              >
                Sign up
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
