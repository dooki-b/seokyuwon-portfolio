import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Approach from "./components/Approach";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Numbers from "./components/Numbers";
import Strengths from "./components/Strengths";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Approach />
        <Project />
        <Experience />
        <Numbers />
        <Strengths />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
