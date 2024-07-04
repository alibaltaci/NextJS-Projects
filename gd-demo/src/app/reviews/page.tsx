import ReviewsPageProvider from "@/context/ReiviewsPageContext/ReviewsPageContext";
import ReviewPageContent from "@/components/reviews/ReviewPageContent";

const ReviewsPage = () => {

  return(
    <ReviewsPageProvider>
      <ReviewPageContent />
    </ReviewsPageProvider>
  ) 
}

export default ReviewsPage