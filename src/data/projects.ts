import aiPlatformProposalCover from "../assets/images/Thumbnail/ai-platform-proposal-cover.svg";
import drugAiAdminCover from "../assets/images/Thumbnail/drugai-admin-cover.svg";
import drugAiCover from "../assets/images/Thumbnail/drugai-cover.svg";
import eaxdxManualCover from "../assets/images/Thumbnail/eaxdx-manual-cover.svg";
import edspCover from "../assets/images/Thumbnail/edsp-cover.svg";
import hdrcCover from "../assets/images/Thumbnail/hdrc-cover.svg";
import ibkMobileIdCover from "../assets/images/Thumbnail/ibk-mobile-id-cover.svg";
import kastleCover from "../assets/images/Thumbnail/kastle-cover.svg";
import kdataCover from "../assets/images/Thumbnail/kdata-cover.svg";
import kolmarCover from "../assets/images/Thumbnail/kolmar-cover.svg";
import ksdCover from "../assets/images/Thumbnail/ksd-cover.svg";
import smdcCover from "../assets/images/Thumbnail/smdc-cover.svg";
import triptalkCover from "../assets/images/Thumbnail/triptalk-cover.svg";
import ypsilonCover from "../assets/images/Thumbnail/ypsilon-cover.svg";

const projects = [
  {
    id: "ksd",

    title: "한국예탁결제원 토큰증권 운영플랫폼",

    period: "2026.06 - Present",

    startDate: "2026-06",

    description:
      "토큰증권 운영플랫폼 관리자 시스템의 UI 개선 및 React(MUI) 기반 화면 구현을 담당했습니다.",

    image: ksdCover,

    featured: true,

    category: "company",

    section: "case-study",

    company: "에이다루트",

    client: "한국예탁결제원",

    role: "UX/UI Designer · Publisher",

    contribution: {
      uiDesign: "100%",
      publishing: "100%",
    },

    tech: ["React", "MUI", "Adobe XD", "GitLab"],

    resources: {
      visibility: "nda",
    },

    responsibilities: [
      "화면정의서 기반 기존 UI 개선",
      "신규 관리자 화면 UI 디자인",
      "React(MUI) 기반 UI 구현 및 퍼블리싱",
      "UI/UX 검수 및 품질 개선",
    ],
  },
  {
    id: "kastle",

    title: "KASTLE",

    period: "2026.04 - 2026.05",

    startDate: "2026-04",

    description:
      "로그인 및 메인 화면을 브랜드 톤앤매너에 맞춰 리뉴얼하고 UI를 구현했습니다.",

    image: kastleCover,

    featured: true,

    category: "company",

    projectType: "team",

    section: "case-study",

    company: "에이다루트",

    client: "KASTLE",

    role: "UX/UI Designer · Publisher",

    contribution: {
      uiDesign: "100%",
      publishing: "100%",
      uiImplementation: "100%",
    },

    tech: ["Figma", "React", "TypeScript", "Tailwind CSS", "GitLab"],

    resources: {
      visibility: "public",

      figma: {
        title: "View Figma",
        url: "https://www.figma.com/design/yxp%EB%A6%AC%EB%89%B4%EC%node-id=01&t=XHlpwOC65yOry3GT1",
        note: "포트폴리오 공개를 위해 민감한 정보 및 내부 화면은 일부 수정·블러 처리하였습니다.",
      },
    },

    responsibilities: [
      "로그인 화면 UI 리뉴얼",
      "메인 화면 UI 리뉴얼",
      "브랜드 톤앤매너를 반영한 UI 디자인",
      "React · TypeScript · Tailwind CSS 기반 화면 구현 및 퍼블리싱",
    ],
  },
  {
    id: "kolmar",

    title: "한국콜마 AI 서비스",

    period: "2026.03 - 2026.04",

    startDate: "2026-03",

    description:
      "기존 디자인 가이드와 화면설계서를 기반으로 AI 서비스의 신규 페이지 UI/UX를 설계했습니다.",

    image: kolmarCover,

    featured: true,

    category: "company",

    section: "case-study",

    company: "에이다루트",

    client: "한국콜마",

    role: "UX/UI Designer",

    contribution: {
      uiDesign: "100%",
    },

    tech: ["Figma"],

    resources: {
      visibility: "public",

      figma: {
        title: "View Figma",
        url: "https://www.figma.com/design/IXRaAIDesign?node-id=01&t=KWngRj51Q9qRm7561",
        note: "포트폴리오 공개를 위해 민감한 정보 및 내부 화면은 일부 수정·블러 처리하였습니다.",
      },
    },

    responsibilities: [
      "기존 디자인 가이드 분석 및 적용",
      "화면설계서 기반 신규 페이지 UI 설계",
      "디자인 시스템을 반영한 화면 디자인",
    ],
  },
  {
    id: "hdrc",

    title: "HDRC",

    period: "2023.07 - 2023.08",

    startDate: "2023-07",

    description:
      "러닝 정보를 공유하는 커뮤니티 플랫폼으로, UI/UX 설계부터 프론트엔드 개발까지 전 과정을 수행했습니다.",

    image: hdrcCover,

    featured: true,

    category: "personal",

    section: "case-study",

    role: "UX/UI Designer · Frontend Developer",

    contribution: {
      uiDesign: "100%",
      frontendDevelopment: "100%",
    },

    tech: ["React", "TypeScript", "Firebase", "GitHub"],

    resources: {
      visibility: "public",

      website: {
        title: "Live Website",
        url: "https://hdrc.vercel.app/",
      },

      github: {
        title: "GitHub",
        url: "https://github.com/leesh2985/Portfolio",
      },
    },

    responsibilities: [
      "커뮤니티 플랫폼 UI/UX 설계",
      "React 기반 프론트엔드 개발",
      "Firebase 연동",
      "컴포넌트 설계 및 화면 구현",
    ],
  },
  {
    id: "ai-platform-template",

    title: "AI 플랫폼 구축 제안 템플릿",

    period: "2026.04 - 2026.04",

    startDate: "2026-04",

    description:
      "AI 플랫폼 구축 제안 발표용 PowerPoint 템플릿을 제작했습니다. 발표 자료의 일관성과 가독성을 높이기 위해 공통 레이아웃과 디자인 시스템을 구성했습니다.",

    image: aiPlatformProposalCover,

    featured: false,

    category: "company",

    section: "case-study",

    company: "에이다루트",

    client: "Internal",

    role: "UI Designer",

    contribution: {
      uiDesign: "100%",
      templateDesign: "100%",
    },

    tech: ["PowerPoint"],

    responsibilities: [
      "표지·목차·본문 등 공통 슬라이드 템플릿 제작",
      "발표 자료의 일관성을 고려한 레이아웃 설계",
      "컬러, 타이포그래피 등 스타일 가이드 구성",
      "반복 사용 가능한 PPT 템플릿 제작",
    ],
  },
  {
    id: "eaxdx-manual",

    title: "eAXDX 매뉴얼 리디자인",

    period: "2026.04 - 2026.04",

    startDate: "2026-04",

    description:
      "기존 eAXDX 사용자 매뉴얼의 가독성과 시각적 일관성을 개선하기 위해 레이아웃과 스타일을 재구성한 리디자인 프로젝트입니다.",

    image: eaxdxManualCover,

    featured: false,

    category: "company",

    section: "case-study",

    company: "에이다루트",

    client: "eAXDX",

    role: "UI Designer",

    contribution: {
      uiDesign: "100%",
      documentDesign: "100%",
    },

    tech: ["PowerPoint"],

    responsibilities: [
      "기존 사용자 매뉴얼 리디자인",
      "콘텐츠 가독성을 고려한 정보 구조 및 레이아웃 개선",
      "표지·목차·본문 등 공통 템플릿 구조 개선",
      "공통 스타일 가이드 기반 문서 디자인 구성",
    ],
  },
  {
    id: "kdata-acceptance",

    title: "KDATA 위촉수락서",

    period: "2026.02 - 2026.03",

    startDate: "2026-02",

    description:
      "KDATA 위촉수락서 관리를 위한 모바일 웹 프로젝트로, 사용자 입력 흐름을 고려한 UI를 설계하고 퍼블리싱까지 담당했습니다.",

    image: kdataCover,

    featured: false,

    category: "company",

    section: "case-study",

    company: "에이다루트",

    client: "KDATA",

    role: "UX/UI Designer · Publisher",

    contribution: {
      uiDesign: "100%",
      publishing: "100%",
    },

    tech: ["Figma", "HTML", "CSS", "JavaScript"],

    resources: {
      visibility: "public",

      figma: {
        title: "View Figma",
        url: "https://www.figma.com/design/hSN%EC%9C%84%EC%B4%89%EC%node-id=01&t=LWS4mkwX2bzPaLVs-1.",
        note: "포트폴리오 공개를 위해 민감한 정보 및 내부 화면은 일부 수정·블러 처리하였습니다.",
      },
    },

    responsibilities: [
      "기존 UI를 기반으로 화면 개선",
      "기획 요구사항에 따른 신규 페이지 UI 설계 및 디자인",
      "디자인 검토 후 확정 화면 퍼블리싱",
      "사용자 입력 흐름을 고려한 모바일 웹 UI 구현",
    ],
  },
  {
    id: "edsp",

    title: "EDSP",

    period: "2026.01 - 2026.02",

    startDate: "2026-01",

    description:
      "내부망 환경에서 운영되는 고객사 전용 관리자 플랫폼의 UI를 개선하고 운영 및 유지보수를 수행하며 화면의 일관성과 사용성을 향상시킨 프로젝트입니다.",

    image: edspCover,

    featured: false,

    category: "company",

    section: "case-study",

    company: "에이다루트",

    client: "EDSP",

    role: "UI Designer",

    contribution: {
      uiDesign: "100%",
    },

    tech: ["Figma", "HTML", "CSS"],

    resources: {
      visibility: "public",

      figma: {
        title: "View Figma",
        url: "https://www.figma.com/design/GvN%EC%9D%B4%EB%85%B8%EC%node-id=08153&t=vFjf0db6megnhF021",
        note: "포트폴리오 공개를 위해 민감한 정보 및 내부 화면은 일부 수정·블러 처리하였습니다.",
      },
    },

    responsibilities: [
      "기존 관리자 플랫폼 UI 개선 및 유지보수",
      "메인 페이지 중심의 화면 레이아웃 개선",
      "제한된 수정 환경에서 UI 구조 및 스타일 정리",
      "화면의 일관성과 가독성 향상",
    ],
  },
  {
    id: "ibk-mobile-id",

    title: "IBK 모바일 신분증",

    period: "2026.01 - 2026.01",

    startDate: "2026-01",

    description:
      "IBK 모바일 신분증 서비스 기획안을 기반으로 사용자 흐름을 분석하고, 메인 및 서브 화면의 UI/UX를 설계한 프로젝트입니다.",

    image: ibkMobileIdCover,

    featured: false,

    category: "company",

    section: "case-study",

    company: "에이다루트",

    client: "IBK기업은행",

    role: "UX/UI Designer",

    contribution: {
      mainPageDesign: "100%",
      subPageDesign: "Collaborated",
    },

    tech: ["Figma"],

    resources: {
      visibility: "public",

      figma: {
        title: "View Figma",
        url: "https://www.figma.com/design/TNt%EB%AA%A8%EB%B0%94%EC%node-id=01&t=vFjf0db6megnhF021",
        note: "포트폴리오 공개를 위해 민감한 정보 및 내부 화면은 일부 수정·블러 처리하였습니다.",
      },
    },

    responsibilities: [
      "서비스 기획안 분석 및 사용자 흐름 설계",
      "메인 페이지 UI/UX 설계 및 핵심 화면 구성",
      "서브 페이지 UI 설계 협업",
      "화면 간 일관성을 고려한 UI 디자인",
    ],
  },
  {
    id: "drug-ai-admin",

    title: "Drug.AI Admin",

    period: "2025.10 - 2026.01",

    startDate: "2025-10",

    description:
      "Drug.AI 관리자용 웹 플랫폼 프로젝트로, 데이터 관리와 모니터링을 위한 UI를 구현하고 데이터 흐름을 고려한 화면 구성을 통해 관리 효율성을 향상시켰습니다.",

    image: drugAiAdminCover,

    featured: false,

    category: "company",

    section: "case-study",

    company: "에이다루트",

    client: "Drug.AI",

    role: "UX/UI Designer · Publisher",

    contribution: {
      uiDesign: "100%",
      publishing: "100%",
    },

    tech: ["Figma", "HTML", "CSS", "Git", "GitLab"],

    resources: {
      visibility: "public",

      figma: {
        title: "View Figma",
        url: "https://www.figma.com/design/8PJdrug-ai-admin?node-id=01&t=tqKbUrMbHNiWUQ8W1",
        note: "포트폴리오 공개를 위해 민감한 정보 및 내부 화면은 일부 수정·블러 처리하였습니다.",
      },
    },

    responsibilities: [
      "메인 파이프라인 화면 UI 설계 및 구현",
      "모니터링 기능을 위한 신규 페이지 설계 및 구현",
      "데이터 흐름을 고려한 관리자 화면 구성",
      "서브 페이지 UI 협업 및 화면 일관성 유지",
    ],
  },
  {
    id: "drug-ai",

    title: "Drug.AI",

    period: "2025.10 - 2026.01",

    startDate: "2025-10",

    description:
      "고객사 전용 데이터 탐색 웹 서비스로, 챗봇 인터페이스와 데이터 시각화 기반 Viewer의 UI를 구현하고 사용자 경험 향상을 위한 기능 개선 및 운영을 수행했습니다.",

    image: drugAiCover,

    featured: false,

    category: "company",

    section: "case-study",

    company: "에이다루트",

    client: "Drug.AI",

    role: "UX/UI Designer · Frontend Developer",

    contribution: {
      uiDesign: "100%",
      frontendDevelopment: "100%",
    },

    tech: ["React", "TypeScript", "MUI", "Figma", "Git", "GitLab"],

    resources: {
      visibility: "public",

      figma: {
        title: "View Figma",
        url: "https://www.figma.com/design/CsLdrug-ai?node-id=560&t=XNnUUF91NHmztIzI 1",
        note: "포트폴리오 공개를 위해 민감한 정보 및 내부 화면은 일부 수정·블러 처리하였습니다.",
      },
    },

    responsibilities: [
      "React(MUI) 기반 UI 구현 및 기능 개발",
      "기존 UI 개선 및 신규 기능 구현",
      "다크 테마 기반 UI를 밝은 테마로 리디자인",
      "질병 정보 복사 기능 구현",
      "질병 탐색 모드 UI 설계 및 구현",
      "데이터 표현을 위한 Table UI 설계",
      "고객사 요청사항 반영 및 운영 유지보수",
    ],
  },
  {
    id: "smdc",

    title: "SMDC",

    period: "2025.08 - 2025.10",

    startDate: "2025-08",

    description:
      "새만금 자율운송 마켓플레이스 운영 프로젝트로, 기존 UI를 개선하고 신규 페이지를 설계·구현하며 서비스의 사용성과 완성도를 지속적으로 향상시켰습니다.",

    image: smdcCover,

    featured: false,

    category: "company",

    section: "case-study",

    company: "에이다루트",

    client: "SMDC",

    role: "UX/UI Designer · Publisher",

    contribution: {
      uiDesign: "100%",
      publishing: "100%",
    },

    tech: ["Figma", "Git", "GitLab", "Material Icons"],

    resources: {
      visibility: "public",

      website: {
        title: "Live Website",
        url: "https://smdc.jiat.re.kr/main/pageMain.do",
      },

      figma: {
        title: "View Figma",
        url: "https://www.figma.com/design/Tdc%EB%8D%B0%EC%9D%B4%ED%node-id=01&t=pycRanDlt1bpmS1A1",
      },
    },

    responsibilities: [
      "기존 UI 개선 및 운영·유지보수",
      "신규 페이지 UI 설계 및 화면 구성",
      "로고, 아이콘, 스플래시 화면 등 서비스 디자인 제작",
      "반응형 UI 적용 및 다양한 디바이스 대응",
      "웹 접근성을 고려한 UI 개선",
      "고객사 피드백을 반영한 콘텐츠 구조 및 레이아웃 개선",
    ],

    highlights: [
      "메인 페이지 UI 개선",
      "신규 서비스 페이지 설계",
      "스플래시 화면 디자인",
      "로고 및 아이콘 제작",
      "반응형 레이아웃 적용",
    ],
  },
  {
    id: "ypsilon",

    title: "YPSILON",

    period: "2024.02 - 2025.05",

    startDate: "2025-02",

    description:
      "환경 데이터 관리 및 시각화를 위한 플랫폼 구축 프로젝트로, UX 기획부터 UI 설계, 퍼블리싱, 프론트엔드 개발까지 전 과정을 수행했습니다.",

    image: ypsilonCover,

    featured: false,

    category: "company",

    section: "case-study",

    company: "에코씨앤에이",

    client: "YPSILON",

    role: "UX/UI Designer · Frontend Developer",

    contribution: {
      uxPlanning: "100%",
      uiDesign: "100%",
      publishing: "100%",
      frontendDevelopment: "100%",
    },

    tech: [
      "Figma",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Apache ECharts",
      "JointJS",
    ],

    resources: {
      visibility: "public",

      figma: {
        title: "View Figma",
        url: "https://www.figma.com/design/Wn1node-id=01&m=dev&t=bB86MLPl5T4kuvhp-1",
        note: "포트폴리오 공개를 위해 민감한 정보 및 내부 화면은 일부 수정·블러 처리하였습니다.",
      },
    },

    responsibilities: [
      "UX 기획 및 사용자 흐름 설계",
      "와이어프레임 및 UI 디자인",
      "HTML/CSS/JavaScript 기반 퍼블리싱 및 프론트엔드 개발",
      "환경 데이터 시각화 화면 설계 및 구현",
      "사용자 피드백 기반 UI/UX 개선",
      "사용자 매뉴얼 제작 및 초기 사용자 교육 지원",
    ],
  },
  {
    id: "triptalk",

    title: "TripTalk",

    period: "2023.09 - 2023.11",

    startDate: "2023-09",

    description:
      "국내 여행의 추억과 경험을 공유하는 커뮤니티 플랫폼으로, React 기반 UI/UX 설계와 프론트엔드 개발을 협업으로 진행한 프로젝트입니다.",

    image: triptalkCover,

    featured: false,

    category: "personal",

    section: "case-study",

    projectType: "team",

    role: "UX/UI Designer · Frontend Developer",

    contribution: {
      uiDesign: "30%",
      frontendDevelopment: "30%",
    },

    tech: [
      "React",
      "TypeScript",
      "Styled Components",
      "Redux",
      "Axios",
      "Vite",
    ],

    resources: {
      visibility: "public",

      website: {
        title: "Live Website",
        url: "https://triptalk.vercel.app/",
      },

      notion: {
        title: "Project Documentation",
        url: "https://antique-koala-cd8.notion.site/DEMO-DAY-TRIPTALK-0bd8366d33de4d7f85ea848a0f514bb0",
      },

      github: {
        title: "GitHub",
        url: "https://github.com/triptalk4/triptalk-frontend",
      },
    },

    responsibilities: [
      "사용자 흐름을 고려한 UI/UX 설계",
      "리뷰맵 및 내 정보 화면 개발",
      "게시글 상세·수정 페이지 UI 구현",
      "프로젝트 전반의 UI/UX 개선 및 구조 수정",
    ],
  },
];

export default projects;
