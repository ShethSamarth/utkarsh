import Navbar from "@/components/Navbar"
import { groq } from "next-sanity"
import { client } from "../../lib/sanity.client"
import Image from "next/image"
import urlFor from "@/lib/urlFor"

export const revalidate = 60

const cooQuery = groq`
    *[_type=='coordinators'] | order(_createdAt asc)
  `

async function CoordinatorsPage() {
  const coordinators: Coordinator[] = await client.fetch(cooQuery)
  return (
    <div className="mx-5 md:mx-16 my-10">
      <div className="bg-[#a0d1e4]/30 px-6 lg:px-16 py-5 rounded-3xl">
        <Navbar />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 lg:py-20">
        {coordinators.map((coordinator) => (
          <div
            key={coordinator._id}
            className="flex flex-col px-5 py-2 mx-auto"
          >
            <Image
              className="h-80 w-80 object-cover rounded-3xl"
              src={urlFor(coordinator.image.asset).url()}
              alt={coordinator.name}
              width={350}
              height={350}
            />
            <p className="text-2xl font-semibold">{coordinator.name}</p>
            {coordinator.role.map((rol) => (
              <p key={rol} className="text-gray-500">
                {rol}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CoordinatorsPage
