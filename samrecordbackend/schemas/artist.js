export default {
  name: "artist",
  title: "Artist",
  type: "document",
  fields: [
    {
      name: "artistName",
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
