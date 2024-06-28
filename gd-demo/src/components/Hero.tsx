import Image from "next/image"

const Hero = () => {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">

    <div className="flex-1 flex flex-col z-10" >
        <Image 
            src="/logo.png"
            alt="logo"
            width={500}
            height={300}
            className="object-contain"
        />
        <h1 className="sm:text-6xl text-3xl green-gradient lg:max-w-lg font-bold leading-[120%] pl-10">
            Gıda Dedektifi <br /><span className="red-gradient">#NeYediğiniziBilin</span>
        </h1>
    </div>
    <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
        {/* <Image 
            src="/anime.png"
            alt="anime"
            fill
            className="object-contain"
        /> */}
    </div>
</header>
  )
}

export default Hero