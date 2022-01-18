export default {
  name: "album",
  title: "Album",
  type: "document",
  fields: [
    {
      name: "albumName",
      title: "Album Name",
      type: "string",
      validation: (Rule) => Rule.required(),
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
      name: "albumVersion",
      title: "Version",
      type: "string",
    },
    {
      name: "genres",
      title: "Generes",
      type: "array",
      of: [{ type: "reference", to: { type: "genre" } }],
    },
    {
      name: "vibes",
      title: "Vibes",
      type: "array",
      of: [{ type: "reference", to: { type: "vibe" } }],
    },
    {
      name: "personalLinerNotes",
      title: "Sam's Liner Notes",
      type: "blockContent",
    },
  ],
};
