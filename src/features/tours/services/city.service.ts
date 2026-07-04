import { supabase } from "@/lib/supabase";

export interface City {
  id: number;
  name_fa: string;
  name_en: string | null;
}

export async function getCities(): Promise<City[]> {
  const { data, error } = await supabase
    .from("cities")
    .select(`
      id,
      name_fa,
      name_en
    `)
    .order("name_fa");

  if (error) {
    console.error("Cities Error:", error);
    return [];
  }

  return data ?? [];
}