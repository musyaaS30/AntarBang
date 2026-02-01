import { motion } from "framer-motion";
import { FaClock, FaTags, FaUserCheck, FaRoute, FaHeadset } from "react-icons/fa";
import { GiDeliveryDrone } from "react-icons/gi";

const reasons = [
  { 
    icon: <FaClock />, 
    text: "Cepat & Tepat Waktu",
    desc: "Pengiriman same day untuk area Jabodetabek dengan jaminan ketepatan waktu"
  },
  { 
    icon: <FaTags />, 
    text: "Harga Transparan",
    desc: "Tidak ada biaya tersembunyi, semua harga sudah termasuk pajak dan asuransi"
  },
  { 
    icon: <FaUserCheck />, 
    text: "Kurir Profesional",
    desc: "Tim kurir berpengalaman dengan pelatihan khusus untuk penanganan barang"
  },
  { 
    icon: <FaRoute />, 
    text: "Tracking Real-time",
    desc: "Pantau perjalanan paket Anda secara live melalui aplikasi mobile kami"
  },
  { 
    icon: <FaHeadset />, 
    text: "Support 24/7",
    desc: "Layanan customer service siap membantu kapan saja melalui berbagai channel"
  },
  { 
    icon: <GiDeliveryDrone />, 
    text: "Armada Lengkap",
    desc: "Dari motor hingga truk besar, siap melayani semua jenis pengiriman"
  },
];

export default function WhyChooseUs() {
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
            Mengapa Memilih <span className="text-red-600">AntarBang</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Komitmen kami memberikan pengalaman pengiriman terbaik dengan layanan yang andal dan transparan
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center p-4"
          >
            <div className="text-3xl font-bold text-red-600 mb-1">10K+</div>
            <div className="text-gray-600 text-sm">Pengiriman/Bulan</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center p-4"
          >
            <div className="text-3xl font-bold text-red-600 mb-1">99%</div>
            <div className="text-gray-600 text-sm">Kepuasan Pelanggan</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center p-4"
          >
            <div className="text-3xl font-bold text-red-600 mb-1">24/7</div>
            <div className="text-gray-600 text-sm">Operasional</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center p-4"
          >
            <div className="text-3xl font-bold text-red-600 mb-1">50+</div>
            <div className="text-gray-600 text-sm">Armada Aktif</div>
          </motion.div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-red-300 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-red-50 group-hover:bg-red-100 transition-colors flex items-center justify-center">
                    <div className="text-xl text-red-600 group-hover:scale-110 transition-transform">
                      {r.icon}
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{r.text}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-4xl text-gray-200 mb-2">"</div>
            <p className="text-xl text-gray-700 italic mb-4">
              Pelayanan cepat dan responsif. Paket selalu sampai tepat waktu dengan kondisi baik.
              Recommended untuk pengiriman bisnis!
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <div className="text-left">
                <p className="font-medium text-gray-900">Budi Santoso</p>
                <p className="text-sm text-gray-500">Pemilik UMKM Fashion</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}