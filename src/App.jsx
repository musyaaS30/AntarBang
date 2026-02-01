import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import WhyChooseUs from "./components/WhyChooseUs";
import Register from "./pages/Register";
// import Register from "./pages/Register";

export default function App() {

  const isLogin = localStorage.getItem("session");

  return (
    <BrowserRouter>
      <Routes>

        {/* HOME PROTECTED */}
        <Route
          path="/"
          element={isLogin ? <Home /> : <Navigate to="/login" />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="/why?" element={<WhyChooseUs />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  );
}
