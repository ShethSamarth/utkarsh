import Hero from "@/components/Hero"
import Announcements from "@/components/Announcements"
import Coordinators from "@/components/Coordinators"
import MoreInfoModal from "@/components/MoreInfoModal"
import { groq } from "next-sanity"
import { client } from "../lib/sanity.client"

export const revalidate = 60

const annQuery = groq`
    *[_type=='announcements'] | order(_createdAt desc)
  `

const cooQuery = groq`
    *[_type=='coordinators'] | order(_createdAt asc)
  `

const queQuery = groq`
    *[_type=='moreInfo'] | order(_createdAt desc)
  `

export default async function Home() {
  const announcements = await client.fetch(annQuery)
  const coordinators = await client.fetch(cooQuery)
  const moreInfo = await client.fetch(queQuery)
  return (
    <div className="mx-5 md:mx-16">
      <Hero />
      <Announcements announcements={announcements} />
      <Coordinators coordinators={coordinators} />
      <MoreInfoModal info={moreInfo} />
    </div>
  )
}
