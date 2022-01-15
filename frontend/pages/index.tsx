import type { NextPage } from "next";
import Head from "next/head";
import client from "../lib/sanity";

import Typography from "@mui/material/Typography";
import { Album } from "@mui/icons-material";

const Home: NextPage = ({ data }) => {
  const { artistData }: { artistData: any[] } = data;

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
        {artistData.map((artist: any, index: number) => (
          <div key={index}>
            <h1>{artist.name}</h1>
            {artist.albums?.map((album: any) => (
              <div>
                <h3 key={album.name}>{album.albumName}</h3>
                <p>{album.albumArt.url}</p>
              </div>
            ))}
          </div>
        ))}
      </main>
    </div>
  );
};

const artistQuery = `*[_type == "artist"]{name, albums[] -> {albumName, albumYear, albumArt}}`;

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
