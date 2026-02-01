import { motion } from "framer-motion";
import {
  FaTruck,
  FaTruckMoving,
  FaBox,
  FaBuilding,
  FaMotorcycle,
} from "react-icons/fa";

const services = [
  {
    icon: <FaTruck />,
    title: "Pengiriman Dalam Kota",
    desc: "Cepat & aman di area kota kamu.",
  },
  {
    icon: <FaTruckMoving />,
    title: "Pengiriman Antar Kota",
    desc: "Jangkauan luas ke berbagai daerah.",
  },
  {
    icon: <FaBox />,
    title: "Same Day / Instant",
    desc: "Sampai di hari yang sama.",
  },
  {
    icon: <FaBuilding />,
    title: "Corporate Delivery",
    desc: "Solusi pengiriman bisnis.",
  },
  {
    icon: <FaMotorcycle />,
    title: "Motor / Mobil / Truk",
    desc: "Armada lengkap sesuai kebutuhan.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-50 rounded-full -translate-x-48 translate-y-48"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Layanan <span className="text-red-600">Utama</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Solusi pengiriman lengkap untuk kebutuhan pribadi dan bisnis dengan jaminan keamanan dan ketepatan waktu
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.1,
                type: "spring",
                stiffness: 100 
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              <div className="relative p-8 bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-red-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <div className="relative text-4xl text-red-600 transform group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                    {s.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-bold text-2xl text-gray-900 mb-3 group-hover:text-red-700 transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {s.desc}
                </p>
                
                {/* Decorative Line */}
                <div className="w-12 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
                
                {/* Hover Indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0">
            Lihat Semua Layanan
          </button>
        </motion.div>
      </div>
    </section>
  );
}