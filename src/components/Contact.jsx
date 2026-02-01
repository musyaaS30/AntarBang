import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaWhatsapp, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhoneAlt,
  FaClock,
  FaPaperPlane,
  FaCheckCircle 
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      info: "+62 812 3456 7890",
      color: "text-green-500",
      bgColor: "bg-green-50",
      link: "https://wa.me/6281234567890",
      description: "Chat langsung dengan CS kami"
    },
    {
      icon: <FaPhoneAlt />,
      title: "Telepon",
      info: "(021) 1234-5678",
      color: "text-red-500",
      bgColor: "bg-red-50",
      link: "tel:+622112345678",
      description: "Layanan 24/7"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      info: "support@antarbang.com",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      link: "mailto:support@antarbang.com",
      description: "Respon dalam 1x24 jam"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Kantor Pusat",
      info: "Jl. Sudirman No.123, Jakarta",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      description: "Gedung Express Tower Lt.5"
    },
    {
      icon: <FaClock />,
      title: "Jam Operasional",
      info: "Senin - Minggu",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      description: "24 Jam / 7 Hari"
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hubungi <span className="text-red-600">Kami</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Tim support kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Informasi Kontak</h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className={`p-3 rounded-lg ${item.bgColor} ${item.color}`}>
                    <div className="text-xl">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        target={item.title === "WhatsApp" ? "_blank" : "_self"}
                        className="block text-lg font-medium text-gray-800 hover:text-red-600 transition-colors"
                      >
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-lg font-medium text-gray-800">{item.info}</p>
                    )}
                    <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map/Office Hours */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-6 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl border border-red-200"
            >
              <h4 className="font-bold text-gray-900 mb-3">Lokasi Kantor</h4>
              <div className="aspect-video bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-3xl text-red-500 mx-auto mb-2" />
                  <p className="font-medium text-gray-800">Jakarta Pusat</p>
                  <p className="text-sm text-gray-600">Lihat di Google Maps</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Kirim Pesan</h3>
              <p className="text-gray-600 mb-8">Isi form di bawah dan kami akan segera merespons</p>

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <FaCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Pesan Terkirim!</h4>
                  <p className="text-gray-600">Terima kasih telah menghubungi kami. Tim kami akan segera merespons.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition"
                        placeholder="Masukkan nama"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition"
                        placeholder="email@contoh.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition"
                      placeholder="0812 3456 7890"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subjek *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition"
                    >
                      <option value="">Pilih subjek</option>
                      <option value="pengiriman">Pertanyaan Pengiriman</option>
                      <option value="tarif">Konsultasi Tarif</option>
                      <option value="keluhan">Keluhan Layanan</option>
                      <option value="kerjasama">Kerja Sama Bisnis</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition resize-none"
                      placeholder="Tulis pesan Anda di sini..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      w-full py-4 rounded-lg font-semibold text-white
                      flex items-center justify-center gap-3
                      transition-all duration-300
                      ${isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 hover:shadow-lg'
                      }
                    `}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        Kirim Pesan
                        <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}