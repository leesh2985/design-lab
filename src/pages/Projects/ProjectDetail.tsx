import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  Breadcrumbs,
  Link,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link as RouterLink } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import projects from "../../data/projects";

const ProjectDetail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  const { id } = useParams();

  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <Container maxWidth="md" sx={{ py: 10 }}>
        <Typography variant="h4">Project Not Found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Stack spacing={2}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/projects")}
            variant="text"
            sx={{
              px: 0,
              minWidth: "auto",
              color: "text.secondary",
              textTransform: "none",
              fontWeight: 500,
            }}
          >
            목록으로
          </Button>

          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link
              component={RouterLink}
              to="/"
              underline="hover"
              color="inherit"
            >
              Home
            </Link>

            <Link
              component={RouterLink}
              to="/projects"
              underline="hover"
              color="inherit"
            >
              Projects
            </Link>

            <Typography color="text.primary">{project.title}</Typography>
          </Breadcrumbs>
        </Box>
        {/* Hero */}
        <Box
          component="img"
          src={project.image}
          alt={project.title}
          sx={{
            width: "100%",
            height: 500,
            objectFit: "cover",
            borderRadius: 3,
          }}
        />

        <Box>
          <Typography variant="h3" fontWeight={700}>
            {project.title}
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 1 }}>
            {project.period}
          </Typography>

          <Typography
            sx={{
              mt: 3,
              fontSize: 18,
              lineHeight: 1.8,
            }}
          >
            {project.description}
          </Typography>
        </Box>

        <Divider />

        {/* Project Overview */}

        <Box>
          <Typography variant="h5" fontWeight={700} mb={4}>
            Project Overview
          </Typography>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={2}>
                <Typography>
                  <strong>Company</strong>
                </Typography>
                <Typography>{project.company}</Typography>

                <Typography>
                  <strong>Client</strong>
                </Typography>
                <Typography>{project.client}</Typography>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={2}>
                <Typography>
                  <strong>Role</strong>
                </Typography>
                <Typography>{project.role}</Typography>

                <Typography>
                  <strong>Contribution</strong>
                </Typography>

                <Typography>
                  UI Design {project.contribution.uiDesign}
                </Typography>

                <Typography>
                  Publishing {project.contribution.publishing}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        <Divider />

        {/* Tech Stack */}

        <Box>
          <Typography variant="h5" fontWeight={700} mb={3}>
            Tech Stack
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {project.tech.map((tech) => (
              <Chip key={tech} label={tech} />
            ))}
          </Stack>
        </Box>

        <Divider />

        {/* Responsibilities */}

        <Box>
          <Typography variant="h5" fontWeight={700} mb={3}>
            Key Responsibilities
          </Typography>

          <Stack spacing={2}>
            {project.responsibilities.map((item) => (
              <Typography key={item}>• {item}</Typography>
            ))}
          </Stack>
        </Box>

        <Divider />

        {/* Highlights */}

        <Box>
          <Typography variant="h5" fontWeight={700} mb={3}>
            Highlights
          </Typography>

          <Stack spacing={2}>
            {project.highlights?.map((item) => (
              <Typography key={item}>✔ {item}</Typography>
            ))}
          </Stack>
        </Box>

        <Divider />

        {/* Resources */}

        <Box>
          <Typography variant="h5" fontWeight={700} mb={3}>
            Resources
          </Typography>

          <Stack direction="row" spacing={2}>
            {project.resources?.website && (
              <Button
                variant="outlined"
                href={project.resources.website.url}
                target="_blank"
              >
                {project.resources.website.title}
              </Button>
            )}

            {project.resources?.figma && (
              <Button
                variant="outlined"
                href={project.resources.figma.url}
                target="_blank"
              >
                {project.resources.figma.title}
              </Button>
            )}
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default ProjectDetail;
