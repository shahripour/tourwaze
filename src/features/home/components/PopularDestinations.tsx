import Image from "next/image";

const destinations = [
  { name: "استانبول", image: "https://jxvupcjitoqjcenfraqf.supabase.co/storage/v1/object/public/tour-images/Istanbul.png" },
  { name: "دبی", image: "https://jxvupcjitoqjcenfraqf.supabase.co/storage/v1/object/public/tour-images/Dubai.png" },
  { name: "مشهد", image: "https://jxvupcjitoqjcenfraqf.supabase.co/storage/v1/object/public/tour-images/Mashhad.png" },
  { name: "کیش", image: "https://jxvupcjitoqjcenfraqf.supabase.co/storage/v1/object/public/tour-images/kish.png" },
];

export default function PopularDestinations() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">مقصدهای محبوب</h2>
          <p className="text-yellow-500 mt-2">پرطرفدارترین مقصدها</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="relative h-64 rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute bottom-4 right-4 text-white">
                <h3 className="text-2xl font-bold">{destination.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}