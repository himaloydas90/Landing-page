import Reveal from "./Reveal";

const stories = [
  {
    name: "Jason Duvan",
    role: "New York Business Center",
    quote:
      "Business is all about the customer: what the customer wants and what they get.",
    initials: "JD",
  },
  {
    name: "Jada Sacks",
    role: "iParts Solutions",
    quote:
      "I've internalized it to the point of understanding the success of my actions and endeavors.",
    initials: "JS",
  },
  {
    name: "Lason Duvan",
    role: "Mosaic Software",
    quote:
      "The American Dream is that any man or woman, despite of his or her background, can change their circumstances.",
    initials: "LD",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-purple-950 sm:text-4xl">
            Success stories
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal
              key={s.name}
              delay={i * 120}
              className="group flex flex-col items-center text-center"
            >
              <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-orange-400 text-lg font-bold text-white transition-transform duration-300 group-hover:scale-110">
                {s.initials}
              </span>
              <p className="text-sm font-semibold text-purple-950">
                {s.name}
              </p>
              <p className="text-xs text-orange-500">{s.role}</p>
              <p className="mt-4 max-w-xs text-sm italic text-gray-500">
                &ldquo;{s.quote}&rdquo;
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
