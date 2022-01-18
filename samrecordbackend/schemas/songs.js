export default {
  name: "songs",
  title: "Songs",
  type: "document",
  fields: [
    {
      name: "trackNumber",
      title: "Track Number",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "trackName",
      title: "Track Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "trackExample",
      title: "Track Example",
      type: "url",
      description: "Optional link to an example of the track.",
    },
  ],
};
