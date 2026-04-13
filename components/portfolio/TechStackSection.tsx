const stackGroups = [
  {
    title: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Styling & UI",
    items: ["Tailwind CSS", "CSS Modules", "Recharts"],
  },
  {
    title: "State / Data",
    items: ["Context API", "Supabase", "Zustand", "MongoDB"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Vercel", "Figma"],
  },
];

export default function TechStackSection() {
  return (
    <section id="stack" className="section-anchor border-t border-gray-200 bg-gray-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
          Stack
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
          서비스를 구현할 때 자주 사용하는 기술입니다.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {stackGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-gray-500">{group.title}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
