import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/Projects";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;