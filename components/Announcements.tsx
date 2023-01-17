type Props = {
  announcements: Announcement[]
}

const Announcements = ({ announcements }: Props) => {
  return (
    <div className="container mx-auto py-10">
      <p className=" text-3xl lg:text-5xl font-semibold text-gray-500 text-center mt-3">
        Announcements
      </p>
      <div className="flex overflow-x-scroll px-5 py-10 space-x-10">
        {announcements.map((announcement) => (
          <div
            key={announcement._id}
            className="flex flex-col items-center border rounded-3xl p-5 w-full md:w-1/2 lg:w-1/3 shadow-md"
          >
            <p className="text-2xl font-semibold">{announcement.title}</p>
            <p className="text-gray-500 text-center w-60">
              {announcement.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Announcements
