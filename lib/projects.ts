export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectDetail = {
  slug: string;
  category: "개인 프로젝트" | "팀 프로젝트";
  name: string;
  title: string;
  period: string;
  people: string;
  tech: string[];
  summary: string;
  description: string;
  contributions?: string[];
  features: string[];
  troubleshooting: {
    title: string;
    description: string;
  }[];
  links: {
    github: string;
    detail: string;
    demo?: string;
  };
};

export const projects: ProjectDetail[] = [
  {
    slug: "health-dashboard",
    category: "개인 프로젝트",
    name: "Personal Health Analytics Dashboard",
    title: "건강 기록 기반 개인 데이터 대시보드",
    period: "2026.03 ~ 진행 중",
    people: "1명",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Recharts"],
    summary:
      "건강 기록을 입력하면 홈 요약, 체중 변화 차트, 기록 관리를 한 화면에서 확인할 수 있는 개인 건강 데이터 대시보드입니다.",
    description:
      "사용자의 건강 데이터를 단순히 저장하는 데서 끝나지 않고, 요약 카드와 차트 시각화로 현재 상태를 빠르게 이해할 수 있도록 설계한 서비스입니다. 인증 보호 라우팅과 Supabase 기반 CRUD 흐름을 적용해 실제 서비스처럼 동작하는 구조를 만드는 데 집중했습니다.",
    features: [
      "로그인 후에만 접근 가능한 인증 보호 라우팅 구조 설계",
      "체중 기록 추가 / 수정 / 삭제 기능 구현",
      "최근 / 평균 / 최고 / 최저 체중 요약 카드 구성",
      "Recharts 기반 변화 추이 차트 시각화",
      "스켈레톤 UI 적용으로 로딩 중 레이아웃 흔들림 완화",
    ],
    troubleshooting: [
      {
        title: "새로고침 시 로그인 리다이렉트 문제 해결",
        description:
          "초기 사용자 상태가 복원되기 전에 인증 여부 판단이 먼저 실행되던 구조를 개선했습니다. 인증 확인 완료 전까지 보호 라우팅 판단을 지연하고 세션 복원 흐름으로 구조를 재설계해 UX 안정성을 높였습니다.",
      },
      {
        title: "대시보드 로딩 시 레이아웃 흔들림 해결",
        description:
          "데이터 로딩 전후 카드 높이와 배치가 달라지는 문제를 줄이기 위해 레이아웃을 먼저 고정한 뒤 콘텐츠 단위 스켈레톤 UI를 적용했습니다.",
      },
    ],
    links: {
      github: "https://github.com/sang-3/personal-health-dashboard",
      detail: "/projects/health-dashboard",
      demo: "https://personal-health-dashboard-sage.vercel.app/",
    },
  },
  {
    slug: "sub5",
    category: "팀 프로젝트",
    name: "Sub.5",
    title: "데이터 기반 러닝 동기 관리 서비스",
    period: "2026.01.13 ~ 2026.02.13",
    people: "5명",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "MongoDB",
      "Vercel",
    ],
    summary:
      "러닝 기록의 시각화와 목표 관리를 통해 사용자의 성장을 보여주고 지속적인 동기를 제공하는 러닝 서비스입니다.",
    description:
      "러닝 기록을 단순 저장하는 앱이 아니라, 데이터 시각화와 목표 설정을 통해 사용자의 운동 지속성을 높이는 서비스로 기획된 팀 프로젝트입니다. 로그인, 회원가입, 소셜 로그인 분기, 메인 홈을 담당하며 사용자 진입 경험 전반을 구현했습니다.",
    contributions: [
      "로그인 / 회원가입 기능 구현",
      "소셜 로그인 콜백 처리 및 인증 분기 흐름 설계",
      "메인 홈 화면 구현",
      "온보딩 연결 및 사용자 진입 플로우 정리",
    ],
    features: [
      "이메일 회원가입부터 약관 동의, 프로필 입력, 신체정보 입력까지 이어지는 온보딩 흐름 구현",
      "기존 사용자와 신규 사용자를 구분해 로그인 이후 이동 경로를 분기하는 인증 플로우 설계",
      "Zustand 및 스토리지 기반 상태 복원 구조를 적용해 새로고침 이후에도 로그인 및 온보딩 상태 유지",
      "메인 홈에서 마라톤 일정 정보, 탭 전환 UI, 주간 러닝 요약 영역 구현",
    ],
    troubleshooting: [
      {
        title: "소셜 로그인 시 기존 유저 / 신규 유저 분기 혼란 해결",
        description:
          "로그인과 회원가입 개념이 혼재되어 소셜 로그인 이후 이동 기준이 불명확했던 문제를 해결했습니다. 로그인은 인증, 회원가입은 계정 생성으로 역할을 분리하고 유저 상태에 따라 홈 또는 온보딩으로 연결되도록 플로우를 재정의했습니다.",
      },
      {
        title: "새로고침 시 로그인 상태 초기화 문제 해결",
        description:
          "인증 정보를 전역 상태에만 저장해 브라우저 새로고침 시 상태가 사라지던 문제를 토큰 및 스토리지 기반 상태 복원 로직으로 개선했습니다.",
      },
      {
        title: "Alert 반복 노출 문제 해결",
        description:
          "useEffect 실행 조건과 의존성을 분리해 특정 상황에서만 alert가 실행되도록 수정해 불필요한 반복 알림을 제거했습니다.",
      },
    ],
    links: {
      github: "https://github.com/sang-3/final-03-sub5-release",
      detail: "/projects/sub5",
      demo: "https://final-03-sub5-release-three.vercel.app/",
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
