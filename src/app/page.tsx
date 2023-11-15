import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import Expierences from "./components/Experiences";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Expierences />
      <Quote />
      <Footer />
    </>
  );
}
