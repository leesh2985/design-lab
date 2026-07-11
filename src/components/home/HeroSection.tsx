import { keyframes } from "@emotion/react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import meImg from "../../assets/me.jpg";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
`;

const BG = "#10131F";
const TEXT = "#EDEBE2";
const MUTED = "rgba(237,235,226,.65)";
const GOLD = "#E7B24A";
const BLUE = "#6C8CFF";

const enterAnim = (delay = 0) => ({
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${fadeUp} .7s cubic-bezier(.16,1,.3,1) both`,
    animationDelay: `${delay}s`,
  },
});

const stats = [
  { value: "5+", label: "Years" },
  { value: "4+", label: "Projects" },
  { value: "7+", label: "Skills" },
  { value: "∞", label: "Learning" },
];

const skills = ["UX/UI", "React", "TypeScript", "MUI", "Figma", "Git"];

const smoothScrollTo = (id: string, duration = 1200) => {
  const target = document.getElementById(id);

  if (!target) return;

  const start = window.scrollY;
  const end = target.offsetTop;
  const distance = end - start;

  let startTime: number | null = null;

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const animation = (currentTime: number) => {
    if (!startTime) startTime = currentTime;

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo({
      top: start + distance * easeInOutCubic(progress),
    });

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

export default function HeroSection() {
  return (
    <Box
      sx={{
        bgcolor: BG,
        position: "relative",
        overflow: "hidden",
        pt: "72px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: -180,
          bottom: -180,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle,#6C8CFF33 0%,transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      <Typography
        aria-hidden
        sx={{
          position: "absolute",
          top: { xs: -30, md: 0 },
          right: { xs: 10, md: 50 },
          fontSize: { xs: "12rem", md: "11rem" },
          fontWeight: 900,
          color: "rgba(255,255,255,0.025)",
          lineHeight: 1,
          pointerEvents: "none",
        }}
      >
        PORTFOLIO
      </Typography>

      <Typography
        aria-hidden
        sx={{
          position: "absolute",
          bottom: 20,
          right: 120,
          fontSize: { xs: "4rem", md: "7rem" },
          fontWeight: 700,
          color: "rgba(108,140,255,0.06)",
          fontFamily: '"JetBrains Mono", monospace',
          pointerEvents: "none",
        }}
      >
        {"</>"}
      </Typography>

      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={8}
          sx={{ minHeight: "100vh", py: 8 }}
        >
          <Box flex={1}>
            <Typography
              sx={{ color: GOLD, letterSpacing: 4, mb: 2, ...enterAnim(0) }}
            >
              HELLO, I'M
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "3.2rem", md: "5.3rem" },
                fontWeight: 900,
                color: TEXT,
                lineHeight: 1,
                ...enterAnim(0.1),
              }}
            >
              이승현
            </Typography>

            <Typography
              sx={{
                mt: 2,
                fontSize: { xs: "1.3rem", md: "1.7rem" },
                fontWeight: 700,
                color: GOLD,
                ...enterAnim(0.15),
              }}
            >
              UX/UI Designer
            </Typography>

            <Typography
              sx={{ color: MUTED, fontSize: "1rem", ...enterAnim(0.2) }}
            >
              React Frontend Developer
            </Typography>

            <Typography
              sx={{
                mt: 4,
                maxWidth: 520,
                color: MUTED,
                lineHeight: 1.8,
                fontSize: { xs: "1rem", md: "1.1rem" },
                ...enterAnim(0.25),
              }}
            >
              사용자 경험을 설계하고 React와 TypeScript로 직접 구현합니다.
              <br />
              디자인과 개발의 간극을 줄이며 AI를 활용해 더 빠르고 더 나은
              서비스를 만듭니다.
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              sx={{ mt: 4, rowGap: 1, ...enterAnim(0.3) }}
            >
              {skills.map((item) => (
                <Box
                  key={item}
                  sx={{
                    px: 2,
                    py: 0.7,
                    borderRadius: "999px",
                    border: "1px solid rgba(255,255,255,.12)",
                    bgcolor: "rgba(255,255,255,.03)",
                    color: TEXT,
                    fontSize: 13,
                  }}
                >
                  {item}
                </Box>
              ))}
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              sx={{ mt: 5, ...enterAnim(0.35) }}
            >
              <Button
                variant="contained"
                onClick={() => smoothScrollTo("projects", 1400)}
                sx={{
                  bgcolor: GOLD,
                  color: BG,
                  "&:hover": {
                    bgcolor: "#f0c15f",
                  },
                }}
              >
                View Projects
              </Button>
            </Stack>

            <Stack
              direction="row"
              spacing={5}
              sx={{ mt: 7, flexWrap: "wrap", rowGap: 3, ...enterAnim(0.45) }}
            >
              {stats.map((s) => (
                <Box key={s.label}>
                  <Typography
                    sx={{ color: GOLD, fontSize: "2rem", fontWeight: 800 }}
                  >
                    {s.value}
                  </Typography>
                  <Typography sx={{ color: MUTED, fontSize: 14 }}>
                    {s.label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>

          <Box
            sx={{
              position: "relative",
              width: { xs: 260, md: 400 },
              height: { xs: 260, md: 500 },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                transform: "translate(16px,16px)",
                border: `2px solid ${BLUE}`,
                borderRadius: 3,
              }}
            />
            <Box
              component="img"
              src={meImg}
              alt="profile"
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 3,
                border: "1px solid rgba(255,255,255,.15)",
              }}
            />
          </Box>
        </Stack>

        <Box
          sx={{
            pb: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: MUTED,
          }}
        >
          <Typography sx={{ fontSize: 12, letterSpacing: 3 }}>
            SCROLL DOWN
          </Typography>
          <KeyboardArrowDownRoundedIcon
            sx={{
              mt: 1,
              animation: `${float} 2s infinite`,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
