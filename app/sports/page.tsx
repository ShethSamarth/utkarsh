import Image from "next/image"
import Navbar from "@/components/Navbar"
import { groq } from "next-sanity"
import { client } from "@/lib/sanity.client"
import urlFor from "@/lib/urlFor"

export const revalidate = 60

const spoQuery = groq`
    *[_type=='sports'] | order(_createdAt asc)
  `

async function SportsPage() {
  const sports: Sport[] = await client.fetch(spoQuery)
  return (
    <div className="mx-5 md:mx-16 my-10">
      <div className="bg-[#a0d1e4]/30 px-6 lg:px-16 py-5 rounded-3xl">
        <Navbar />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-16 py-20">
        {sports.map((sport) => (
          <div
            key={sport._id}
            className="flex flex-col gap-5 items-center border p-3 rounded-3xl"
          >
            <Image
              src={urlFor(sport.image.asset).url()}
              alt={sport.name}
              width={150}
              height={150}
            />
            <p className="text-2xl font-semibold text-black">{sport.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SportsPage
