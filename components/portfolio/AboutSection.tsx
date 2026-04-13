export default function AboutSection() {
  return (
    <section id="about" className="section-anchor border-t border-gray-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
            About
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
            기능 구현을 넘어, 흐름이 자연스러운 서비스를 만듭니다.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-600">
            단순히 화면을 구현하는 것보다 사용자가 어떤 흐름으로 서비스를
            이용하는지, 상태가 어떻게 관리되어야 안정적으로 동작하는지에 더
            관심이 많습니다. 개인 프로젝트에서는 건강 데이터 대시보드 구조와
            인증 보호 흐름을 설계했고, 팀 프로젝트에서는 로그인·회원가입·메인
            홈을 담당하며 사용자 진입 경험을 다듬었습니다.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
            <p className="text-sm font-medium text-gray-500">Focus</p>
            <p className="mt-3 text-lg font-semibold text-gray-900">
              인증 흐름과 상태 복원
            </p>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              로그인, 온보딩, 세션 복원처럼 실제 사용자 흐름에 직접 영향을 주는
              구조를 안정적으로 설계합니다.
            </p>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
            <p className="text-sm font-medium text-gray-500">Approach</p>
            <p className="mt-3 text-lg font-semibold text-gray-900">
              데이터 중심 UI
            </p>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              카드, 차트, 요약 영역을 통해 사용자가 핵심 정보를 빠르게 이해할
              수 있는 인터페이스를 지향합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
