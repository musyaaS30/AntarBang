import React from "react";

const Hero = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Build Beautiful Websites
          <span className="text-lime-600 dark:text-lime-400"> Faster</span>
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Free Tailwind CSS components to help you create stunning websites
          without starting from scratch.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="w-full sm:w-auto px-8 py-4 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition-colors"
          >
            Get Started
          </a>

          <a
            href="#"
            className="w-full sm:w-auto px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-lime-600 hover:text-lime-600 dark:hover:border-lime-400 dark:hover:text-lime-400 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
