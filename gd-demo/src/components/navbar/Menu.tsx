import { useNavbarContext } from "./NavContext"
import { NavbarItem } from "./"
import Image from "next/image"
import Link from "next/link";

export const Menu = () => {

  const { navbar } = useNavbarContext();

  return (
    <div className="flex items-center justify-between w-full">
      <Link href="/" >
          <Image 
            src="/logo.png"
            alt="logo"
            height={150}
            width={225}
            className="object-contain"
            />
      </Link>
      <div className="hidden  md:flex md:items-center">
        <div className="flex space-x-4">
          {
            navbar.map((item) => (
              <NavbarItem key={item.id} data={item} />
            ))
          }
        </div>
      </div>
    </div>
  );
}