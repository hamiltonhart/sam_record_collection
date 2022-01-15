export default {
  name: "album",
  title: "Album",
  type: "document",
  fields: [
    {
      name: "albumName",
      title: "Album Name",
      type: "string",
    },
    {
      name: "albumYear",
      title: "Year",
      type: "string",
    },
    {
      name: "albumArt",
      title: "Album Art",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
  ],
};
