import { SuspenseComponent } from '@/components'
import ReviewsPageProvider from '@/context/ReviewsPageContext'
import { IChildren } from '@/types'
import { metadata } from '@/components/reviews/metadata'

const ReviewPageLayout = ({ children }: IChildren ) => {
  return (
    <SuspenseComponent>
      <ReviewsPageProvider>
          {children}
      </ReviewsPageProvider>
    </SuspenseComponent>
  )
}

export { metadata }
export default ReviewPageLayout