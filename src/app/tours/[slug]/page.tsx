import { notFound } from "next/navigation";

import TourGallery from "@/components/tours/TourGallery";
import TourBookingPanel from "@/components/tours/TourBookingPanel";

import { getTourBySlug } from "@/services/tour.service";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TourDetailsPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const tour = await getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  return (
    <main className="bg-gray-100 min-h-screen py-10">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= Gallery ================= */}

        <TourGallery
          images={tour.tour_images ?? []}
        />

        {/* ================= Content ================= */}

        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          {/* ================= Left ================= */}

          <section className="lg:col-span-2 space-y-8">

            {/* Header */}

            <div className="luxury-card p-8">

              <h1 className="text-4xl font-extrabold">

                {tour.title}

              </h1>

              <div className="flex flex-wrap gap-8 mt-6 text-gray-600">

                <span>

                  ✈️ {tour.origin?.name_fa}

                </span>

                <span>

                  ➜

                </span>

                <span>

                  📍 {tour.destination?.name_fa}

                </span>

              </div>

            </div>

            {/* Description */}

            <div className="luxury-card p-8">

              <h2 className="text-2xl font-bold mb-6">

                توضیحات تور

              </h2>

              <div className="leading-9 whitespace-pre-line">

                {tour.description ||
                  "توضیحاتی برای این تور ثبت نشده است."}

              </div>

            </div>

            {/* Terms */}

            <div className="luxury-card p-8">

              <h2 className="text-2xl font-bold mb-6">

                قوانین و شرایط

              </h2>

              <div className="leading-9 whitespace-pre-line">

                {tour.terms ||
                  "قوانینی ثبت نشده است."}

              </div>

            </div>

            {/* Cancellation */}

            <div className="luxury-card p-8">

              <h2 className="text-2xl font-bold mb-6">

                شرایط کنسلی

              </h2>

              <div className="leading-9 whitespace-pre-line">

                {tour.cancellation_policy ||
                  "شرایط کنسلی ثبت نشده است."}

              </div>

            </div>

          </section>

          {/* ================= Sidebar ================= */}

          <aside>

            <TourBookingPanel
              departures={tour.tour_departures ?? []}
            />

          </aside>

        </div>

      </div>

    </main>
  );
}