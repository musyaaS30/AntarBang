import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash, FaTruck } from "react-icons/fa";
import { GiSpeedometer } from "react-icons/gi";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      alert("Email atau password salah!");
      setIsLoading(false);
      return;
    }

    localStorage.setItem("session", JSON.stringify(user));
    setIsLoading(false);
    navigate("/");
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
              Fast & Safe <span className="text-red-600">Delivery</span>
            </h1>
            <p className="text-gray-600 mb-8">
              Akses dashboard pengiriman Anda, lacak paket secara real-time, dan kelola semua pengiriman dalam satu tempat.
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

        {/* Right Side - Login Form */}
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
                Selamat <span className="text-red-600">Datang</span>
              </h2>
              <p className="text-gray-600">Masuk ke akun AntarBang Anda</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@contoh.com"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-sm text-gray-500 hover:text-gray-700 transition"
                  >
                    {showPassword ? 'Sembunyikan' : 'Tampilkan'}
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan password"
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
                <div className="flex justify-end mt-2">
                  <button
                    type="button"
                    className="text-sm text-red-600 hover:text-red-700 transition"
                  >
                    Lupa password?
                  </button>
                </div>
              </div>

              {/* Remember Me & Submit */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">Ingat saya</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`
                  w-full py-3 px-4 rounded-lg font-semibold text-white
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
                    Memproses...
                  </>
                ) : (
                  <>
                    <FaUser />
                    Masuk ke Akun
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-8">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">atau</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <button
                type="button"
                className="w-full py-3 px-4 bg-white border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition flex items-center justify-center gap-3 shadow-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Lanjutkan dengan Google
              </button>
            </div>

            {/* Register Link */}
            <p className="text-center mt-8 text-gray-600">
              Belum punya akun?{' '}
              <button
                onClick={() => navigate("/register")}
                className="text-red-600 hover:text-red-700 font-medium transition"
              >
                Daftar sekarang
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}