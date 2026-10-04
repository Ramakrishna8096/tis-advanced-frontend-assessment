import { useEffect, useState } from "react";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Academics from "./sections/Academics";
import Life from "./sections/Life";
import Facilities from "./sections/Facilities";
import Stories from "./sections/Stories";
import Admissions from "./sections/Admissions";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="app">
      <ScrollProgress />
      <CustomCursor />
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <About />
        <Academics />
        <Life />
        <Facilities />
        <Stories />
        <Admissions />
      </main>
      <Footer />
    </div>
  );
}