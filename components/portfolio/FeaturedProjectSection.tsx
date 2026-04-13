import Link from "next/link";
import Button from "@/components/ui/Button";
import { projects } from "@/lib/projects";

export default function FeaturedProjectSection() {
  return (
    <section
      id="project"
      className="section-anchor border-t border-gray-200 bg-white"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
              Project
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
              개인 프로젝트와 팀 프로젝트를 함께 정리했습니다.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-gray-600">
              인증 흐름, 상태 복원, 데이터 시각화, 서비스형 UI 경험을 보여줄 수
              있는 프로젝트 입니다.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group rounded-[28px] border border-gray-200 bg-gray-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-gray-900">
                    {project.title}
                  </h3>
                </div>
                <span className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs text-gray-600">
                  {project.name}
                </span>
              </div>

              <p className="mt-5 text-sm leading-7 text-gray-600">
                {project.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={project.links.github} target="_blank" rel="noreferrer">
                  <Button type="button" variant="secondary">
                    GitHub
                  </Button>
                </a>

                <Link href={project.links.detail}>
                  <Button type="button">프로젝트 상세 보기</Button>
                </Link>

                {project.links.demo ? (
                  <a href={project.links.demo} target="_blank" rel="noreferrer">
                    <Button type="button" variant="secondary">
                      배포 링크
                    </Button>
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
