
import Link from "next/link"
import { reviewsData } from "@/data.json";
import Image from "next/image";

const ReviewsPages = () => {

  const { reviews, pageTitle } = reviewsData
  
  return (
    <section className="container mx-auto px-4 py-8 mt-16">
    <h2 className="text-3xl font-bold mb-6">{pageTitle}</h2>
    <div className="flex flex-wrap -mx-4">
        {reviews.map((review, index) => (
            <Link key={index} href={`/reviews/${review.title}`} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
                    <Image src={review.imgUrl} alt={review.title} width={400} height={200} className="w-full h-40 object-cover rounded-t-lg mb-4" />
                    <div className="flex flex-col justify-between flex-grow">
                        <h3 className="text-xl font-bold mb-2 text-gray-800">{review.title}</h3>
                        <div className="flex items-center justify-between mb-2 text-gray-600">
                            <div className="flex items-center">
                                <Image src={review.editorImg} alt={review.editor} width={32} height={32} className="w-8 h-8 rounded-full mr-2" />
                                <span>{review.editor}</span>
                            </div>
                            <span>{review.date}</span>
                        </div>
                        <div className="flex items-center justify-between text-gray-600">
                            <span>{review.read} okunma</span>
                            <div className="flex items-center space-x-2">
                                <span>👍 {review.like}</span>
                                <span>👎 {review.dislike}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        ))}
    </div>
</section>
  )
}

export default ReviewsPages