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

const projects = [
  {
    title: "한국예탁결제원 토큰증권 운영플랫폼",
    period: "2026.06 - Present",
    description:
      "토큰증권 운영플랫폼 관리자 시스템의 UI 개선 및 신규 화면 설계를 담당했으며, React(MUI) 환경에서 UI 구현과 퍼블리싱을 수행했습니다.",
    role: "UX/UI Designer · Publisher",

    contribution: {
      uiDesign: "100%",
      publishing: "100%",
      uiImplementation: "70%",
    },

    tech: ["React", "MUI", "Adobe XD", "GitLab"],

    responsibilities: [
      "화면정의서 기반 기존 UI 개선",
      "신규 관리자 화면 UI 디자인",
      "React(MUI) 기반 UI 구현 및 퍼블리싱",
      "UI/UX 검수 및 품질 개선",
    ],

    image: "/images/project1-cover.png",
  },
  {
    title: "Blockchain Monitoring",
    description: "실시간 모니터링 대시보드",
    role: "UX/UI Design",
    tech: ["React", "MUI"],
    image: "/images/project2.png",
  },
  {
    title: "Admin System",
    description: "관리자 페이지 구축",
    role: "UI Design",
    tech: ["React", "TypeScript"],
    image: "/images/project3.png",
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
                {/* <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: "100%",
                    height: 260,
                    objectFit: "cover",
                  }}
                /> */}
                <Box
                  sx={{
                    height: 260,
                    bgcolor: "#EDEDED",
                  }}
                />

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
                    Contribution · UI Design 100% · Publishing 100%
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
