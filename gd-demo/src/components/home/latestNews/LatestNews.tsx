import { newsData } from "@/data.json"
import Image from "next/image";
import Link from "next/link";

export const LatestNews = () => {

    const [firstNews, ...otherNews] = newsData.news;
    return (
      <section className="container mx-auto px-4 py-8 ">
      <h2 className="text-3xl font-bold mb-6">{newsData.pageTitle}</h2>
      <div className="flex flex-wrap -mx-4">
          {/* Main News Item */}
          <Link href={`/news/${firstNews.id}`} className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                      <Image src={firstNews.imgUrl} alt={firstNews.title} width={800} height={400} className="w-full h-64 object-cover rounded-t-lg mb-4" />
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{firstNews.title}</h3>
                      <div className="flex items-center justify-between mb-2 text-gray-600">
                          <div className="flex items-center">
                              <Image src={firstNews.editorImg} alt={firstNews.editor} width={32} height={32} className="w-8 h-8 rounded-full mr-2" />
                              <span>{firstNews.editor}</span>
                          </div>
                          <span>{firstNews.date}</span>
                      </div>
                      <div className="flex items-center justify-between text-gray-600">
                          <span>{firstNews.read} okunma</span>
                          <div className="flex items-center space-x-2">
                              <span>👍 {firstNews.like}</span>
                              <span>👎 {firstNews.dislike}</span>
                          </div>
                      </div>
                  </div>
          </Link>

          {/* Other News Items */}
          <div className="w-full lg:w-1/2 px-4">
              {otherNews.slice(0, 3).map((news, index) => (
                  <Link key={index} href={`/news/${news.id}`} className="flex mb-4 bg-white p-4 rounded-lg shadow-lg">
                          <Image src={news.imgUrl} alt={news.title} width={96} height={96} className="w-24 h-24 object-cover rounded-lg mr-4" />
                          <div className="flex-1">
                              <h4 className="text-lg font-bold mb-1 text-gray-800">{news.title}</h4>
                              <div className="flex items-center justify-between text-gray-600">
                                  <div className="flex items-center">
                                      <Image src={news.editorImg} alt={news.editor} width={24} height={24} className="w-6 h-6 rounded-full mr-2" />
                                      <span>{news.editor}</span>
                                  </div>
                              </div>
                              <span className="text-gray-600">{news.read} okunma</span>
                          </div>
                  </Link>
              ))}
          </div>
      </div>
  </section>
  )
}
