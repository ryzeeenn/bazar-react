import { useLocation, useNavigate } from "react-router-dom";

export default function Checkout() {
  const { state: product } = useLocation();
  const navigate = useNavigate();

  if (!product) {
    return (
      <div className="p-5">
        <p className="text-red-500">Tidak ada produk.</p>

        <button
          className="mt-3 bg-gray-700 text-white px-3 py-1 rounded"
          onClick={() => navigate("/list")}
        >
          Kembali ke List
        </button>
      </div>
    );
  }

  const handlePay = () => {
    alert("Pembelian berhasil!");
    navigate("/list"); // balik ke list
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-3">Checkout</h2>

      <div className="border p-4 rounded shadow w-72">
        <img src={product.img} className="rounded mb-2" />

        <h3 className="font-semibold">{product.name}</h3>
        <p>Harga: Rp{product.price.toLocaleString()}</p>
        <p>Stok: {product.stock}</p>

        <button
          onClick={handlePay}
          className="mt-4 bg-blue-600 text-white px-3 py-2 rounded w-full"
        >
          Bayar Sekarang
        </button>
      </div>
    </div>
  );
}
