export default function Card({ title, image, price }) {
  return (
    <div className="card max-w-sm">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-xl"
      />
      <h2 className="mt-3 font-semibold text-lg">{title}</h2>
      <p className="text-blue-600 font-bold mt-1">${price}</p>
      <button className="btn-primary mt-3 w-full">Beli Sekarang</button>
    </div>
  );
}
