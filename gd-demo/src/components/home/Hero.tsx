import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full h-screen sm:gap-10 gap-0">

    <div className="flex-1 flex flex-col z-10 items-center justify-center text-center" >
        <Image 
            src="/logo.png"
            alt="logo"
            width={500}
            height={300}
            className="object-contain"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl  green-gradient lg:max-w-lg font-bold leading-[120%]">
            Gıda Dedektifi <br />
            <span className="text-3xl sm:text-4xl md:text-5xl red-gradient">#NeYediğiniziBilin</span>
        </h1>
    </div>
    <div className="lg:flex-1 relative w-full h-[60vh] justify-center">
        <Link href="https://gidadedektifi.com/" target="_blank" >
            <Image 
                src="/gdapp.gif"
                alt="Gıda Dedektifi App"
                fill
                className="object-contain"
            />
        </Link>
    </div>
</header>
  )
}

export default Hero