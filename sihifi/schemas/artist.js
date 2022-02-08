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
      name: "discogsArtistId",
      title: "Discogs ID",
      type: "string",
      description:
        "The ID for the artist when viewing their page on Discogs. It is in the URL bar and is a number.",
    },
    {
      name: "artistImage",
      title: "Artist Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
