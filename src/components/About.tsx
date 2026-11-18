
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-indigo-600 mb-4">About Us</h2>
        <p className="text-gray-700 leading-relaxed">
          At <span className="font-semibold">Dance Studio</span>, we believe movement is a universal language.
          Our experienced instructors guide dancers of all ages and skill levels through
          a variety of styles—from contemporary to hip‑hop, salsa to ballet.
          Whether you’re looking to improve technique, stay fit, or simply have fun,
          our welcoming community has a place for you.
        </p>
      </div>
    </section>
  );
};

export default About;