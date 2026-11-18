
import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Classes from "./components/Classes";
import Schedule from "./components/Schedule";
import Instructors from "./components/Instructors";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <NavBar />
      <main className="flex-1">
        <Hero />
        <About />
        <Classes />
        <Schedule />
        <Instructors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;