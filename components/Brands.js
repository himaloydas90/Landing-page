import Reveal from "./Reveal";

const brands = ["SINDEVO", "MOBLEY", "LATERAL", "BLIX", "templateX"];

export default function Brands() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-14 gap-y-6 px-6 lg:px-10">
        {brands.map((b, i) => (
          <Reveal key={b} delay={i * 80} duration={500}>
            <span className="font-display text-lg font-semibold tracking-wide text-gray-300 transition-colors duration-300 hover:text-orange-500">
              {b}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
