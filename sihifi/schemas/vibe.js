export default {
  name: "vibe",
  title: "Vibe",
  type: "document",
  fields: [
    {
      name: "vibeName",
      title: "Vibe",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "vibeDescription",
      title: "Description",
      type: "text",
      description: "Optional description of the vibe.",
    },
  ],
};
