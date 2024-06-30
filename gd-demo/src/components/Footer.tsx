import { footer } from "@/data.json"
import { IconReturner } from "./";


const Footer = () => {

  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto flex justify-center items-center space-x-4">
        {footer.socialMedia.map((data, index) => {
          return (
            <div key={index} className="text-white hover:text-gray-300">
              <IconReturner icon={ data.platform } url={ data.url } />
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;