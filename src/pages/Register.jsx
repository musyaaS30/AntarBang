import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUser, FaLock, FaEnvelope, FaPhone, FaEye, FaEyeSlash, FaTruck } from "react-icons/fa";
import { GiSpeedometer } from "react-icons/gi";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
    
    // Clear errors when user types
    if (name === "email") setEmailError("");
    if (name === "password" || name === "confirm") setPasswordError("");
  };

  const validateForm = () => {
    let isValid = true;
    
    // Validate password match
    if (form.password !== form.confirm) {
      setPasswordError("Password tidak cocok");
      isValid = false;
    } else if (form.password.length < 6) {
      setPasswordError("Password minimal 6 karakter");
      isValid = false;
    } else {
      setPasswordError("");
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setEmailError("Format email tidak valid");
      isValid = false;
    }
    
    return isValid;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const alreadyExist = users.find(u => u.email === form.email);

    if (alreadyExist) {
      setEmailError("Email sudah terdaftar!");
      setIsLoading(false);
      return;
    }

    const newUser = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      password: form.password,
      createdAt: new Date().toISOString(),
      role: "user"
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setIsLoading(false);
    alert("Registrasi berhasil! Silakan login.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-red-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full grid lg:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-2xl border border-red-100"
      >
        {/* Left Side - Brand & Info */}
        <div className="hidden lg:block relative p-12 bg-gradient-to-br from-red-50 via-white to-red-100">
          <div className="relative z-10 h-full flex flex-col justify-center">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-red-700 flex items-center justify-center shadow-lg">
                  <FaTruck className="text-white text-xl" />
                </div>
                <div className="absolute -top-1 -right-1">
                  <GiSpeedometer className="text-red-500 text-sm animate-spin" style={{ animationDuration: '2s' }} />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                    ANTAR
                  </span>
                  <span className="text-2xl font-black text-gray-900">BANG</span>
                </div>
                <p className="text-xs text-gray-600 font-medium">Express Delivery</p>
              </div>
            </div>

            {/* Slogan */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Bergabung dengan <span className="text-red-600">Kami</span>
            </h1>
            <p className="text-gray-600 mb-8">
              Daftar sekarang untuk mendapatkan akses penuh ke layanan pengiriman tercepat dan terlengkap.
            </p>

            {/* Background Pattern */}
            <div className="absolute bottom-0 right-0 opacity-10">
              <svg width="200" height="200" viewBox="0 0 200 200">
                <path d="M37.5,-49.5C49.9,-41.3,62.2,-33.6,66.7,-21.9C71.2,-10.2,68,5.5,62.2,19C56.3,32.5,48,43.8,37.5,53.3C27,62.8,14.3,70.5,2.7,66.9C-8.9,63.2,-17.8,48.3,-28.8,37.5C-39.8,26.7,-52.9,20,-59.2,9.3C-65.5,-1.4,-65.1,-16,-58.3,-26.1C-51.5,-36.2,-38.3,-41.8,-26.8,-50.3C-15.3,-58.8,-5.3,-70.2,4.7,-77.2C14.7,-84.2,25.1,-57.7,37.5,-49.5Z" 
                  transform="translate(100 100)" 
                  fill="currentColor"
                  className="text-red-400"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Side - Register Form */}
        <div className="p-8 md:p-12">
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-600 to-red-700 flex items-center justify-center shadow">
                <FaTruck className="text-white text-lg" />
              </div>
              <div className="absolute -top-1 -right-1">
                <GiSpeedometer className="text-red-500 text-xs animate-spin" style={{ animationDuration: '2s' }} />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                  ANTAR
                </span>
                <span className="text-xl font-black text-gray-900">BANG</span>
              </div>
              <p className="text-xs text-gray-600 font-medium">Express Delivery</p>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Buat Akun <span className="text-red-600">Baru</span>
              </h2>
              <p className="text-gray-600">Daftar untuk mulai menggunakan layanan kami</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama lengkap"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@contoh.com"
                    required
                    className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition ${
                      emailError ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                </div>
                {emailError && (
                  <p className="mt-1 text-sm text-red-600">{emailError}</p>
                )}
              </div>

              {/* Phone Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nomor Telepon *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="0812 3456 7890"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Minimal 6 karakter"
                    required
                    className="w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Konfirmasi Password *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type={showConfirm ? "text" : "password"}
                    name="confirm"
                    value={form.confirm}
                    onChange={handleChange}
                    placeholder="Ulangi password"
                    required
                    className={`w-full pl-10 pr-12 py-3 bg-gray-50 border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition ${
                      passwordError ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showConfirm ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {passwordError && (
                  <p className="mt-1 text-sm text-red-600">{passwordError}</p>
                )}
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start mt-4">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  Saya menyetujui{" "}
                  <button type="button" className="text-red-600 hover:text-red-700">
                    Syarat & Ketentuan
                  </button>{" "}
                  dan{" "}
                  <button type="button" className="text-red-600 hover:text-red-700">
                    Kebijakan Privasi
                  </button>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`
                  w-full py-3 px-4 mt-6 rounded-lg font-semibold text-white
                  flex items-center justify-center gap-3
                  transition-all duration-300
                  ${isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 hover:shadow-lg'
                  }
                `}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Membuat Akun...
                  </>
                ) : (
                  <>
                    <FaUser />
                    Daftar Sekarang
                  </>
                )}
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                Sudah punya akun?{" "}
                <button
                  onClick={() => navigate("/login")}
                  className="font-semibold text-red-600 hover:text-red-700 transition"
                >
                  Masuk di sini
                </button>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}