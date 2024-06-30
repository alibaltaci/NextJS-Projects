import { Categories, Hero, LatestReviews } from "@/components";
import { LatestNews } from "@/components/home/latestNews/LatestNews";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <LatestReviews />
      <LatestNews />
    </>

  );
}
