export interface TourCardModel {
  id: number;

  title: string;

  slug: string;

  image: string;

  origin: string;

  destination: string;

  departureDate: string;

  remainingCapacity: number;

  price: number;

  featured?: boolean;
}

export interface FeaturedTourModel extends TourCardModel {}

export interface LatestTourModel extends TourCardModel {}

export interface SearchTourModel extends TourCardModel {}