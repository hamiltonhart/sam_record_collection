import type { NextPage } from "next";
import Head from "next/head";
import client from "../lib/sanity";

import ArtistHome from "../components/artist/ArtistHome";

import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useState } from "react";

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

  const [clicked, setClicked] = useState("");

  // Album: https://api.discogs.com/masters/
  // Artist: https://api.discogs.com/artists/

  const buttonPress = () => {
    // fetch(`https://api.discogs.com/masters/122963`)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));

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
      response.json().then((data) => setClicked(data.images[0].uri))
    );
  };

  return (
    <div>
      <Head>
        <title>Musica de Iorio</title>
        <meta name="description" content="All of Sam's Albums!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Typography variant="h1" align="center">
          Sam's Music
        </Typography>
      </main>
      <div>
        <Button variant="contained" onClick={() => buttonPress()}>
          Push Me
        </Button>
        {clicked && (
          <p>
            <img src={clicked} />
          </p>
        )}
      </div>
    </div>
  );
};

// const artistQuery = `*[_type == "artist"]{artistName, albums[] -> {albumName, albumYear, genres[] -> {genreName}, vibes[] -> {vibeName}}} | order(artistName asc)`;

const artistQuery = `*[_type == "artist"]{artistName}`;

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
