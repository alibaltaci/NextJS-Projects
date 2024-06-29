import Image from 'next/image';
import { reviewsData } from "@/data.json";
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const paths = reviewsData.reviews.map((review) => ({
        reviewDetail: encodeURIComponent(review.title)

    }));
    return paths;
}

const ReviewDetailPage = ({ params }: { params: { reviewDetail: string } }) => {

    const { reviewDetail } = params;

    const decodedTitle = decodeURIComponent(reviewDetail); 
    
    const reviewItem = reviewsData.reviews.find((review) => review.title === decodedTitle);

    if (!reviewItem) {
        return <div className='mt-16'>Ürün bulunamadı</div>;
        // return notFound(); 
    }

    const { title, imgUrl, editorImg, editor, date, content, read, like, dislike, tags } = reviewItem

    return (
        <section className="container mx-auto px-4 py-8 mt-16">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <Image src={imgUrl} alt={title} width={800} height={400} className="w-full h-96 object-cover rounded-t-lg mb-4" />
            <div className="flex items-center justify-between mb-4 ">
                <div className="flex items-center">
                    <Image src={editorImg} alt={editor} width={32} height={32} className="w-8 h-8 rounded-full mr-2" />
                    <span>{editor}</span>
                </div>
                <span>{date}</span>
            </div>
            <p className=" mb-4">{content}</p>
            <div className="flex items-center justify-between mb-4">
                <span>{read} okunma</span>
                <div className="flex items-center space-x-2">
                    <span>👍 {like}</span>
                    <span>👎 {dislike}</span>
                </div>
            </div>
            <div className="flex space-x-2">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded">{tag}</span>
                ))}
            </div>
        </section>
    );
};

export default ReviewDetailPage;
