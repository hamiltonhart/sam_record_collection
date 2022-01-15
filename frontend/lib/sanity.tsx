import sanityClient from "@sanity/client";

const client: {
  projectId: string;
  dataset: string;
  token: string;
  useCdn: boolean;
  ignoreBrowserTokenWarning: boolean;
} = sanityClient({
  projectId: process.env.PROJECT_ID,
  dataset: "production",
  token: process.env.API_TOKEN,
  useCdn: false,
  ignoreBrowserTokenWarning: true,
});

export default client;
