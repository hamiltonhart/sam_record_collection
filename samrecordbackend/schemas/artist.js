export default {
  name: "artist",
  title: "Artist",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "albums",
      title: "Albums",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "album" },
        },
      ],
    },
  ],
};
