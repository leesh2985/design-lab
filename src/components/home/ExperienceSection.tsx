import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const experiences = [
  {
    period: "2025.06 - Present",
    company: "㈜에이다루트 (구 ㈜씨씨미디어서비스)",
    team: "UX Team",
    role: "UX/UI Designer",
    description:
      "다양한 산업 분야의 프로젝트에서 기획안과 요구사항을 기반으로 UI 구현 및 퍼블리싱을 수행했으며, UI/UX 품질 개선과 운영 지원을 담당했습니다.",
    achievement: [
      "기획안 및 요구사항 기반 UI 구현 및 퍼블리싱",
      "개발 완료 화면 UI/UX 검수 및 품질 개선",
      "사용자 및 고객사 요구사항을 반영한 UI 개선",
      "운영 중 UI 이슈 대응 및 유지보수",
      "기획·개발 조직과의 협업을 통한 UI 품질 향상",
    ],
  },
  {
    period: "2024.02 - 2025.05",
    company: "㈜에코씨앤에이",
    team: "Development Team",
    role: "Frontend Developer",
    description:
      "환경 플랫폼 YPSILON의 기획 내용을 바탕으로 화면 설계와 UI 디자인을 수행했으며, 퍼블리싱 및 프론트엔드 개발을 담당했습니다.",
    achievement: [
      "기획 내용을 기반으로 UI 화면 설계 및 컴포넌트 정의",
      "HTML · CSS · JavaScript 기반 반응형 퍼블리싱",
      "공정도·계통도·차트 등 시각화 자료 설계 및 구현",
      "사용자 매뉴얼 제작 및 시스템 유지보수 지원",
    ],
  },
  {
    period: "2021.09 - 2023.03",
    company: "스튜디오앤홈",
    team: "Design Team",
    role: "Web Designer",
    description:
      "다양한 업종의 상세페이지와 웹 콘텐츠를 기획·디자인하며 클라이언트 요구사항을 반영한 결과물을 제작했습니다.",
    achievement: [
      "상세페이지 기획 및 디자인",
      "웹 배너 및 콘텐츠 제작",
      "25건 이상의 프로젝트 수행",
      "클라이언트 맞춤형 디자인 제공",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 10, md: 15 },
        bgcolor: "#F8FAFC",
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
          EXPERIENCE
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 800,
            mb: 2,
          }}
        >
          Career Journey.
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            lineHeight: 1.8,
            maxWidth: 650,
            mb: 8,
          }}
        >
          4년 동안 웹디자인부터 UI/UX, React 기반 퍼블리싱까지 다양한 프로젝트를
          경험하며 사용자 중심의 서비스를 만들어왔습니다.
        </Typography>

        <Stack spacing={7}>
          {experiences.map((item) => (
            <Grid
              container
              key={item.period}
              spacing={4}
              sx={{
                position: "relative",
              }}
            >
              {/* 왼쪽 */}
              <Grid size={{ xs: 12, md: 3 }}>
                <Typography
                  sx={{
                    color: "#E7B24A",
                    fontWeight: 700,
                  }}
                >
                  {item.period}
                </Typography>
              </Grid>

              {/* 오른쪽 */}
              <Grid size={{ xs: 12, md: 9 }}>
                <Box
                  sx={{
                    position: "relative",
                    pl: 5,
                  }}
                >
                  {/* 세로선 */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: 12,
                      top: 0,
                      bottom: -40,
                      width: 2,
                      bgcolor: "#E5E7EB",
                    }}
                  />

                  {/* 원 */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: 6,
                      top: 4,
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      bgcolor: "#E7B24A",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                    }}
                  >
                    {item.company}
                  </Typography>

                  <Typography
                    sx={{
                      color: "text.secondary",
                      mt: 0.5,
                    }}
                  >
                    {item.team}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 2,
                      fontWeight: 700,
                    }}
                  >
                    {item.role}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1.5,
                      lineHeight: 1.8,
                      color: "text.secondary",
                    }}
                  >
                    {item.description}
                  </Typography>

                  <Stack
                    spacing={1}
                    sx={{
                      mt: 3,
                    }}
                  >
                    <Stack spacing={1} sx={{ mt: 3 }}>
                      <Typography
                        sx={{
                          color: "#B78103",
                          fontWeight: 700,
                          mb: 1,
                        }}
                      >
                        Key Achievements
                      </Typography>

                      {item.achievement.map((achievement) => (
                        <Typography
                          key={achievement}
                          sx={{
                            color: "text.secondary",
                          }}
                        >
                          • {achievement}
                        </Typography>
                      ))}
                    </Stack>
                  </Stack>
                </Box>
              </Grid>

              <Grid size={12}>
                <Divider sx={{ mt: 3 }} />
              </Grid>
            </Grid>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default ExperienceSection;
