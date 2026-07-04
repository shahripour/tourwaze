import Image from "next/image";
import Link from "next/link";
import { getFeaturedTours } from "@/services/tour.service";

export default async function FeaturedTours() {
  const tours = await getFeaturedTours();

  if (!tours || tours.length === 0) return null;

  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">تورهای ویژه</h2>
          <p className="text-yellow-500 mt-2">محبوب‌ترین پیشنهادها</p>
        </div>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div
                key={tour.id}
                className="w-[350px] bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                <div className="relative h-72">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold">{tour.title}</h3>

                  <p className="text-yellow-500 font-bold mt-3">
                    {tour.price
                      ? `${Number(tour.price).toLocaleString("fa-IR")} تومان`
                      : "تماس بگیرید"}
                  </p>

                  <Link href={`/tours/${tour.slug}`}>
                    <button className="premium-btn mt-5 px-5 py-3 w-full">
                      مشاهده تور
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}