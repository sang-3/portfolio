"use client";

import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Project", href: "#project" },
  { label: "Contact", href: "#contact" },
];

export default function PortfolioHeader() {
  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    const target = document.querySelector(href);

    if (!target) return;

    const top =
      target.getBoundingClientRect().top + window.scrollY - 76;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-gray-900 transition-transform duration-300 hover:-translate-y-0.5"
        >
          Hong Sang Yu
        </Link>

        <nav className="flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 p-1 text-sm text-gray-600 shadow-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleSmoothScroll(event, item.href)}
              className="rounded-full px-4 py-2 transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
