import ReviewsPageProvider from '@/context/ReviewsPageContext'
import { IChildren } from '@/types'
import React from 'react'

const ReviewPageLayout = ({ children }: IChildren ) => {
  return (
    <ReviewsPageProvider>
        {children}
    </ReviewsPageProvider>
  )
}

export default ReviewPageLayout