import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft, FaUserCircle } from "react-icons/fa";

const reviews = [
  { 
    name: "Budi Santoso", 
    role: "Pemilik UMKM Fashion",
    comment: "Pengiriman cepat dan aman! Sudah 2 tahun pakai AntarBang untuk kirim produk ke customer, belum pernah ada masalah.",
    rating: 5,
    date: "2 hari lalu"
  },
  { 
    name: "Sari Wijaya", 
    role: "HR Manager Perusahaan",
    comment: "Kurir ramah dan profesional. Untuk pengiriman dokumen penting kantor, saya selalu percayakan ke AntarBang.",
    rating: 5,
    date: "1 minggu lalu"
  },
  { 
    name: "Andi Pratama", 
    role: "Mahasiswa",
    comment: "Harga terjangkau, recommended! Kirim barang ke kampung halaman selalu tepat waktu dan kondisi baik.",
    rating: 4,
    date: "3 hari lalu"
  },
  { 
    name: "Dewi Kusuma", 
    role: "Online Shop Owner",
    comment: "Tracking real-time sangat membantu. Customer bisa pantau paket mereka sendiri, mengurangi pertanyaan ke saya.",
    rating: 5,
    date: "5 hari lalu"
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kata <span className="text-red-600">Pelanggan</span> Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lihat pengalaman nyata dari ribuan pelanggan yang telah mempercayakan pengiriman mereka
          </p>
        </motion.div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row items-center justify-between mb-12 p-6 bg-white rounded-xl shadow-sm border border-gray-100"
        >
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="text-4xl font-bold text-gray-900 mb-1">4.9</div>
            <div className="flex justify-center md:justify-start gap-1 text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-gray-600 text-sm">Dari 1.200+ ulasan</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">98%</div>
              <p className="text-gray-600 text-sm">Kepuasan</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">99%</div>
              <p className="text-gray-600 text-sm">Ketepatan</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-2xl font-bold text-gray-900">95%</div>
              <p className="text-gray-600 text-sm">Keamanan</p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-red-200 hover:shadow-md transition-all"
            >
              {/* Quote Icon */}
              <div className="text-red-100 text-3xl mb-4">
                <FaQuoteLeft />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <FaStar 
                    key={idx} 
                    className={idx < r.rating ? "text-yellow-400" : "text-gray-300"}
                    size={16}
                  />
                ))}
                <span className="text-gray-500 text-sm ml-2">{r.date}</span>
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-6 leading-relaxed">"{r.comment}"</p>

              {/* User Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-100 to-red-200 flex items-center justify-center text-red-600">
                  <FaUserCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{r.name}</h4>
                  <p className="text-gray-500 text-sm">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-red-50 to-red-100 rounded-xl">
            <div className="text-red-600">
              <FaStar size={24} />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900">Bagaimana pengalaman Anda dengan AntarBang?</p>
              <p className="text-gray-600 text-sm">Bagikan cerita Anda untuk membantu orang lain</p>
            </div>
            <button className="px-5 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap">
              Beri Ulasan
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}