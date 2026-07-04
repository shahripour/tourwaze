"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageItem {
  id: number;
  image_url: string;
  sort_order: number;
}

interface Props {
  images: ImageItem[];
}

export default function TourGallery({ images }: Props) {
  const sorted = [...images].sort(
    (a, b) => a.sort_order - b.sort_order
  );

  const [selected, setSelected] = useState(
    sorted[0]?.image_url
  );

  if (!sorted.length) return null;

  return (
    <section className="luxury-card overflow-hidden">

      {/* تصویر اصلی */}

      <div className="relative h-[520px]">

        <Image
          src={selected}
          alt=""
          fill
          priority
          className="object-cover"
        />

      </div>

      {/* تصاویر کوچک */}

      <div className="grid grid-cols-5 gap-3 p-4 bg-white">

        {sorted.map((img) => (

          <button
            key={img.id}
            onClick={() => setSelected(img.image_url)}
            className={`relative h-24 overflow-hidden rounded-xl border-2 transition

            ${
              selected === img.image_url
                ? "border-yellow-500"
                : "border-transparent"
            }`}
          >

            <Image
              src={img.image_url}
              alt=""
              fill
              className="object-cover"
            />

          </button>

        ))}

      </div>

    </section>
  );
}