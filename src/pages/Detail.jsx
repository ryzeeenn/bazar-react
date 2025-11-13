import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import data from "../data/data.json";

function Detail() {
  const { id } = useParams();
  const item = data.find((p) => p.id.toString() === id);

  if (!item) {
    return <p>Produk tidak ditemukan!</p>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-6"
    >
      <motion.img
        src={item.gambar || "https://via.placeholder.com/400x300"}
        alt={item.nama}
        className="rounded-lg w-full h-64 object-cover mb-4"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      />
      <h2 className="text-3xl font-bold mb-2">{item.nama}</h2>
      <p className="text-lg text-blue-700 font-semibold mb-3">{item.harga}</p>
      <p className="text-gray-700 mb-6">{item.deskripsi}</p>
      <Link
        to="/list"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Kembali ke Daftar
      </Link>
    </motion.div>
  );
}

export default Detail;
