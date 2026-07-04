import Link from "next/link";
export default function InternationalToursPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8" dir="rtl">
      <h1 className="text-4xl font-bold text-yellow-700 mb-8">
        تورهای خارجی
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <TourCard city="دبی" price="23,500,000" />
        <TourCard city="استانبول" price="18,900,000" />
        <TourCard city="آنتالیا" price="21,500,000" />
      </div>
    </main>
  );
}

function TourCard({
  city,
  price,
}: {
  city: string;
  price: string;
}) {
  return (
    <div className="border rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold">{city}</h2>
      <p className="mt-4 text-yellow-600 font-bold">{price} تومان</p>
      <Link href="/booking">
  <button className="mt-4 w-full bg-black text-white py-3 rounded-xl">
    رزرو
  </button>
</Link>
    </div>
  );
}