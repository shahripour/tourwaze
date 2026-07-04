import TourGrid from "@/components/tours/TourGrid";
import TourFilters from "@/components/tours/TourFilters";

import { searchTours } from "@/services/tour.service";
import { getCities } from "@/services/city.service";
import { getTourCategories } from "@/services/category.service";

interface Props {
  searchParams: Promise<{
    origin?: string;
    destination?: string;
    category?: string;
  }>;
}

export default async function ToursPage({
  searchParams,
}: Props) {

  const params = await searchParams;

  const tours = await searchTours({
    origin: params.origin
      ? Number(params.origin)
      : undefined,

    destination: params.destination
      ? Number(params.destination)
      : undefined,

    category: params.category
      ? Number(params.category)
      : undefined,
  });

  const cities = await getCities();

  const categories = await getTourCategories();

  return (
    <main className="bg-[var(--background)] min-h-screen">

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">

        <div className="mb-10">

          <h1 className="text-5xl font-bold">
            تورها
          </h1>

          <p className="text-gray-500 mt-3">
            بهترین تورهای داخلی و خارجی
          </p>

        </div>

        <TourFilters
          cities={cities}
          categories={categories}
        />

        <TourGrid tours={tours} />

      </section>

    </main>
  );
}