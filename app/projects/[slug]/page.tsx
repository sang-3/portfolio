import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import { getProjectBySlug, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:py-20">
        <Link
          href="/"
          className="text-sm text-gray-500 transition-colors hover:text-gray-900"
        >
          ← 포트폴리오 홈으로
        </Link>

        <div className="mt-8 rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-medium text-gray-500">{project.category}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 text-base leading-8 text-gray-600">
            {project.description}
          </p>

          <div className="mt-8 grid gap-4 rounded-3xl border border-gray-200 bg-gray-50 p-5 sm:grid-cols-3">
            <div>
              <p className="text-sm font-medium text-gray-500">기간</p>
              <p className="mt-2 text-sm text-gray-800">{project.period}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">인원</p>
              <p className="mt-2 text-sm text-gray-800">{project.people}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">프로젝트명</p>
              <p className="mt-2 text-sm text-gray-800">{project.name}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={project.links.github} target="_blank" rel="noreferrer">
              <Button type="button">GitHub</Button>
            </a>
            {project.links.demo ? (
              <a href={project.links.demo} target="_blank" rel="noreferrer">
                <Button type="button" variant="secondary">
                  배포 링크
                </Button>
              </a>
            ) : null}
          </div>
        </div>

        {project.contributions?.length ? (
          <section className="mt-14 rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              담당 역할
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-gray-600">
              {project.contributions.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="mt-14 rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            주요 구현
          </h2>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-gray-600">
            {project.features.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm text-gray-700"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            트러블슈팅
          </h2>

          <div className="mt-8 space-y-5">
            {project.troubleshooting.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-gray-50 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
