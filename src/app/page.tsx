import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import Expierence from "./components/Experience";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <Expierence />
      <Quote />
      <Footer />
    </>
  );
}
