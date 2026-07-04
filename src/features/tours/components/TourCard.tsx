import Image from "next/image";

import { TourCardModel } from "@/types/tour";

import Button from "@/components/shared/Button";
import Price from "@/components/shared/Price";
import Badge from "@/components/shared/Badge";

import { formatPersianDate } from "@/utils/date";

export default function TourCard({

  id,
  title,
  slug,
  image,
  origin,
  destination,
  departureDate,
  remainingCapacity,
  price,
  featured,

}: TourCardModel) {

  return (

    <article className="luxury-card overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}

      <div className="relative h-72">

        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
          className="object-cover"
        />

        {featured && (

          <Badge>

            ویژه

          </Badge>

        )}

      </div>

      {/* Body */}

      <div className="space-y-5 p-6">

        <h3 className="line-clamp-2 text-2xl font-bold">

          {title}

        </h3>

        <div className="space-y-2 text-sm text-gray-600">

          <div className="flex items-center justify-between">

            <span>

              مبدا

            </span>

            <span className="font-semibold">

              {origin}

            </span>

          </div>

          <div className="flex items-center justify-between">

            <span>

              مقصد

            </span>

            <span className="font-semibold">

              {destination}

            </span>

          </div>

          <div className="flex items-center justify-between">

            <span>

              تاریخ حرکت

            </span>

            <span className="font-semibold">

              {departureDate
                ? formatPersianDate(departureDate)
                : "-"}

            </span>

          </div>

          <div className="flex items-center justify-between">

            <span>

              ظرفیت باقی‌مانده

            </span>

            <span className="font-semibold text-green-600">

              {remainingCapacity}

              {" "}

              نفر

            </span>

          </div>

        </div>

        <div className="flex items-center justify-between border-t pt-5">

          <Price

            price={price}

          />

          <Button

            href={`/tours/${slug}`}

          >

            مشاهده تور

          </Button>

        </div>

      </div>

    </article>

  );

}