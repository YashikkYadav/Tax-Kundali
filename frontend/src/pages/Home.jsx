import Hero from "../components/Home/hero";
import About from "../components/Home/about";
import VisionMission from "../components/Home/vision";
import Services from "../components/Home/service";
import CaseStudies from "../components/Home/casestudies";
import StatsSection from "../components/Home/stats";
import BlogSection from "../components/Home/blog";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <VisionMission />
      <Services />
      <CaseStudies />
      <StatsSection />
      <BlogSection />
    </>
  );
}

export default Home;
