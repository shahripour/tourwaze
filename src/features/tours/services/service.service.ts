import { supabase } from "@/lib/supabase";

export async function getDepartureServices(
  departureId: number
) {
  const { data, error } = await supabase
    .from("departure_services")
    .select(`
      id,
      base_price,
      sell_price,
      is_optional,

      services(
        id,
        name,
        description
      )
    `)
    .eq("departure_id", departureId);

  if (error || !data) {
    return [];
  }

  return data;
}