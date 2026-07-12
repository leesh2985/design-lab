import HeroSection from "../../components/home/HeroSection";
import AboutSection from "../../components/home/AboutSection";
import ProjectSection from "../../components/home/ProjectSection";
import SkillSection from "../../components/home/SkillSection";
import ExperienceSection from "../../components/home/ExperienceSection";
import ContactSection from "../../components/home/ContactSection";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const id = location.state?.scrollTo;

    if (!id) return;

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    window.history.replaceState({}, "");
  }, [location]);
  return (
    <>
      <Header />

      <HeroSection />
      <ProjectSection />
      <AboutSection />
      <SkillSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
