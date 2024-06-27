import Image from "next/image"

type SocialMediaIconProps = {
    logoURL: string;
    alt: string;
}

const SocialMediaIcon = ({logoURL, alt}:SocialMediaIconProps) => {
  return (
    <Image
        src={logoURL}
        alt={alt}
        width={19}
        height={19}
        className="object-contain"
    />
  )
}

export default SocialMediaIcon