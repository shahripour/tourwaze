import Image from "next/image";
import Link from "next/link";

import { getLatestTours } from "@/services/tour.service";

export default async function LatestTours() {
  const tours = await getLatestTours();

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold">
            جدیدترین تورها
          </h2>

          <p className="mt-2 text-gray-500">
            تازه‌ترین تورهای اضافه شده
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {tours.map((tour) => (

            <div
              key={tour.id}
              className="overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="relative h-64">

                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="space-y-4 p-6">

                <h3 className="text-xl font-bold">
                  {tour.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {tour.origin} → {tour.destination}
                </p>

                <p className="text-sm">
                  تاریخ حرکت:
                  <span className="font-semibold mr-2">
                    {tour.departureDate}
                  </span>
                </p>

                <p className="text-lg font-bold text-amber-600">
                  {tour.price.toLocaleString()}
                  {" "}
                  تومان
                </p>

                <p className="text-sm text-gray-500">
                  ظرفیت باقی‌مانده:
                  {" "}
                  {tour.remainingCapacity}
                  {" "}
                  نفر
                </p>

                <Link
                  href={`/tours/${tour.slug}`}
                  className="block rounded-xl bg-black py-3 text-center text-white transition hover:bg-amber-500"
                >
                  مشاهده تور
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}