import urlFor from "@/lib/urlFor"
import Image from "next/image"
import Link from "next/link"

type Props = {
  coordinators: Coordinator[]
}

const Coordinators = ({ coordinators }: Props) => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <p className="text-3xl lg:text-5xl font-semibold text-gray-500">
          Meet our Coordinators
        </p>
        <Link
          href="/coordinators"
          className="text-sm md:text-base font-medium text-blue-500 uppercase hover:underline"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 lg:py-20">
        {coordinators.slice(0, 3).map((coordinator) => (
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

export default Coordinators
