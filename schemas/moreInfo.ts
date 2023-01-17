import { defineField, defineType } from "sanity"

export default defineType({
  name: "moreInfo",
  title: "MoreInfo",
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
