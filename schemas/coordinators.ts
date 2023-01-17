import { defineField, defineType } from "sanity"

export default defineType({
  name: "coordinators",
  title: "Coordinators",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    {
      name: "role",
      title: "Role",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
})
