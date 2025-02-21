import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/styles.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Contact />
      <Footer />
    </>
  );
}
