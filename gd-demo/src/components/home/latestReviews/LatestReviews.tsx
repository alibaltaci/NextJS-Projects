import { reviewsData } from "@/data.json";
import Image from "next/image";
import Link from "next/link";

export const LatestReviews = () => {
  const reviews = reviewsData.reviews.slice(0, 4);

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">{reviewsData.pageTitle}</h2>
      <div className="flex flex-wrap -mx-4">
        {reviews.map((review, index) => (
          <Link key={index} href={`/reviews/${review.id}`} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image src={review.imgUrl} alt={review.title} width={800} height={400} className="w-full h-48 object-cover rounded-t-lg mb-4" />
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
          </Link>
        ))}
      </div>
    </section>
  );
};