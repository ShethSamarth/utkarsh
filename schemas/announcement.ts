import { defineField, defineType } from "sanity"

export default defineType({
  name: "announcements",
  title: "Announcements",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "desc",
      title: "Description",
      type: "text",
    }),
  ],
})
