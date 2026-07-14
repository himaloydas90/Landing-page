const SocialIcon = ({ path }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d={path} />
  </svg>
);

const socials = [
  {
    label: "Twitter",
    path: "M23 4.5c-.8.35-1.6.6-2.5.7.9-.55 1.6-1.4 1.9-2.45-.85.5-1.8.85-2.8 1.05a4.4 4.4 0 0 0-7.5 4c-3.65-.2-6.9-1.95-9.1-4.6-.4.65-.6 1.4-.6 2.2 0 1.5.75 2.85 1.9 3.6-.7 0-1.35-.2-1.9-.5v.05c0 2.1 1.5 3.85 3.45 4.25-.35.1-.75.15-1.15.15-.3 0-.55-.05-.8-.1.55 1.75 2.15 3 4.05 3.05A8.8 8.8 0 0 1 1 19.5 12.4 12.4 0 0 0 7.7 21.5c8 0 12.4-6.65 12.4-12.4v-.55c.85-.6 1.6-1.4 2.2-2.3z",
  },
  {
    label: "Facebook",
    path: "M13.5 21v-7.5H16l.4-3H13.5V8.4c0-.9.25-1.5 1.55-1.5H16.5V4.3c-.25-.05-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6V10.5H8.4v3h2.5V21h2.6z",
  },
  {
    label: "LinkedIn",
    path: "M6.94 8.5H3.56V20h3.38V8.5zM5.25 3.5a1.95 1.95 0 1 0 0 3.9 1.95 1.95 0 0 0 0-3.9zM20.5 20h-3.37v-5.93c0-1.41-.03-3.23-1.97-3.23-1.97 0-2.27 1.54-2.27 3.13V20H9.5V8.5h3.24v1.57h.05c.45-.85 1.55-1.75 3.2-1.75 3.42 0 4.05 2.25 4.05 5.18V20z",
  },
];

const columns = [
  {
    title: "Company",
    links: ["About", "Careers", "Awards", "Locations"],
  },
  {
    title: "Products",
    links: ["Integrations", "API", "Pricing", "Documentation"],
  },
  {
    title: "Support",
    links: ["Statistics", "FAQ", "Guides", "Release Notes"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-purple-950 pb-10 pt-16 text-white/70">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-semibold tracking-[0.2em] text-white">
              LATERAL
            </p>
            <p className="mt-4 max-w-xs text-xs leading-relaxed">
              Copyright &copy; 2026 Lateral. All Rights Reserved. Proudly
              made in BD.
            </p>
            <div className="mt-5 flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="btn-pop cursor-pointer hover:text-white"
                >
                  <SocialIcon path={s.path} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-white">{col.title}</p>
              <ul className="mt-4 space-y-2.5 text-xs">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
