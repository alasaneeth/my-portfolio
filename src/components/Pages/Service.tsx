// src/components/Services.jsx
import { FaCode, FaDatabase, FaGlobe, FaLaptopCode } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode className="text-4xl text-blue-400" />,
    title: "Frontend Development",
  },
  {
    icon: <FaDatabase className="text-4xl text-green-400" />,
    title: "Backend Development",
  },
  {
    icon: <FaGlobe className="text-4xl text-purple-400" />,
    title: "Custom Website Development",
  },
  {
    icon: <FaLaptopCode className="text-4xl text-yellow-400" />,
    title: "Web Application Development",
  },
];

export default function Services() {
  return (
    <section className="py-12 bg-slate-500 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-lg p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow"
            >
              {service.icon}
              <h3 className="mt-4 text-center text-lg font-medium">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
