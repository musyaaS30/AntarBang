import { motion } from "framer-motion";
import { 
  FaClipboardCheck, 
  FaCreditCard, 
  FaTruckPickup, 
  FaCogs, 
  FaHome 
} from "react-icons/fa";

const steps = [
  {
    title: "Isi Form Pengiriman",
    description: "Lengkapi detail pengiriman melalui website atau aplikasi.",
    icon: <FaClipboardCheck />
  },
  {
    title: "Pembayaran",
    description: "Bayar dengan metode pilihan: transfer, e-wallet, atau tunai.",
    icon: <FaCreditCard />
  },
  {
    title: "Penjemputan",
    description: "Kurir kami akan menjemput paket di lokasi Anda.",
    icon: <FaTruckPickup />
  },
  {
    title: "Proses",
    description: "Paket diproses dengan sistem tracking yang aman.",
    icon: <FaCogs />
  },
  {
    title: "Sampai Tujuan",
    description: "Paket tiba tepat waktu, dapat dilacak real-time.",
    icon: <FaHome />
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Cara Kerja <span className="text-red-600">AntarBang</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            5 langkah mudah untuk mengirim barang ke seluruh Indonesia
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200 dark:bg-red-900/30 hidden md:block"></div>
          
          {/* Mobile Connecting Line */}
          <div className="absolute left-6 top-0 h-full w-1 bg-red-200 dark:bg-red-900/30 md:hidden"></div>

          {/* Steps */}
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Number */}
                <div className={`
                  absolute left-0 md:left-1/2 
                  transform md:-translate-x-1/2
                  flex h-12 w-12 items-center justify-center 
                  rounded-full 
                  bg-gradient-to-r from-red-600 to-red-700 
                  text-white font-bold 
                  shadow-lg
                  z-10
                  ${i % 2 === 0 ? "md:-translate-y-4" : "md:-translate-y-4"}
                `}>
                  {i + 1}
                </div>

                {/* Content Card */}
                <div className={`
                  ml-16 md:ml-0 md:w-5/12 
                  ${i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}
                  p-5 
                  bg-gray-50 dark:bg-gray-800 
                  rounded-xl 
                  border border-gray-200 dark:border-gray-700
                  hover:border-red-300 dark:hover:border-red-700
                  transition-colors
                `}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-red-600 dark:text-red-400 text-xl">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Simple */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors">
            Mulai Kirim Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}