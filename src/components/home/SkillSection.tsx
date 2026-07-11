import {
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const skills = {
  Design: ["Figma", "Photoshop", "Illustrator"],

  Frontend: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3"],

  "UI & Styling": [
    "MUI",
    "Styled Components",
    "Tailwind CSS",
    "Bootstrap",
    "Sass",
    "Chakra UI",
  ],

  Tools: ["Git", "GitHub", "GitLab", "Vite", "Vercel"],
};

const SkillSection = () => {
  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 10, md: 15 },
        bgcolor: "#fff",
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          sx={{
            color: "#E7B24A",
            letterSpacing: ".2em",
            fontWeight: 700,
            mb: 2,
          }}
        >
          SKILLS
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 800,
            mb: 2,
          }}
        >
          Tools & Technologies.
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            maxWidth: 620,
            lineHeight: 1.8,
            mb: 8,
          }}
        >
          사용자 경험을 설계하고 실제 서비스로 구현하기 위해 실무 프로젝트에서
          활용하고 있는 기술 스택입니다.
        </Typography>

        <Grid container spacing={{ xs: 4, md: 6 }}>
          {Object.entries(skills).map(([category, items]) => (
            <Grid key={category} size={{ xs: 12, md: 6 }}>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  color: "#111827",
                  mb: 2,
                }}
              >
                {category}
              </Typography>

              <Divider
                sx={{
                  mb: 2.5,
                  borderColor: "#ECECEC",
                }}
              />

              <Stack
                direction="row"
                spacing={1}
                useFlexGap
                sx={{
                  flexWrap: "wrap",
                }}
              >
                {items.map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    variant="outlined"
                    sx={{
                      borderRadius: "999px",
                      px: 1,
                      py: 0.4,
                      fontWeight: 600,
                      transition: ".25s",
                      fontSize: ".82rem",
                      bgcolor: "#FAFAFA",
                      borderColor: "#E5E7EB",

                      "&:hover": {
                        bgcolor: "#FFF8E9",
                        borderColor: "#E7B24A",
                        color: "#B78103",
                        transform: "translateY(-2px)",
                      },
                    }}
                  />
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillSection;
