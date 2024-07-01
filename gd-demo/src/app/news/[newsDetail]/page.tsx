import Image from 'next/image';
import { newsData } from "../../../data.json";
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const paths = newsData.news.map((news) => ({
        // newsDetail: news.title,
        newsDetail: encodeURIComponent(news.title.toLowerCase())

    }));
    // console.log("Generated Static Params:", paths);
    return paths;
}

const NewsDetailPage = ({ params }: { params: { newsDetail: string } }) => {

    const { newsDetail } = params;
    
    const decodedTitle = decodeURIComponent(newsDetail.toLowerCase()); 
    
    const newsItem = newsData.news.find((news) => news.title === decodedTitle);

    if (!newsItem) {
        // return <div className='mt-16'>Haber bulunamadı</div>;
        return notFound(); 
    }

    return (
        <section className="container mx-auto px-4 py-8 mt-16">
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
