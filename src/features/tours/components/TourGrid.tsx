import TourCard from "./TourCard";
import { TourCardModel } from "@/types/tour";

interface Props {
  tours: TourCardModel[];
}

export default function TourGrid({
  tours,
}: Props) {

  if (tours.length === 0) {

    return (
      <div className="text-center py-20">

        <h2 className="text-3xl font-bold">

          هیچ توری پیدا نشد

        </h2>

      </div>
    );

  }

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

      {tours.map((tour) => (

        <TourCard

          key={tour.id}

          {...tour}

        />

      ))}

    </div>

  );

}