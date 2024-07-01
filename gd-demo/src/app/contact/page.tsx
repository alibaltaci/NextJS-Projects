import { contact } from "@/data.json"

const ContactPage = () => {

  const { pageTitle, address, mailData, map } = contact

  return (
    <section className="container mx-auto px-4 py-8 mt-16 h-screen">
      <h1 className="text-3xl font-bold mb-8">{ pageTitle }</h1>
      <div className="bg-white text-black shadow-md rounded-lg p-8 mb-8 flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-4 mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4 text-black">{address.title}</h2>
          {
            address.content.map( (el, index) => (
              <p key={index} className="mb-2">{ el }</p>
            ) )
          }
          <h3 className="text-xl font-semibold mt-6 mb-4">{ mailData.title }</h3>
          <p className="text-blue-500 text-xl">
            <a href={ mailData.route }>{mailData.mail}</a>
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="w-full h-64 rounded-lg shadow-md overflow-hidden">
            <iframe
              src={map.url}
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen={true}
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;



