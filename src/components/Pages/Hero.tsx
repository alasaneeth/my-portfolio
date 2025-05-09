import React from 'react';
import heroImage from "../../assets/images/Hero.jpg";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-r from-[#f9fafb] to-[#e5e7eb]">
      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Hi, I'm <span className="text-indigo-600">Saneeth</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-6">
          <span className="inline-block animate-typing overflow-hidden whitespace-nowrap border-r-4 border-gray-500 pr-5">
            Full-Stack Software Engineer
          </span>
        </p>
        <a
          href="#projects"
          className="inline-block px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow transition-all duration-300"
        >
          View My Work
        </a>
      </div>

      {/* Hero Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          className="rounded-2xl shadow-lg max-w-xs md:max-w-md lg:max-w-lg"
          src={heroImage}
          alt="Hero"
        />
      </div>
    </section>
  );
};

export default Hero;
