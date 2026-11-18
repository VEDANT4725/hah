
import React from "react";

const scheduleData = [
  { day: "Monday", time: "6:00 PM – 7:30 PM", class: "Hip‑Hop" },
  { day: "Tuesday", time: "5:00 PM – 6:30 PM", class: "Contemporary" },
  { day: "Wednesday", time: "6:00 PM – 7:30 PM", class: "Salsa" },
  { day: "Thursday", time: "5:00 PM – 6:30 PM", class: "Ballet" },
  { day: "Saturday", time: "10:00 AM – 12:00 PM", class: "Open Studio" },
];

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          Weekly Schedule
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-indigo-100">
                <th className="px-4 py-2 text-left">Day</th>
                <th className="px-4 py-2 text-left">Time</th>
                <th className="px-4 py-2 text-left">Class</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((row) => (
                <tr key={row.day} className="border-b">
                  <td className="px-4 py-2">{row.day}</td>
                  <td className="px-4 py-2">{row.time}</td>
                  <td className="px-4 py-2">{row.class}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-center text-gray-600">
          New to dancing? <a href="#contact" className="text-indigo-600 hover:underline">Contact us</a> for a free trial!
        </p>
      </div>
    </section>
  );
};

export default Schedule;