import { supabase } from "@/lib/supabase";

export interface TourCategory {
  id: number;
  title: string;
}

export async function getTourCategories(): Promise<TourCategory[]> {
  const { data, error } = await supabase
    .from("tour_categories")
    .select(`
      id,
      title
    `)
    .order("title");

  if (error) {
    console.error("Category Error:", error);
    return [];
  }

  return data ?? [];
}