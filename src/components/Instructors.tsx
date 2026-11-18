
import React from "react";

interface Instructor {
  name: string;
  specialty: string;
  imgUrl: string;
}

const instructors: Instructor[] = [
  {
    name: "Mia Rodriguez",
    specialty: "Hip‑Hop & Street",
    imgUrl: "https://images.unsplash.com/photo-1603415526960-f6e7e7c0d4b1?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Liam Chen",
    specialty: "Contemporary",
    imgUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sofia Alvarez",
    specialty: "Salsa & Latin",
    imgUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Ethan Patel",
    specialty: "Ballet & Technique",
    imgUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
  },
];

const Instructors: React.FC = () => {
  return (
    <section id="instructors" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-12">
          Meet Our Instructors
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((inst) => (
            <div
              key={inst.name}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={inst.imgUrl}
                alt={`Portrait of ${inst.name}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {inst.name}
                </h3>
                <p className="mt-1 text-gray-600">{inst.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;