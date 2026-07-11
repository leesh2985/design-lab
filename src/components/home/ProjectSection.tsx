import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import projects from "../../data/projects";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  const labelMap: Record<string, string> = {
    uiDesign: "UI Design",
    publishing: "Publishing",
    uiImplementation: "UI Implementation",
    frontendDevelopment: "Frontend",
  };

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
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <Grid key={project.id} size={{ xs: 12, md: 6 }}>
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
                        .map(
                          ([key, value]) => `${labelMap[key] ?? key} ${value}`,
                        )
                        .join(" · ")}
                    </Typography>

                    <Typography
                      component={Link}
                      to={`/projects/${project.id}`}
                      sx={{
                        mt: 2,
                        fontWeight: 700,
                        color: "#0F172A",
                        textDecoration: "none",
                        width: "fit-content",

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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 8,
          }}
        >
          <Button
            component={Link}
            to="/projects"
            variant="outlined"
            size="large"
            sx={{
              px: 4,
              borderRadius: 999,
              textTransform: "none",
              fontWeight: 700,
            }}
          >
            Explore All Projects
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectSection;
