import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import { FaEnvelope } from "react-icons/fa";

const email = "leesh2985@naver.com";

const ContactSection = () => {
  const [open, setOpen] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setOpen(true);
    } catch (error) {
      console.error("이메일 복사 실패", error);
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 12, md: 16 },
        bgcolor: "#10131F",
        color: "#fff",
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography
            sx={{
              color: "#E7B24A",
              letterSpacing: ".2em",
              fontWeight: 700,
            }}
          >
            CONTACT
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "2.3rem", md: "3.5rem" },
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Let's Connect.
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,.72)",
              maxWidth: 620,
              lineHeight: 1.9,
            }}
          >
            사용자 중심의 경험을 설계하고,
            <br />
            디자인를 실제 서비스로 구현하는 UX/UI 디자이너입니다.
            <br />더 나은 사용자 경험을 함께 만들어갈 기회를 기다리고 있습니다.
          </Typography>

          <Stack
            spacing={2}
            alignItems="center"
            sx={{
              width: {
                xs: "100%",
                sm: 220,
              },
            }}
          >
            <Typography
              sx={{
                color: "#E7B24A",
                fontSize: ".75rem",
                fontWeight: 700,
                letterSpacing: ".15em",
                textTransform: "uppercase",
              }}
            >
              Email
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              sx={{
                color: "rgba(255,255,255,.85)",
                alignItems: "center",
              }}
            >
              <FaEnvelope size={16} />

              <Typography
                sx={{
                  fontSize: "0.95rem",
                  fontWeight: 400,
                }}
              >
                leesh2985@naver.com
              </Typography>
            </Stack>

            <Button
              variant="contained"
              startIcon={<ContentCopyRoundedIcon />}
              onClick={handleCopyEmail}
              sx={{
                bgcolor: "#E7B24A",
                color: "#10131F",
                px: 4,
                py: 1.3,
                borderRadius: "8px",
                fontWeight: 700,
                textTransform: "none",
                boxShadow: "none",

                "&:hover": {
                  bgcolor: "#F2C168",
                  boxShadow: "none",
                },
              }}
            >
              Copy Email
            </Button>
          </Stack>

          <Typography
            sx={{
              mt: 6,
              color: "rgba(255,255,255,.45)",
              fontSize: ".95rem",
            }}
          >
            Thank you for visiting my portfolio.
          </Typography>
        </Stack>
      </Container>

      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setOpen(false)}
        >
          Email copied!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactSection;
