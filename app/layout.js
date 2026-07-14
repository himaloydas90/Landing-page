import "./globals.css";

export const metadata = {
  title: "Lateral — Powerful services for powerful applications",
  description:
    "Lateral is a SaaS landing page built with an intelligent BEM interface, responsive layout and modern design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-[#1c1530]">
        {children}
      </body>
    </html>
  );
}
