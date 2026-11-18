
import React from "react";
import { Music, Users, Heart, Sparkles } from "lucide-react";

interface ClassInfo {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Classes: React.FC = () => {
  const classList: ClassInfo[] = [
    {
      title: "Hip‑Hop",
      description: "High‑energy moves and street style routines.",
      icon: <Music size={32} className="text-indigo-600" />,
    },
    {
      title: "Contemporary",
      description: "Fluid expression and modern technique.",
      icon: <Sparkles size={32} className="text-indigo-600" />,
    },
    {
      title: "Salsa",
      description: "Latin rhythms and partner work.",
      icon: <Heart size={32} className="text-indigo-600" />,
    },
    {
      title: "Ballet",
      description: "Foundations of poise, balance, and grace.",
      icon: <Users size={32} className="text-indigo-600" />,
    },
  ];

  return (
    <section id="classes" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-12">
          Our Classes
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {classList.map((cls) => (
            <div
              key={cls.title}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex flex-col items-center">
                {cls.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  {cls.title}
                </h3>
                <p className="mt-2 text-gray-600 text-center">
                  {cls.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;