export default function List() {
  return (
    <div className="p-10 grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="border rounded-lg p-3 shadow">
        <img src="/images/sepatu.jpg" alt="Sepatu" className="rounded-md mb-2" />
        <h3 className="font-semibold">Sneakers Putih</h3>
        <p className="text-gray-600">Rp350.000</p>
      </div>

      <div className="border rounded-lg p-3 shadow">
       <img src="/images/cpu1.jpg" alt="Sepatu" className="rounded-md mb-2" />
        <h3 className="font-semibold">Thermaltake  CPU Gaming PC</h3>
        <p className="text-gray-600">Rp7.540.000</p>
      </div>

      <div className="border rounded-lg p-3 shadow">
       <img src="/images/jaket1.jpg" alt="Sepatu" className="rounded-md mb-2" />
        <h3 className="font-semibold">STONE ISLAND Hooded Jacket</h3>
        <p className="text-gray-600">Rp4.010.000</p>
      </div>

      <div className="border rounded-lg p-3 shadow">
        <img src="/images/tas.jpg" alt="Sepatu" className="rounded-md mb-2" />
        <h3 className="font-semibold">REI Co-op Backpacking </h3>
        <p className="text-gray-600">Rp220.000</p>
      </div>
    </div>
  );
}
