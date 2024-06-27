import { socialMediaIconsData } from "@/app/_data"
import Image from "next/image"
import SocialMediaIcon from "./SocialMediaIcon"

const Footer = () => {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
        <Image 
            src="./logo.svg"
            alt="logo"
            width={47}
            height={44}
            className="object-contain" 
        />
        <div className="flex items-center gap-6" >
            {
                socialMediaIconsData.map( (icon) => (
                    <SocialMediaIcon key={icon.iconURL} logoURL={icon.iconURL} alt={icon.alt}  />
                ) )
            }
        </div>
    </footer>
  )
}

export default Footer