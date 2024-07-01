"use client"
import Link from "next/link"
import { reviewsData } from "@/data.json";
import Image from "next/image";
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from "react";
import { IReview } from "@/types";

const ReviewsPage = () => {

    const searchParams = useSearchParams()

    const categoryQuery = searchParams.get("category") 

    const { reviews, pageTitle } = reviewsData

    const [filteredData, setFilteredData] = useState<IReview[]>(reviews)

    useEffect( () => {
        if( typeof categoryQuery === "string"){
            const filtered = reviews.filter( (review) => review.tags.map(el => el.toLowerCase()).includes( categoryQuery ) )
            setFilteredData( filtered )
        }
        else{
            setFilteredData( reviews )
        }
    }, [ categoryQuery, reviews ] )

  return (
    <section className="container mx-auto px-4 py-8 mt-16 min-h-screen-minus-32px">
    <h2 className="text-3xl font-bold mb-6">{`${pageTitle} ${categoryQuery ? `> ${categoryQuery.charAt(0).toUpperCase() + categoryQuery.slice(1)}` : ``}`} </h2>
    <div className="flex flex-wrap -mx-4">
        {filteredData.map((review, index) => (
            <Link key={index} 
                href={`/reviews/${review.title}`} 
                className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
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

export default ReviewsPage