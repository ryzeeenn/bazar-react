import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Checkout() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("products")) || [];
    const found = data.find(p => p.id === Number(id));
    setProduct(found);
  }, [id]);

  const handlePay = () => {
    const data = JSON.parse(localStorage.getItem("products"));

    const updated = data.map(p =>
      p.id === Number(id) ? { ...p, stock: p.stock - 1 } : p
    );

    localStorage.setItem("products", JSON.stringify(updated));

    alert("Pembelian Berhasil!");
    navigate("/list");
  };

  if (!product) return <p>Produk tidak ditemukan</p>;

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

        <button
          className="mt-3 bg-gray-300 text-black px-3 py-2 rounded w-full"
          onClick={() => navigate("/list")}
        >
          Kembali
        </button>
      </div>
    </div>
  );
}
