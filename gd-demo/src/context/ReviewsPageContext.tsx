"use client"

import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"
import { reviewsData } from "@/data.json"
import { IChildren, IReview, IReviewsData } from "@/types"
import { useSearchParams } from "next/navigation"

interface IReviewsContext {
    reviewsData: IReviewsData
    filteredData: IReview[]
    setFilteredData: Dispatch<SetStateAction<IReview[]>>
    categoryQuery: string | null
}

const initialValue: IReviewsContext = {
    reviewsData: reviewsData,
    filteredData: [],
    setFilteredData: () => {},
    categoryQuery: null
}

export const ReviewsPageContext = createContext<IReviewsContext>( initialValue )

// Hook
export const useReviewsContext = () => {
    const context = useContext(ReviewsPageContext);
    if (!context) {
      throw new Error("useReviewsContext must be used within a ReviewsPageProvider!");
    }
    return context;
  };

const ReviewsPageProvider = ({children}:IChildren) => {

    const searchParams = useSearchParams()

    const categoryQuery = searchParams.get("category") 

    const [filteredData, setFilteredData] = useState<IReview[]>(reviewsData.reviews)

  return (
    <ReviewsPageContext.Provider value={ {reviewsData, filteredData, setFilteredData, categoryQuery} }>
        { children }
    </ReviewsPageContext.Provider>
  )
}

export default ReviewsPageProvider