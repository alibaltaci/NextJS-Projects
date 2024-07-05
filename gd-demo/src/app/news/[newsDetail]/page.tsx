import Image from 'next/image';
import { newsData } from "@/data.json";
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateStaticParams() {
    const paths = newsData.news.map((news) => ({
        // newsDetail: news.title,
        // newsDetail: encodeURIComponent(news.title.toLowerCase())
        newsDetail: news.id
    }));
    // console.log("Generated Static Params:", paths);
    return paths;
}

export const generateMetadata = async({ params }: { params: { newsDetail: string } }):Promise<Metadata> => {
    try {
        const news = newsData.news.find( (el) => el.id === params.newsDetail )
        const title = news ? news.title : "Haber Bulunamadı"
        return { title: `${title}` }
    } catch (error) {
        console.log("Error generating metadata: ", error)
        return { title: "Error" }
    }
}

const NewsDetailPage = ({ params }: { params: { newsDetail: number } }) => {

    const { newsDetail } = params;
    
    // const decodedTitle = decodeURIComponent(newsDetail.toLowerCase())
    
    // const newsItem = newsData.news.find((news) => news.title === decodedTitle)
    const newsItem = newsData.news.find(( news ) => news.id === newsDetail.toString() )

    if (!newsItem) {
        return notFound(); 
    }

    return (
        <section className="container mx-auto px-4 py-8 mt-16 min-h-screen">
            <h1 className="text-4xl font-bold mb-4">{newsItem.title}</h1>
            <Image src={newsItem.imgUrl} alt={newsItem.title} width={800} height={400} className="w-full h-96 object-cover rounded-t-lg mb-4" />
            <div className="flex items-center justify-between mb-4 ">
                <div className="flex items-center">
                    <Image src={newsItem.editorImg} alt={newsItem.editor} width={32} height={32} className="w-8 h-8 rounded-full mr-2" />
                    <span>{newsItem.editor}</span>
                </div>
                <span>{newsItem.date}</span>
            </div>
            <p className=" mb-4">{newsItem.content}</p>
            <div className="flex items-center justify-between mb-4">
                <span>{newsItem.read} okunma</span>
                <div className="flex items-center space-x-2">
                    <span>👍 {newsItem.like}</span>
                    <span>👎 {newsItem.dislike}</span>
                </div>
            </div>
            <div className="flex space-x-2">
                {newsItem.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded">{tag}</span>
                ))}
            </div>
        </section>
    );
};

export default NewsDetailPage;
