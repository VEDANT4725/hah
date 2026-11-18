
import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          Feel the Rhythm
        </h1>
        <p className="text-lg md:text-2xl text-white mb-6 drop-shadow">
          Join our vibrant dance community and move to the beat.
        </p>
        <a
          href="#schedule"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md transition"
        >
          View Schedule
        </a>
      </div>
    </section>
  );
};

export default Hero;