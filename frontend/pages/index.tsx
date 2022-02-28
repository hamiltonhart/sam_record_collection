import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Card } from "../components/global/styles/Containers";
import { SquareImage } from "../components/global/styles/Images";
import client from "../lib/sanity";

interface AlbumData {
  _id: string;
  albumName?: string;
}

interface ArtistData {
  _id: string;
  artistName: string;
}

interface Data {
  artistData: ArtistData[];
  albumData: AlbumData[];
}

interface Props {
  data: Data;
}

const Home: NextPage<Props> = ({ data }) => {
  const {
    artistData,
    albumData,
  }: { artistData: ArtistData[]; albumData: AlbumData[] } = data;

  // TODO
  // Begin creating components to handle the information above

  return (
    <>
      {console.log(artistData[1].artistImage.asset.url)}
      <Head>
        <title>SIHIFI | Home</title>
        <meta
          name="description"
          content="Welcome to SIHIFI. Here you will find all the albums in my collection."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>SIHIFI</h1>
      </main>
      <Card backgroundColor="var(--primary)">
        <Image
          src={artistData[1].artistImage.asset.url}
          width="180px"
          height="180px"
        />

        <h3>Album</h3>
      </Card>
    </>
  );
};

// const artistQuery = `*[_type == "artist"]{artistName, albums[] -> {albumName, albumYear, genres[] -> {genreName}, vibes[] -> {vibeName}}} | order(artistName asc)`;

const artistQuery = `*[_type == "artist"][0...10]{_id, artistName, discogsArtistId, artistImage{asset->{url}}}`;
const albumQuery = `*[_type == "album"][0...10]{_id, albumName}`;

export async function getStaticProps() {
  const artistData: any = await client.fetch(artistQuery);
  const albumData: any = await client.fetch(albumQuery);

  const data = { artistData, albumData };

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}

export default Home;

// const headers = {
//   "Content-Type": "application/json",
//   Authorization: `Discogs key=${process.env.NEXT_PUBLIC_DISCOGS_KEY}, secret=${process.env.NEXT_PUBLIC_DISCOGS_SECRET}`,
// };

// const myInit = { headers: headers };

// const myRequest = new Request(
//   "https://api.discogs.com/masters/122963",
//   myInit
// );

// fetch(myRequest).then((response) =>
//   response.json().then((data) => console.log(data)))
// );
