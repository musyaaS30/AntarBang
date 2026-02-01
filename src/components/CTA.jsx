import { motion } from "framer-motion";
import { FaShippingFast, FaWhatsapp, FaPhoneAlt, FaArrowRight } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="py-16 md:py-20 px-6 bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-white/5 blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left max-w-2xl"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
              <FaShippingFast className="text-2xl" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Siap Kirim Paket <span className="text-yellow-300">Sekarang</span>?
            </h2>
            
            <p className="text-lg text-white/90 mb-8">
              Mulai pengiriman Anda dalam 5 menit. Ribuan pelanggan telah mempercayakan pengiriman mereka pada kami.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <FaWhatsapp />
                </div>
                <div className="text-left">
                  <p className="text-sm text-white/70">Via WhatsApp</p>
                  <p className="font-semibold">0812-3456-7890</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <FaPhoneAlt />
                </div>
                <div className="text-left">
                  <p className="text-sm text-white/70">Call Center</p>
                  <p className="font-semibold">(021) 1234-5678</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-8 shadow-2xl w-full max-w-md"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Mulai Pengiriman
            </h3>
            <p className="text-gray-600 mb-6">
              Isi form singkat untuk estimasi harga & jadwal pickup
            </p>

            <div className="space-y-4 mb-6">
              <input
                type="text"
                placeholder="Nama lengkap"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition"
              />
              <input
                type="tel"
                placeholder="Nomor WhatsApp"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition"
              />
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition">
                <option>Pilih jenis layanan</option>
                <option>Motor Delivery</option>
                <option>Mobil Box</option>
                <option>Truk Besar</option>
              </select>
            </div>

            <button className="group w-full py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
              Pesan Sekarang
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-center text-gray-500 text-sm mt-4">
              Gratis konsultasi dan estimasi harga
            </p>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 pt-8 border-t border-white/20"
        >
          <p className="text-center text-white/80 mb-6">Dipercaya oleh</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["UMKM", "Startup", "Perusahaan", "Pribadi", "Organisasi"].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-white mb-1">{i % 2 === 0 ? "500+" : "100+"}</div>
                <div className="text-sm text-white/70">{item}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}