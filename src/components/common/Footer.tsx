import { Box, Container, Divider, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0B0E17",
        color: "rgba(255,255,255,.6)",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Divider
          sx={{
            borderColor: "rgba(255,255,255,.08)",
            mb: 4,
          }}
        />

        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: 700,
                color: "#fff",
              }}
            >
              © {new Date().getFullYear()} Lee SeungHyun
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                fontSize: ".9rem",
                color: "rgba(255,255,255,.45)",
              }}
            >
              UX/UI Designer · Frontend Developer
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: ".9rem",
              color: "rgba(255,255,255,.45)",
            }}
          >
            Built with React · TypeScript · MUI
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
