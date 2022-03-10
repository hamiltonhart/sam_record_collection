import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ImageHeaderCard } from "../components/cards/ImageHeaderCard";
import { Card } from "../components/global/styles/Containers";
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
      <ImageHeaderCard
        imageSrc={artistData[1].artistImage.asset.url}
        cardTitle="Artists"
        headingColor="var(--black)"
        backgroundColor="var(--primary)"
      />
      <ImageHeaderCard
        imageSrc={albumData[1].albumArt.asset.url}
        cardTitle="Albums"
        reverse={true}
      />
    </>
  );
};

// const artistQuery = `*[_type == "artist"]{artistName, albums[] -> {albumName, albumYear, genres[] -> {genreName}, vibes[] -> {vibeName}}} | order(artistName asc)`;

const artistQuery = `*[_type == "artist"][0...10]{_id, artistName, discogsArtistId, artistImage{asset->{url}}}`;
const albumQuery = `*[_type == "album"][0...10]{_id, albumName, albumArt{asset->{url}}}`;

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
