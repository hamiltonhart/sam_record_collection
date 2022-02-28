import type { NextPage } from "next";
import Head from "next/head";
import client from "../lib/sanity";

import ArtistHome from "../components/artist/ArtistHome";

import Typography from "@mui/material/Typography";

interface AlbumData {
  albumName?: string;
  albumYear?: string;
  genres?: string[];
  vibes?: string[];
}

interface ArtistData {
  artistName: string;
  albums?: AlbumData[];
}

interface Data {
  artistData: ArtistData[];
}

interface Props {
  data: Data;
}

const Home: NextPage<Props> = ({ data }) => {
  const { artistData }: { artistData: ArtistData[] } = data;

  const testFetch = () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Discogs key=${process.env.NEXT_PUBLIC_DISCOGS_KEY}, secret=${process.env.NEXT_PUBLIC_DISCOGS_SECRET}`,
    };

    const myInit = { headers: headers };

    const myRequest = new Request(
      "https://api.discogs.com/masters/122963",
      myInit
    );

    fetch(myRequest).then((response) =>
      response.json().then((data) => console.log(data.tracklist))
    );
  };

  return (
    <div>
      {testFetch()}
      <Head>
        <title>SIHIFI</title>
        <meta name="description" content="All of Sam's Albums!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Typography variant="h1" align="center">
          SIHIFI
        </Typography>
        <Typography variant="h3">{`Total Artists: ${artistData.length}`}</Typography>
        {artistData.map((artist: ArtistData) => (
          <div key={artist.artistName}>
            <ArtistHome artistName={artist.artistName} />
          </div>
        ))}
      </main>
    </div>
  );
};

// const artistQuery = `*[_type == "artist"]{artistName, albums[] -> {albumName, albumYear, genres[] -> {genreName}, vibes[] -> {vibeName}}} | order(artistName asc)`;

const artistQuery = `*[_type == "artist"][0...10]{artistName}`;

export async function getStaticProps() {
  const artistData: any = await client.fetch(artistQuery);

  const data = { artistData };

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
