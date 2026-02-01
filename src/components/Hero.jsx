import React from "react";

const Hero = () => {
  return (
    <section className="relative py-20 px-6 bg-[url('/image/delivery.png')] bg-cover bg-center min-h-screen flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Males anter Paket
          <span className="text-red-600"> Jauh?</span>
        </h1>

        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Nggak Jadi Masalah!{" "}
          <span className="underline decoration-red-600">
            ANTAR<b>BANG</b>
          </span>{" "}
          bantu pick up gratis langsung ke alamat kamu.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="w-full sm:w-auto px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
          >
            Get Started
          </a>

          <a
            href="#"
            className="w-full sm:w-auto px-8 py-4 border-2 border-black text-white font-semibold rounded-lg hover:border-red-600 hover:text-red-300 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
