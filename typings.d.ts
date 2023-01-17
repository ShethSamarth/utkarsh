type Base = {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}

interface Reference {
  ref: string
  _type: "reference"
}

interface Image {
  _type: "image"
  asset: Reference
}

interface Announcement extends Base {
  title: string
  desc: string
}

interface Coordinator extends Base {
  name: string
  image: Image
  role: string[]
}

interface Info extends Base {
  title: string
  desc: string
}

interface Sport extends Base {
  name: string
  image: Image
}
