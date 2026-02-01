import { motion } from "framer-motion";
import { FaMotorcycle, FaTruck, FaShippingFast, FaBoxOpen } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

const prices = [
  { 
    icon: <FaMotorcycle />, 
    title: "Motor Delivery", 
    price: "Mulai 10K",
    features: ["Max 5 kg", "Same Day", "Dalam Kota"],
    popular: false
  },
  { 
    icon: <FaTruck />, 
    title: "Mobil Box", 
    price: "Mulai 50K",
    features: ["Max 500 kg", "Door to Door", "Jabodetabek"],
    popular: true
  },
  { 
    icon: <FaShippingFast />, 
    title: "Truk Besar", 
    price: "Mulai 200K",
    features: ["Max 2 Ton", "Antar Kota", "Tim Pro"],
    popular: false
  },
  { 
    icon: <FaBoxOpen />, 
    title: "Warehouse", 
    price: "Custom",
    features: ["Gudang Aman", "Pick & Pack", "Layanan B2B"],
    popular: false
  },
];

export default function Pricing() {
  return (
    <section className="py-16 md:py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Estimasi <span className="text-red-600">Harga</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Harga transparan tanpa biaya tersembunyi. Sesuaikan dengan kebutuhan pengiriman Anda.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prices.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative bg-white rounded-xl shadow-lg border overflow-hidden
                ${p.popular ? 'border-red-300 ring-2 ring-red-100' : 'border-gray-100'}`}
            >
              {/* Popular Badge */}
              {p.popular && (
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-1 rounded-full text-sm font-medium shadow">
                    Paling Populer
                  </div>
                </div>
              )}

              {/* Card Content */}
              <div className="p-6">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full text-red-600 text-2xl mb-4">
                  {p.icon}
                </div>

                {/* Title & Price */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{p.title}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">{p.price}</span>
                  {p.price !== "Custom" && <span className="text-gray-500 text-sm ml-1">/kg</span>}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {p.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`
                  w-full py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2
                  ${p.popular 
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}
                `}>
                  Pilih Layanan
                  <IoArrowForward className={`transition-transform group-hover:translate-x-1 ${p.popular ? '' : 'text-gray-500'}`} />
                </button>
              </div>

              {/* Bottom Accent */}
              <div className={`h-1 ${p.popular ? 'bg-gradient-to-r from-red-600 to-red-700' : 'bg-gray-200'}`}></div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
              <span className="text-red-600 font-bold">ℹ️</span>
            </div>
            <div className="text-left">
              <p className="text-gray-800 font-medium">Harga dapat berubah berdasarkan jarak, berat, dan prioritas pengiriman</p>
              <p className="text-gray-500 text-sm mt-1">Gunakan kalkulator tarif untuk estimasi akurat</p>
            </div>
            <button className="px-5 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap">
              Kalkulator Tarif
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}