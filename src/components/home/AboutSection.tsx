import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";

const strengths = [
  {
    title: "UX/UI Design",
    desc: "사용자 중심의 인터페이스 설계와 서비스 경험 디자인",
  },
  {
    title: "UI Publishing",
    desc: "디자인 의도를 실제 서비스에 구현하며 완성도를 높입니다.",
  },
  {
    title: "Design System",
    desc: "일관된 컴포넌트와 디자인 시스템 구축",
  },
  {
    title: "Collaboration",
    desc: "Git 기반 협업 및 개발자와의 원활한 커뮤니케이션",
  },
];

const AboutSection = () => {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 10, md: 15 },
        bgcolor: "#F8FAFC",
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          sx={{
            color: "#E7B24A",
            fontWeight: 700,
            letterSpacing: "0.2em",
            mb: 2,
          }}
        >
          ABOUT
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 800,
            mb: 8,
          }}
        >
          Designing Better Experiences.
        </Typography>

        <Grid container spacing={8}>
          {/* Left */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: 700,
                lineHeight: 1.6,
                mb: 3,
              }}
            >
              사용자의 경험을
              <br />더 쉽고 자연스럽게 만듭니다.
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                lineHeight: 2,
              }}
            >
              사용자의 관점에서 문제를 이해하고, 직관적이고 일관된 사용자 경험을
              설계하는 것을 중요하게 생각합니다.
              <br />
              <br />
              UX/UI 디자인부터 디자인 시스템, 퍼블리싱까지 경험하며, 디자인
              의도가 서비스에 자연스럽게 반영될 수 있도록 개발자와의 협업을
              중요하게 생각합니다.
            </Typography>
          </Grid>

          {/* Right */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={3}>
              {strengths.map((item) => (
                <Grid key={item.title} size={{ xs: 12, sm: 6 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: "100%",
                      border: "1px solid #ECECEC",
                      borderRadius: 3,
                      transition: ".25s",

                      "&:hover": {
                        transform: "translateY(-6px)",
                        borderColor: "#E7B24A",
                        boxShadow: "0 15px 40px rgba(0,0,0,.08)",
                      },
                    }}
                  >
                    <Stack spacing={2}>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: "1.1rem",
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.8,
                        }}
                      >
                        {item.desc}
                      </Typography>
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
