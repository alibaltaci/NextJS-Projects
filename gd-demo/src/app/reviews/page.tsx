import { reviewsData } from "@/data.json";
import { FilteredReviewsComponent } from "@/components/reviews/FilteredReviewsComponent";
import { SuspenseComponent } from "@/components";

const ReviewsPage = () => {

    const { reviews, pageTitle } = reviewsData

    //  ${categoryQuery ? `> ${categoryQuery.charAt(0).toUpperCase() + categoryQuery.slice(1) }` : ``}

  return (
      <SuspenseComponent>
      <section className="container mx-auto px-4 py-8 mt-16 min-h-screen-minus-32px">
        <h2 className="text-3xl font-bold mb-6">{`${pageTitle} `} 
        </h2>
        <div className="flex flex-wrap -mx-4">
            <FilteredReviewsComponent reviews={reviews} />
        </div>
      </section>
      </SuspenseComponent>
  )
}

export default ReviewsPage