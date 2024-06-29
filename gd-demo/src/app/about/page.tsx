import Image from 'next/image';

const AboutPage = () => {
  return (
    <section className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold mb-8">Hakkımızda</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center mb-8">
        
        {/* İlk bölüm: Resim sağda, metin sol tarafta */}
        <div className="order-2 lg:order-1 lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
          <div className="bg-white text-gray-700 border-2 border-green-500 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Biz Kimiz?</h2>
            <p>
              Gıda Dedektifi hesabı Mart 2017’de Instagram’da kurulmuş olan bireysel bir farkındalık projesidir. Kurulduğu günden bu yana tamamen etiket verileri üzerinden etiket okuma farkındalığı ve tüketici bilincini geliştirmeye yönelik paylaşımlar yapan Gıda Dedektifi ilk 6 ayda 350 bin takipçiye ulaşarak bu alanda kırılması zor bir rekora imza atmıştır. Bu teveccüh aynı zamanda ülkemizde etiket okuma farkındalığı ve tüketici bilincinin geliştirilmesi yönündeki ihtiyacı da ortaya koymuştur. Gıda Dedektifi projesi bugün Instagram dışında 5 farklı platformda 1,5 milyonu aşkın takipçiye ulaşmaktadır.
            </p>
            <p className="mt-4">
              Gıda Dedektifi; Musa Özsoy tarafından yönetilmektedir.
            </p>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative mb-8 lg:mb-0">
          <div className="relative w-80 h-80 rounded-full overflow-hidden border-2 border-green-500">
            <Image
              src="/question.jpg"
              alt="Musa Özsoy"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </div>

      {/* İkinci bölüm: Resim solda, metin sağda */}
      <div className="flex flex-col lg:flex-row items-center justify-center mt-12 lg:mt-16">
        <div className=" lg:mr-8 mb-8 lg:mb-0">
          <div className="relative w-80 h-80  rounded-full overflow-hidden border-2 border-green-500">
            <Image
              src="/musaozsoy.jpg"
              alt="Musa Özsoy"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="lg:w-1/2 bg-white text-gray-700 border-2 border-green-500 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Musa Özsoy Kimdir?</h2>
          <p>
            1983 yılında İstanbul Fatih’te doğdu. Yıldız Teknik Üniversitesi Şehir ve Bölge Planlama Bölümü’nden mezun olduktan sonra 2008 yılında İstanbul Teknik Üniversitesi’nde Gayrimenkul Geliştirme Yüksek Lisans programına başladı. Şehir Planlama eğitimi kapsamında aldığı sosyoloji, kent sosyolojisi ve antropoloji dersleri üzerine araştırmalarını yoğunlaştırarak İstanbul Teknik Üniversitesi Gayrimenkul Geliştirme programından ayrılma kararı aldı. 2010 yılında Serbest Şehircilik faaliyetlerine başladı. Yaşadığı bir rahatsızlık sonrasında endüstriyel gıda ürünleriyle ilgili araştırmalarını yoğunlaştırdı. 2016 yılı Mart ayında tüketici farkındalığı ve etiket okuma bilincini geliştirmek üzere Gıda Dedektifi sosyal medya hesabını açtı.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;


