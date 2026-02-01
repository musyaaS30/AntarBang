import { motion } from "framer-motion";
import { FaMapMarkedAlt } from "react-icons/fa";

const cities = [
  "Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi",
  "Karawang", "Purwakarta", "Cikampek", "Cikarang", "Serang", "+ 50"
];

export default function Coverage() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-red-50 mb-4">
            <FaMapMarkedAlt className="text-3xl text-red-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Jangkauan <span className="text-red-600">Wilayah</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Melayani pengiriman area <span className="font-semibold text-red-600">Jabodetabek</span> & sekitarnya
          </p>
        </motion.div>

        {/* Cities */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {cities.map((city, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="px-5 py-2 bg-gray-50 rounded-full border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-colors"
            >
              <span className="text-gray-800 font-medium">{city}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-5 py-2.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors text-sm">
            Cek Tarif Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}