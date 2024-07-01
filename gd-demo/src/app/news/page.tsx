import Link from "next/link"
import { newsData } from "@/data.json";
import Image from "next/image";

const NewsPage = () => {
  return (
    <section className="container mx-auto px-4 py-8 mt-16">
    <h2 className="text-3xl font-bold mb-6">{newsData.pageTitle}</h2>
    <div className="flex flex-wrap -mx-4">
        {newsData.news.map((news, index) => (
            <Link key={index} href="/news/[slug]" as={`/news/${encodeURIComponent(news.title)}`} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
                    <Image src={news.imgUrl} alt={news.title} width={400} height={200} className="w-full h-40 object-cover rounded-t-lg mb-4" />
                    <div className="flex flex-col justify-between flex-grow">
                        <h3 className="text-xl font-bold mb-2 text-gray-800">{news.title}</h3>
                        <div className="flex items-center justify-between mb-2 text-gray-600">
                            <div className="flex items-center">
                                <Image src={news.editorImg} alt={news.editor} width={32} height={32} className="w-8 h-8 rounded-full mr-2" />
                                <span>{news.editor}</span>
                            </div>
                            <span>{news.date}</span>
                        </div>
                        <div className="flex items-center justify-between text-gray-600">
                            <span>{news.read} okunma</span>
                            <div className="flex items-center space-x-2">
                                <span>👍 {news.like}</span>
                                <span>👎 {news.dislike}</span>
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

export default NewsPage