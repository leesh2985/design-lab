import { useMemo, useState, useEffect } from "react";
import {
  Box,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  Tabs,
  Tab,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { Link } from "react-router-dom";
import projects from "../../data/projects";
import designs, { type Design } from "../../data/designs";

const ProjectList = () => {
  const [section, setSection] = useState("case-study");
  const [tab, setTab] = useState("all");
  const [showTop, setShowTop] = useState(false);
  const [sort, setSort] = useState("latest");
  const [open, setOpen] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  const labelMap: Record<string, string> = {
    uiDesign: "UI Design",
    publishing: "Publishing",
    uiImplementation: "UI Implementation",
    frontendDevelopment: "Frontend",
  };

  const filteredProjects = useMemo(() => {
    let result = projects.filter((p) => p.section === section);

    switch (tab) {
      case "featured":
        result = result.filter((p) => p.featured);
        break;

      case "company":
        result = result.filter((p) => p.category === "company");
        break;

      case "personal":
        result = result.filter((p) => p.category === "personal");
        break;

      default:
        break;
    }

    result.sort((a, b) => {
      return sort === "latest"
        ? b.startDate.localeCompare(a.startDate)
        : a.startDate.localeCompare(b.startDate);
    });

    return result;
  }, [section, tab, sort]);

  const filteredDesigns = useMemo(() => {
    const result = [...designs];

    result.sort((a, b) =>
      sort === "latest"
        ? b.period.localeCompare(a.period)
        : a.period.localeCompare(b.period),
    );

    return result;
  }, [sort]);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpen = (design: Design) => {
    setSelectedDesign(design);
    setCurrentImage(0);
    setOpen(true);
  };

  const handlePrev = () => {
    if (!selectedDesign) return;

    setCurrentImage((prev) =>
      prev === 0 ? selectedDesign.gallery.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    if (!selectedDesign) return;

    setCurrentImage((prev) =>
      prev === selectedDesign.gallery.length - 1 ? 0 : prev + 1,
    );
  };
  console.log(section);
  console.log(tab);
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Stack spacing={1} mb={6}>
        <Typography
          sx={{
            color: "#E7B24A",
            fontWeight: 700,
            letterSpacing: ".2em",
          }}
        >
          PROJECTS
        </Typography>

        <Typography variant="h3" sx={{ fontWeight: 800 }}>
          {section === "case-study" ? "Case Studies" : "Design Archive"}
        </Typography>

        <Typography color="text.secondary">
          진행했던 프로젝트를 소개합니다.
        </Typography>
      </Stack>

      <Tabs
        value={section}
        onChange={(_, value) => setSection(value)}
        sx={{
          mb: 6,

          "& .MuiTab-root": {
            textTransform: "uppercase",
            fontSize: "1rem",
            fontWeight: 700,
            color: "text.secondary",
            minHeight: 48,
            px: 2,
          },

          "& .Mui-selected": {
            color: "#111",
          },

          "& .MuiTabs-indicator": {
            height: 3,
            bgcolor: "#111",
          },
        }}
      >
        <Tab value="case-study" label="Case Studies" />
        <Tab value="design" label="Design Archive" />
      </Tabs>

      {section === "case-study" && (
        <Tabs
          value={tab}
          onChange={(_, value) => setTab(value)}
          sx={{
            mb: 6,

            "& .MuiTab-root": {
              textTransform: "none",
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "text.secondary",
              minHeight: 40,
              px: 2,
            },

            "& .Mui-selected": {
              color: "#111",
            },

            "& .MuiTabs-indicator": {
              height: 2,
              bgcolor: "#111",
            },
          }}
        >
          <Tab value="all" label={`All (${projects.length})`} />

          <Tab
            value="company"
            label={`Company (${
              projects.filter((p) => p.category === "company").length
            })`}
          />

          <Tab
            value="personal"
            label={`Personal (${
              projects.filter((p) => p.category === "personal").length
            })`}
          />
        </Tabs>
      )}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Typography
          sx={{
            color: "text.secondary",
            fontWeight: 500,
          }}
        >
          Total{" "}
          {section === "case-study"
            ? projects.filter((p) => {
                if (tab === "company") return p.category === "company";
                if (tab === "personal") return p.category === "personal";
                return true;
              }).length
            : designs.length}
        </Typography>
        <FormControl size="small" sx={{ minWidth: 160 }}>
          <InputLabel>Sort</InputLabel>

          <Select
            value={sort}
            label="Sort"
            onChange={(e) => setSort(e.target.value)}
          >
            <MenuItem value="latest">최신순</MenuItem>
            <MenuItem value="oldest">오래된순</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={4} sx={{ mt: 3 }}>
        {section === "case-study"
          ? filteredProjects.map((project) => (
              <Grid key={project.id} size={{ xs: 12, md: 6 }}>
                <Paper
                  elevation={0}
                  sx={{
                    overflow: "hidden",
                    borderRadius: 4,
                    border: "1px solid #ECECEC",
                    transition: ".25s",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",

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
                  <Stack
                    spacing={2}
                    sx={{
                      p: 4,
                      flex: 1,
                    }}
                  >
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
                      {project.featured && (
                        <Chip label="Featured" color="warning" size="small" />
                      )}

                      <Chip
                        label={
                          project.category === "company"
                            ? "Company"
                            : "Personal"
                        }
                        size="small"
                        variant="outlined"
                      />
                    </Stack>

                    <Typography color="text.secondary">
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
                        mt: "auto",
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
            ))
          : filteredDesigns.map((design) => (
              <Grid key={design.id} size={{ xs: 12, md: 4 }}>
                <Paper
                  elevation={0}
                  onClick={() => handleOpen(design)}
                  sx={{
                    overflow: "hidden",
                    borderRadius: 4,
                    border: "1px solid #ECECEC",
                    cursor: "pointer",
                    transition: ".25s",

                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 18px 40px rgba(0,0,0,.08)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={design.gallery[0]}
                    alt={design.title}
                    sx={{
                      width: "100%",
                      height: 260,
                      objectFit: "cover",
                    }}
                  />

                  <Stack spacing={1} sx={{ p: 3 }}>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: "1.2rem",
                      }}
                    >
                      {design.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#888",
                        fontSize: ".9rem",
                      }}
                    >
                      {design.period}
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            ))}
      </Grid>

      <Zoom in={showTop}>
        <Fab
          color="primary"
          size="medium"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          sx={{
            position: "fixed",
            bottom: 32,
            right: 32,
            bgcolor: "#0F172A",

            "&:hover": {
              bgcolor: "#E7B24A",
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: "#111",
            overflow: "hidden",
          },
        }}
      >
        {selectedDesign && (
          <DialogContent
            sx={{
              p: 0,
              bgcolor: "#111",
              position: "relative",
            }}
          >
            {/* 닫기 */}
            <IconButton
              onClick={() => setOpen(false)}
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                zIndex: 10,
                bgcolor: "rgba(255,255,255,.9)",
                "&:hover": {
                  bgcolor: "#fff",
                },
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* 이전 */}
            {selectedDesign.gallery.length > 1 && (
              <IconButton
                onClick={handlePrev}
                sx={{
                  position: "fixed",
                  top: "50%",
                  left: "clamp(16px, calc(50% - 600px + 16px), 32px)",
                  transform: "translateY(-50%)",
                  zIndex: 1500,
                  color: "#fff",
                  bgcolor: "rgba(0,0,0,.45)",
                  width: 52,
                  height: 52,
                  "&:hover": {
                    bgcolor: "rgba(0,0,0,.7)",
                  },
                }}
              >
                <ChevronLeftIcon />
              </IconButton>
            )}

            {/* 이미지 */}
            <Box
              sx={{
                p: { xs: 2, md: 4 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={selectedDesign.gallery[currentImage]}
                alt={selectedDesign.title}
                sx={{
                  width: "100%",
                  display: "block",
                  px: { xs: 2, md: 24 },
                  boxSizing: "border-box",
                }}
              />
            </Box>

            {/* 다음 */}
            {selectedDesign.gallery.length > 1 && (
              <IconButton
                onClick={handleNext}
                sx={{
                  position: "fixed",
                  top: "50%",
                  right: "clamp(16px, calc(50% - 600px + 16px), 32px)",
                  transform: "translateY(-50%)",
                  zIndex: 1500,
                  color: "#fff",
                  bgcolor: "rgba(0,0,0,.45)",
                  width: 52,
                  height: 52,
                  "&:hover": {
                    bgcolor: "rgba(0,0,0,.7)",
                  },
                }}
              >
                <ChevronRightIcon />
              </IconButton>
            )}

            {/* 페이지 표시 */}
            {selectedDesign.gallery.length > 1 && (
              <Typography
                sx={{
                  position: "absolute",
                  bottom: 16,
                  left: "50%",
                  transform: "translateX(-50%)",
                  px: 2,
                  py: 0.5,
                  borderRadius: 5,
                  bgcolor: "rgba(0,0,0,.6)",
                  color: "#fff",
                  fontSize: ".85rem",
                }}
              >
                {currentImage + 1} / {selectedDesign.gallery.length}
              </Typography>
            )}
          </DialogContent>
        )}
      </Dialog>
    </Container>
  );
};

export default ProjectList;
