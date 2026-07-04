import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
export default async function DomesticToursPage() {
  const { data: tours, error } = await supabase
  .from("tours")
  .select("*");

console.log(tours, error);
  return (
    <main className="min-h-screen bg-gray-100 p-8" dir="rtl">
      <h1 className="text-4xl font-bold text-yellow-700 mb-14">
        تورهای داخلی
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
  {tours?.map((tour) => (
    <TourCard
      key={tour.id}
      city={tour.city}
      price={tour.price.toLocaleString()}
      image={tour.image}
    />
  ))}
</div>
    </main>
  );
}

function TourCard({
  city,
  price,
  image,
}: {
  city: string;
  price: string;
  image: string;
}) {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
      <Image
        src={image}
        alt={city}
        width={500}
        height={300}
        className="block w-full h-52 object-contain bg-black"
      />

      <div className="pt-6 px-6 pb-6">
        <h2 className="text-2xl font-bold text-gray-900">{city}</h2>
        <p className="mt-2 text-gray-600">هتل 5 ستاره</p>
        <p className="mt-1 text-gray-600">3 شب و 4 روز</p>
        <p className="mt-4 text-yellow-700 font-bold text-xl">
          {price} تومان
        </p>

        <Link href="/booking">
  <button className="mt-4 w-full bg-black text-white py-3 rounded-xl">
    رزرو
  </button>
</Link>
      </div>
    </div>
  );
}