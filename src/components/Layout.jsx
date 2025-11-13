import { Outlet, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* NAVBAR */}
      <nav className="bg-blue-600 text-white px-6 py-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="font-bold text-xl">Bazar Sekolah</h1>
          <div className="space-x-6 text-white font-medium">
            <Link to="/" className="hover:text-gray-200 transition">
              Home
            </Link>
            <Link to="/list" className="hover:text-gray-200 transition">
              List
            </Link>
            <Link to="/about" className="hover:text-gray-200 transition">
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* ISI HALAMAN */}
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex-grow flex justify-center items-start p-6"
      >
        <div className="w-full max-w-6xl bg-white rounded-xl shadow p-6">
          <Outlet />
        </div>
      </motion.main>

      {/* FOOTER */}
      <footer className="bg-blue-600 text-white text-center py-3 text-sm">
        © {new Date().getFullYear()} Bazar Sekolah — Semua Hak Dilindungi
      </footer>
    </div>
  );
}

export default Layout;
