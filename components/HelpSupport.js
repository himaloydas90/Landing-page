import Reveal from "./Reveal";

export default function HelpSupport() {
  return (
    <section id="contact" className="bg-gray-50 px-6 pb-24 pt-8 lg:px-10">
      <Reveal
        duration={800}
        className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-orange-500 px-8 py-14 sm:px-16"
      >
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Help &amp; Support
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/85">
              Your issue is our main priority. Our 24/7 support team is here
              to help with your product in a quick way. Have a simple
              question about our product? Send us a message and one of our
              online experts will be right there to assist you in solving
              your questions.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-pop flex-none whitespace-nowrap rounded-full bg-purple-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-purple-950"
          >
            Get in touch now
          </a>
        </div>
      </Reveal>
    </section>
  );
}
