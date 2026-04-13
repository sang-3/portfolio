import Link from "next/link";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col px-4 py-24 sm:py-28">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
        Frontend Developer
      </p>

      <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-6xl">
        사용자 흐름과 상태 관리 구조를
        <br className="hidden sm:block" />
        중심으로 설계하는 프론트엔드 개발자입니다.
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
        인증 흐름, 데이터 시각화, 상태 복원 경험을 바탕으로 사용자가 실제로
        사용하는 서비스 형태의 웹 애플리케이션을 구현합니다.
      </p>

      <div className="mt-9 flex flex-wrap gap-3">
        <Link href="#project">
          <Button type="button">프로젝트 보기</Button>
        </Link>

        <a href="https://github.com/sang-3" target="_blank" rel="noreferrer">
          <Button type="button" variant="secondary">
            GitHub
          </Button>
        </a>
      </div>
    </section>
  );
}
