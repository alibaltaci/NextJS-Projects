"use client"

import { useReviewsContext } from "@/context/ReviewsPageContext";
// import { Metadata } from "next";
import { SuspenseComponent } from "@/components";
import { FilteredReviewsComponent } from "@/components/reviews/FilteredReviewsComponent";

// export const metadata: Metadata = {
//   title: "İncelemeler"
// }

const ReviewsPage = () => {

  const { reviewsData, categoryQuery } = useReviewsContext()

  return(
    <section className="container mx-auto px-4 py-8 mt-16 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">{`${reviewsData.pageTitle} ${categoryQuery ? `> ${categoryQuery.charAt(0).toUpperCase() + categoryQuery.slice(1) }` : ``}`}</h2>
        <div className="flex flex-wrap -mx-4">
          <SuspenseComponent>
            <FilteredReviewsComponent />
          </SuspenseComponent>
      </div>
    </section>
  ) 
}

export default ReviewsPage