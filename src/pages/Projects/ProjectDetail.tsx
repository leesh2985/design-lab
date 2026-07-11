import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import projects from "../../data/projects";

const ProjectDetail = () => {
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
      <Stack spacing={4}>
        <Box
          component="img"
          src={project.image}
          alt={project.title}
          sx={{
            width: "100%",
            height: 420,
            objectFit: "cover",
            borderRadius: 3,
          }}
        />

        <Typography variant="h3" fontWeight={700}>
          {project.title}
        </Typography>

        <Typography color="text.secondary">{project.period}</Typography>

        <Typography>{project.description}</Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap">
          {project.tech.map((tech) => (
            <Chip key={tech} label={tech} />
          ))}
        </Stack>

        <Box>
          <Typography variant="h5" mb={2}>
            Responsibilities
          </Typography>

          <Stack spacing={1}>
            {project.responsibilities.map((item) => (
              <Typography key={item}>• {item}</Typography>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default ProjectDetail;
