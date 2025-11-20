import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function List() {
  const defaultProducts = [
    { id: 1, name: "Sneakers Putih", price: 350000, img: "/images/sepatu.jpg", stock: 10 },
    { id: 2, name: "Thermaltake CPU Gaming", price: 7540000, img: "/images/cpu1.jpg", stock: 5 },
    { id: 3, name: "STONE ISLAND Hooded Jacket", price: 4010000, img: "/images/jaket1.jpg", stock: 3 },
    { id: 4, name: "REI Co-op Backpacking", price: 220000, img: "/images/tas.jpg", stock: 12 }
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    let saved = localStorage.getItem("products");

    if (saved) {
      setProducts(JSON.parse(saved));
    } else {
      localStorage.setItem("products", JSON.stringify(defaultProducts));
      setProducts(defaultProducts);
    }
  }, []);

  return (
    <div className="p-10 grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map(p => (
        <div key={p.id} className="border rounded-lg p-3 shadow">
          <img src={p.img} className="rounded-md mb-2" />
          <h3 className="font-semibold">{p.name}</h3>
          <p className="text-gray-600">Rp{p.price.toLocaleString()}</p>
          <p className="text-sm text-gray-500">Stok: {p.stock}</p>

          <Link
            to={`/checkout/${p.id}`}
            className="mt-2 block bg-blue-600 text-white text-center py-1 rounded"
          >
            Beli
          </Link>
        </div>
      ))}
    </div>
  );
}
