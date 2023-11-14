import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import Skills from "./components/Skills";
import Video from "./components/Video";

export default function Home() {
  return (
    <>
      {/* <Video /> */}
      <Navbar />
      <Hero />
      <Skills />
      <Quote />
      <Footer />
    </>
  );
}
