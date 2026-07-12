import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        height: 72,
        bgcolor: "rgba(16,19,31,.8)",
        backdropFilter: "blur(16px)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            height: 72,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Typography
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "#fff",
              fontSize: "1.4rem",
              fontWeight: 800,
              letterSpacing: ".15em",
            }}
          >
            LSH
          </Typography>

          {/* Menu */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <Button color="inherit" onClick={() => handleScroll("about")}>
              About
            </Button>

            <Button color="inherit" onClick={() => handleScroll("experience")}>
              Experience
            </Button>

            <Button color="inherit" component={Link} to="/projects">
              Projects
            </Button>

            <Button color="inherit" onClick={() => handleScroll("skills")}>
              Skills
            </Button>

            <Button color="inherit" onClick={() => handleScroll("contact")}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
