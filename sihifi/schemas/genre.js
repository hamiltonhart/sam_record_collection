export default {
  name: "genre",
  title: "Genre",
  type: "document",
  fields: [
    {
      name: "genreName",
      title: "Genre",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "genreDescription",
      title: "Description",
      type: "text",
      description: "Optional description of the genre.",
    },
  ],
};
