import Image from "next/image"
import Link from "next/link"
import Navbar from "./Navbar"

const Hero = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="bg-[#a0d1e4]/30 px-6 lg:px-16 py-10 rounded-3xl shadow-lg">
        <Navbar />
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
          <div className="flex flex-col gap-5 lg:gap-10">
            <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium pt-5 lg:pt-0">
              <span className="font-semibold"> UTKARSH,</span>{" "}
              <br className="lg:flex hidden" /> a yearly AMTICS
              <br className="lg:flex hidden" /> sporting occasion
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500">
              Unleash your competitive spirit, <br className="lg:flex hidden" />
              Rise to the challenge.
            </p>
            <Link
              href="https://forms.gle/5gNJrKf6g5Ti6t1G9"
              target="_blank"
              className="px-6 py-3 text-lg md:px-8 md:py-5 md:text-xl font-semibold text-center bg-[#524fd5] text-white rounded-full border-none w-36 lg:w-44 capitalize"
            >
              Register
            </Link>
          </div>
          <Image
            src="/assets/hero1.png"
            alt="hero-icon"
            width={650}
            height={650}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
