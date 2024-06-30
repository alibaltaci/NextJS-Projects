import { IIcons, IconReturnerProps } from "@/types";
import { Facebook, Instagram, Twitter, YouTube } from "./";
import Link from "next/link";

const icons:IIcons = {
  twitter: Twitter,
  instagram: Instagram,
  youtube: YouTube,
  facebook: Facebook,
}

export const IconReturner = ( { icon, url }:IconReturnerProps ) => {
    const IconComponent = icons[icon.toLowerCase()] || null;

    if( typeof url === "string" ){
        return(
            <Link href={url} target="_blank" rel="noopener noreferrer" title={icon} >
                <IconComponent />
            </Link>
        )
    }
    return IconComponent ? <IconComponent /> : null;
};
