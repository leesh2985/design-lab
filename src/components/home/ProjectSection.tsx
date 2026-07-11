import {
  Box,
  // Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import ksdCover from "../../assets/images/ksd-cover.svg";
import kastleCover from "../../assets/images/kastle-cover.svg";
import kolmarCover from "../../assets/images/kolmar-cover.svg";

const projects = [
  {
    title: "한국예탁결제원 토큰증권 운영플랫폼",
    period: "2026.06 - Present",
    description:
      "토큰증권 운영플랫폼 관리자 시스템의 UI 개선 및 React(MUI) 기반 화면 구현을 담당했습니다.",
    role: "UX/UI Designer · Publisher",

    contribution: {
      uiDesign: "100%",
      publishing: "100%",
    },

    tech: ["React", "MUI", "Adobe XD", "GitLab"],

    responsibilities: [
      "화면정의서 기반 기존 UI 개선",
      "신규 관리자 화면 UI 디자인",
      "React(MUI) 기반 UI 구현 및 퍼블리싱",
      "UI/UX 검수 및 품질 개선",
    ],

    image: ksdCover,
  },
  {
    title: "KASTLE",
    period: "2026.04 - 2026.05",
    description:
      "로그인 및 메인 화면을 브랜드 톤앤매너에 맞춰 리뉴얼하고 UI를 구현했습니다.",

    role: "UX/UI Designer · Publisher",

    contribution: {
      uiDesign: "100%",
      publishing: "100%",
      uiImplementation: "100%",
    },

    tech: ["Figma", "React", "TypeScript", "Tailwind CSS", "GitLab"],

    responsibilities: [
      "로그인 화면 UI 리뉴얼",
      "메인 화면 UI 리뉴얼",
      "브랜드 톤앤매너를 반영한 UI 디자인",
      "React · TypeScript · Tailwind CSS 기반 화면 구현 및 퍼블리싱",
    ],

    image: kastleCover,
  },
  {
    title: "한국콜마 AI 서비스",
    period: "2026.03 - 2026.04",
    description:
      "기존 디자인 가이드와 화면설계서를 기반으로 AI 서비스의 신규 페이지 UI/UX를 설계했습니다.",

    role: "UX/UI Designer",

    contribution: {
      uiDesign: "100%",
    },

    tech: ["Figma"],

    responsibilities: [
      "기존 디자인 가이드 분석 및 적용",
      "화면설계서 기반 신규 페이지 UI 설계",
      "디자인 시스템을 반영한 화면 디자인",
    ],

    image: kolmarCover,
  },
  {
    title: "HDRC",
    period: "2023.07 - 2023.08",
    description:
      "러닝 정보를 공유하는 커뮤니티 플랫폼으로, UI/UX 설계부터 프론트엔드 개발까지 전 과정을 수행했습니다.",

    role: "UX/UI Designer · Frontend Developer",

    contribution: {
      uiDesign: "100%",
      frontendDevelopment: "100%",
    },

    tech: ["React", "TypeScript", "Firebase", "GitHub"],

    responsibilities: [
      "커뮤니티 플랫폼 UI/UX 설계",
      "React 기반 프론트엔드 개발",
      "Firebase 연동",
      "컴포넌트 설계 및 화면 구현",
    ],

    image: "",
  },
];

const ProjectSection = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 10, md: 15 },
        bgcolor: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            color: "#E7B24A",
            letterSpacing: ".2em",
            fontWeight: 700,
            mb: 2,
          }}
        >
          FEATURED PROJECTS
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 800,
            mb: 2,
          }}
        >
          Selected Works.
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            mb: 8,
          }}
        >
          대표 프로젝트를 소개합니다.
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid key={project.title} size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={0}
                sx={{
                  overflow: "hidden",
                  borderRadius: 4,
                  border: "1px solid #ECECEC",
                  transition: ".25s",

                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 18px 40px rgba(0,0,0,.08)",
                  },
                }}
              >
                {/* 이미지 */}
                {project.image ? (
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: "100%",
                      height: 260,
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      height: 260,
                      bgcolor: "#EDEDED",
                    }}
                  />
                )}

                {/* 내용 */}
                <Stack spacing={2} sx={{ p: 4 }}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "1.5rem",
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: ".9rem",
                      color: "#888",
                      fontWeight: 500,
                    }}
                  >
                    {project.period}
                  </Typography>

                  <Typography color="text.secondary">
                    {project.description}
                  </Typography>

                  <Stack direction="row" spacing={1}>
                    {project.tech.map((tech) => (
                      <Chip key={tech} label={tech} size="small" />
                    ))}
                  </Stack>

                  <Typography
                    sx={{
                      color: "text.secondary",
                    }}
                  >
                    {project.role}
                  </Typography>

                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: ".9rem",
                    }}
                  >
                    {Object.entries(project.contribution)
                      .map(([key, value]) => `${key} ${value}`)
                      .join(" · ")}
                  </Typography>

                  {/* <Button
                    sx={{
                      mt: 2,
                      alignSelf: "flex-start",
                    }}
                  >
                    View Case Study →
                  </Button> */}
                  <Typography
                    sx={{
                      mt: 2,
                      fontWeight: 700,
                      color: "#0F172A",
                      cursor: "pointer",

                      "&:hover": {
                        color: "#E7B24A",
                      },
                    }}
                  >
                    View Case Study →
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectSection;
