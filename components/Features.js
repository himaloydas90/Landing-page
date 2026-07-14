import { LayoutTemplate, LineChart, Grid3x3, Users, ShieldCheck, Target } from "lucide-react";
import Reveal from "./Reveal";

const features = [
  {
    icon: LayoutTemplate,
    title: "Responsive Layout Template",
    desc: "Responsive code that makes your landing page look good on all devices (desktops, tablets, and phones). Created with mobile specialists.",
  },
  {
    icon: LineChart,
    title: "SaaS Landing Page Analysis",
    desc: "A perfect structure created after we analized trends in SaaS landing page designs. Analysis made to the most popular SaaS businesses.",
  },
  {
    icon: Grid3x3,
    title: "Smart BEM Grid",
    desc: "Blocks, Elements and Modifiers. A smart HTML/CSS structure that can easily be reused. Layout driven by the purpose of modularity.",
  },
  {
    icon: Users,
    title: "User Friendly",
    desc: "Easy to navigate. Made with user experience in mind, in order to provide the perfect landing page experience for your client.",
  },
  {
    icon: ShieldCheck,
    title: "Best online Security",
    desc: "A perfect structure created after we analized trends in SaaS landing page designs. Analysis made to the most popular SaaS businesses.",
  },
  {
    icon: Target,
    title: "Target audience",
    desc: "Blocks, Elements and Modifiers. A smart HTML/CSS structure that can easily be reused. Layout driven by the purpose of modularity.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-purple-950 sm:text-4xl">
            Features designed for you
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            We believe we have created the most efficient SaaS landing page
            for your users. Landing page with features that will convince
            you to use it for your SaaS business.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 100}
              duration={600}
              className="group flex flex-col items-center text-center"
            >
              <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-200">
                <f.icon size={28} strokeWidth={1.8} />
              </span>
              <h3 className="text-base font-semibold text-purple-950">
                {f.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm text-gray-500">{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
