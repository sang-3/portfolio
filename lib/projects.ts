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
    name: "Personal Health Dashboard",
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
        title: "새로고침 시 로그인 페이지로 잘못 이동하던 문제 해결",
        description:
          "초기 렌더링 시 사용자 세션이 복원되기 전에 보호 라우팅이 먼저 실행되면서, 로그인 상태임에도 새로고침 시 로그인 페이지로 이동하는 문제가 있었습니다. 원인을 확인한 뒤 인증 확인이 끝난 이후에만 접근 제어가 동작하도록 흐름을 분리했습니다. 이를 통해 새로고침 이후에도 로그인 상태가 안정적으로 유지되도록 개선했습니다.",
      },
      {
        title: "auth.users와 profiles 분리 구조에서 사용자 정보 누락 문제 해결",
        description:
          "초기에는 회원가입 시 인증 계정만 생성되고, 앱에서 사용하는 profiles 테이블에는 사용자 정보가 저장되지 않는 문제가 있었습니다. 이로 인해 인증 계정과 앱 사용자 정보 관리가 분리되지 않은 상태였습니다. 회원가입 이후 profiles를 함께 생성하도록 보완하고, 누락된 프로필은 대시보드 진입 시 자동 복구되도록 개선해 사용자 정보 구조를 일관되게 정리했습니다.",
      },
      {
        title: "차트 데이터 정렬 문제 해결",
        description:
          "체중 기록 목록은 최신순으로 보여주는 것이 자연스럽지만, 차트는 시간의 흐름대로 보여줘야 해 데이터 정렬 기준이 충돌하는 문제가 있었습니다. 처음에는 같은 데이터 구조를 그대로 재사용하면서 차트 축 순서가 뒤섞이거나 흐름이 어색하게 보였습니다. 이를 해결하기 위해 리스트용 정렬과 차트용 정렬 기준을 분리하고, 차트에는 날짜 오름차순으로 가공한 데이터를 별도로 전달하도록 구조를 정리했습니다. 그 결과 기록 목록의 사용성과 차트의 가독성을 동시에 유지할 수 있었습니다.",
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
          "소셜 로그인 이후 기존 사용자와 신규 사용자의 이동 기준이 명확하지 않아, 로그인은 되었지만 어떤 화면으로 보내야 하는지 흐름이 혼재되는 문제가 있었습니다. 로그인은 인증, 회원가입은 계정 생성이라는 역할로 다시 분리하고, 기존 사용자는 홈 화면으로, 신규 사용자는 약관 동의 및 온보딩으로 연결되도록 인증 플로우를 재정의했습니다. 이를 통해 사용자 상태에 맞는 진입 흐름을 정리하고, 소셜 로그인 이후 경험을 더 안정적으로 개선했습니다.",
      },
      {
        title: "새로고침 시 로그인 상태가 초기화되던 문제 해결",
        description:
          "초기에는 인증 정보를 전역 상태에만 저장하고 있어 브라우저 새로고침 시 로그인 상태가 초기화되는 문제가 있었습니다. 이를 해결하기 위해 토큰과 스토리지 기반 복원 로직을 추가하고, 재진입 시 저장된 인증 정보를 다시 읽어오도록 구조를 보완했습니다. 그 결과 새로고침 이후에도 로그인 및 온보딩 상태를 유지할 수 있게 되어 사용자 경험을 개선했습니다.",
      },
      {
        title: "Alert가 반복적으로 노출되던 문제 해결",
        description:
          "특정 상태 변화 이후 한 번만 보여야 하는 alert가 여러 번 반복 호출되면서 사용자 경험을 해치는 문제가 있었습니다. 원인을 추적한 결과 useEffect의 의존성 배열과 실행 조건이 명확하지 않아 동일한 흐름에서 alert가 중복 실행되고 있었습니다. alert 실행 조건과 의존성을 분리해 필요한 상황에서만 동작하도록 수정했고, 불필요한 반복 알림을 제거해 화면 흐름을 더 자연스럽게 정리했습니다.",
      },
    ],
    links: {
      github: "https://github.com/sang-3/final-03-sub5-release",
      detail: "/projects/sub5",
      demo: "https://final-03-sub5-release-three.vercel.app/",
    },
  },
  {
    slug: "just-code-it-nike",
    category: "팀 프로젝트",
    name: "Just Code It : NIKE",
    title: "Nike UI/UX를 기반으로 구현한 반응형 쇼핑몰",
    period: "2025.11.11 ~ 2025.11.21",
    people: "4명",
    tech: [
      "HTML/CSS",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Figma",
      "Netlify",
    ],
    summary:
      "나이키 공식 온라인 스토어 UI/UX를 참고해 반응형 웹 기반 쇼핑몰을 구현한 팀 프로젝트입니다. 로그인/회원 인증, 상품 목록 및 상세, 위시리스트, 장바구니, 검색, 추천 상품 등 실제 커머스 서비스의 핵심 흐름을 바닐라 JavaScript, TypeScript, Tailwind CSS로 직접 구현했습니다.",
    description:
      "단순한 정적 클론이 아니라, API 기반 데이터 렌더링과 사용자 상태 변화까지 반영되는 쇼핑몰 구조를 구현한 프로젝트입니다. 저는 헤더·푸터 공통 컴포넌트와 상품 상세 페이지를 담당하며, 재사용 가능한 공통 UI 설계와 상세 페이지의 상태 동기화 흐름을 구현하는 데 집중했습니다. 특히 Web Components를 활용해 헤더와 푸터를 공통화하고, 로그인 여부에 따라 UI를 다르게 노출하도록 구성해 페이지 간 일관성과 유지보수성을 높였습니다. 또한 상품 상세 페이지에서는 서버에서 위시리스트 상태를 다시 조회해 새로고침 이후에도 찜 상태가 정확히 반영되도록 개선했습니다.",
    contributions: [
      "Web Components 기반 헤더 / 푸터 공통 컴포넌트 구현",
      "상품 상세 페이지 UI 및 기능 구현",
      "로그인 상태에 따른 헤더 UI 분기 처리",
      "상품 상세 진입 시 서버 기준 위시리스트 상태 동기화",
    ],
    features: [
      "헤더와 푸터를 공통 컴포넌트로 분리해 여러 페이지에서 재사용 가능한 구조 설계",
      "로그인 여부에 따라 회원가입 / 로그인 / 로그아웃 / 위시리스트 아이콘을 다르게 노출하는 헤더 구현",
      "상품 상세 페이지에서 썸네일 선택에 따라 대표 이미지를 변경하는 인터랙션 구현",
      "페이지 진입 시 서버에서 위시리스트 목록을 재조회해 새로고침 이후에도 정확한 찜 상태 유지",
    ],
    troubleshooting: [
      {
        title:
          "상세 페이지 위시리스트 상태가 새로고침 시 유지되지 않던 문제 해결",
        description:
          "초기에는 상세 페이지에서 위시리스트 상태를 클라이언트 내부 값에만 의존하고 있어, 새로고침 후 하트 아이콘이 실제 서버 상태와 다르게 보이는 문제가 있었습니다. 이를 해결하기 위해 페이지 진입 시 서버에서 위시리스트 목록을 다시 조회하고, 현재 상품이 포함되어 있는지 확인한 뒤 아이콘 상태를 초기화하도록 수정했습니다. 그 결과 새로고침 이후에도 위시리스트 상태가 정확히 유지되어 사용자 경험의 일관성을 높일 수 있었습니다.",
      },
      {
        title: "공통 헤더에서 로그인 상태에 따라 UI가 일관되지 않던 문제 개선",
        description:
          "여러 페이지에서 공통 헤더를 사용하다 보니 로그인 여부에 따라 보여줘야 하는 버튼과 아이콘이 서로 다르게 보일 수 있는 문제가 있었습니다. 이를 해결하기 위해 헤더 컴포넌트 내부에서 토큰 존재 여부를 기준으로 회원가입 / 로그인 / 로그아웃 / 위시리스트 아이콘 노출을 한 번에 제어하도록 구조를 정리했습니다. 이를 통해 페이지마다 중복 로직을 두지 않고도 인증 상태에 맞는 UI를 일관되게 유지할 수 있었습니다.",
      },
    ],
    links: {
      github:
        "https://github.com/sang-3/vanilla-09-justCodeIt?tab=readme-ov-file",
      detail: "/projects/just-code-it-nike",
      demo: "https://just-code-it-09.netlify.app/",
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
