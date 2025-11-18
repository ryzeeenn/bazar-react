import { useParams, useNavigate } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Sneakers Putih",
      price: 350000,
      img: "/images/sepatu.jpg",
      stock: 10
    },
    {
      id: 2,
      name: "Thermaltake CPU Gaming",
      price: 7540000,
      img: "/images/cpu1.jpg",
      stock: 5
    },
    {
      id: 3,
      name: "STONE ISLAND Hooded Jacket",
      price: 4010000,
      img: "/images/jaket1.jpg",
      stock: 3
    },
    {
      id: 4,
      name: "REI Co-op Backpacking",
      price: 220000,
      img: "/images/tas.jpg",
      stock: 12
    }
  ];

  const product = products.find((p) => p.id == id);

  const handleCheckout = () => {
    navigate("/checkout", { state: product });
  };

  return (
    <div className="p-5">
      <img src={product.img} className="rounded mb-3 w-64" />

      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p className="text-gray-700">Rp{product.price.toLocaleString()}</p>
      <p className="text-gray-500 mb-3">Stok: {product.stock}</p>

      <button
        onClick={handleCheckout}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Checkout
      </button>
    </div>
  );
}
