import { Box, Container, Grid, Typography } from "@mui/material";
import { ReactNode } from "react";

interface CaseStudyLayoutProps {
  title: string;
  period: string;
  role: string;
  contribution: string;
  team?: string;
  thumbnail?: string;
  children: ReactNode;
}

const CaseStudyLayout = ({
  title,
  period,
  role,
  contribution,
  team,
  thumbnail,
  children,
}: CaseStudyLayoutProps) => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 800,
            mb: 2,
          }}
        >
          {title}
        </Typography>

        <Typography color="text.secondary" mb={6}>
          {period}
        </Typography>

        {thumbnail && (
          <Box
            component="img"
            src={thumbnail}
            alt={title}
            sx={{
              width: "100%",
              borderRadius: 3,
              mb: 6,
            }}
          />
        )}

        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography fontWeight={700}>Role</Typography>
            <Typography color="text.secondary">{role}</Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography fontWeight={700}>Contribution</Typography>
            <Typography color="text.secondary">{contribution}</Typography>
          </Grid>

          {team && (
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography fontWeight={700}>Team</Typography>
              <Typography color="text.secondary">{team}</Typography>
            </Grid>
          )}
        </Grid>

        {children}
      </Container>
    </Box>
  );
};

export default CaseStudyLayout;
