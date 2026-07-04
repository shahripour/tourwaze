import Hero from "@/components/home/Hero";
import FeaturedTours from "@/components/home/FeaturedTours";
import PopularDestinations from "@/components/home/PopularDestinations";
import Testimonials from "@/components/home/Testimonials";
import LatestTours from "@/components/home/LatestTours";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedTours />
      <PopularDestinations />
      <Testimonials />
      <LatestTours />
    </main>
  );
}