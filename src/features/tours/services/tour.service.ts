import { supabase } from "@/lib/supabase";
import { TourCardModel } from "@/types/tour";

/* ==========================================
   Featured Tours
========================================== */

export async function getFeaturedTours(): Promise<TourCardModel[]> {
  const { data, error } = await supabase
    .from("tours")
    .select(`
      id,
      title,
      slug,
      is_featured,
      active,

      origin:cities!origin_city_id(name_fa),

      destination:cities!destination_city_id(name_fa),

      tour_images(
        image_url,
        sort_order
      ),

      tour_departures(
        departure_date,
        remaining_capacity,
        base_price
      )
    `)
    .eq("active", true)
    .eq("is_featured", true);

  if (error || !data) return [];

  return mapTours(data);
}

/* ==========================================
   Latest Tours
========================================== */

export async function getLatestTours(limit = 6) {
  const { data, error } = await supabase
    .from("tours")
    .select(`
      id,
      title,
      slug,
      is_featured,
      created_at,

      origin:cities!origin_city_id(name_fa),

      destination:cities!destination_city_id(name_fa),

      tour_images(
        image_url,
        sort_order
      ),

      tour_departures(
        departure_date,
        remaining_capacity,
        base_price
      )
    `)
    .eq("active", true)
    .order("created_at", {
      ascending: false,
    })
    .limit(limit);

  if (error || !data) return [];

  return mapTours(data);
}

/* ==========================================
   Search
========================================== */

export async function searchTours(filters: {
  origin?: number;
  destination?: number;
}) {
  let query = supabase
    .from("tours")
    .select(`
      id,
      title,
      slug,
      is_featured,

      origin:cities!origin_city_id(name_fa),

      destination:cities!destination_city_id(name_fa),

      tour_images(
        image_url,
        sort_order
      ),

      tour_departures(
        departure_date,
        remaining_capacity,
        base_price
      )
    `)
    .eq("active", true);

  if (filters.origin) {
    query = query.eq(
      "origin_city_id",
      filters.origin
    );
  }

  if (filters.destination) {
    query = query.eq(
      "destination_city_id",
      filters.destination
    );
  }

  const { data, error } = await query;

  if (error || !data) return [];

  return mapTours(data);
}

/* ==========================================
   Tour Details
========================================== */

export async function getTourBySlug(
  slug: string
) {
  const { data, error } = await supabase
    .from("tours")
    .select(`
      *,

      origin:cities!origin_city_id(
        name_fa
      ),

      destination:cities!destination_city_id(
        name_fa
      ),

      tour_images(
        *
      ),

      tour_departures(
        *
      )
    `)
    .eq("slug", slug)
    .single();

  if (error) {

    console.log(error);

    return null;

  }

  return data;
}

/* ==========================================
   Mapper
========================================== */

function mapTours(
  data: any[]
): TourCardModel[] {

  return data.map((tour) => {

    const image =
      tour.tour_images
        ?.sort(
          (a: any, b: any) =>
            a.sort_order - b.sort_order
        )[0]?.image_url ?? "/fallback.jpg";

    const departure =
      tour.tour_departures?.[0];

    return {

      id: tour.id,

      title: tour.title,

      slug: tour.slug,

      image,

      origin:
        tour.origin?.name_fa ?? "",

      destination:
        tour.destination?.name_fa ?? "",

      departureDate:
        departure?.departure_date ?? "",

      remainingCapacity:
        departure?.remaining_capacity ?? 0,

      price:
        Number(
          departure?.base_price ?? 0
        ),

      featured:
        tour.is_featured,

    };

  });

}