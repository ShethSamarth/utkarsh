import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <header className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
      <Link href="/">
        <Image
          className="hover:scale-110 ease-in-out"
          src="/assets/logo.png"
          alt="logo"
          width={120}
          height={120}
        />
      </Link>
      <nav className="flex flex-row justify-center  lg:justify-between items-center gap-5">
        <Link href="/" className="hover:scale-110 ease-in-out">
          Home
        </Link>
        <Link href="/sports" className="hover:scale-110 ease-in-out">
          Sports
        </Link>
        <Link href="/coordinators" className="hover:scale-110 ease-in-out">
          Coordinators
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
