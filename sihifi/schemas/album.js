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
      name: "discogsAlbumId",
      title: "Discogs ID",
      type: "string",
      description:
        "The ID for the album when viewing the page on Discogs. It is in the URL bar and is a number.",
    },
    {
      name: "albumYear",
      title: "Year",
      type: "string",
    },
    {
      name: "albumVersion",
      title: "Version",
      type: "string",
    },
    {
      name: "artists",
      title: "Artist(s)",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "artist" },
        },
      ],
    },
    {
      name: "featuredArtists",
      title: "Featured Artist(s)",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "artist" },
        },
      ],
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
      name: "genres",
      title: "Genres",
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
