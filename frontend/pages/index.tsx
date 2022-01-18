import type { NextPage } from "next";
import Head from "next/head";
import client from "../lib/sanity";

import Typography from "@mui/material/Typography";

interface AlbumData {
  albumName?: string;
  albumYear?: string;
  genres?: string[];
  vibes?: string[];
}

interface ArtistData {
  artistName: string;
  albums?: AlbumData;
}

const Home: NextPage = ({ data }) => {
  const { artistData }: { artistData: ArtistData[] } = data;

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
        {artistData.map((artist: ArtistData) => (
          <div key={artist.artistName}>
            <h1>{artist.artistName}</h1>
            {artist.albums?.map((album: AlbumData) => (
              <div key={album.albumName}>
                <h3>
                  {album.albumName} -
                  {/* {album.albumYear && ` - ${albumYear}`} */}
                  {album.albumYear}
                </h3>
                <h4>Genres</h4>
                <ul>
                  {album.genres?.map((genre: any) => (
                    <li key={genre.genreName}>{genre.genreName}</li>
                  ))}
                </ul>
                <h4>Vibes</h4>
                <ul>
                  {album.vibes?.map((vibe: any) => (
                    <li key={vibe.vibe}>{vibe.vibeName}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </main>
    </div>
  );
};

const artistQuery = `*[_type == "artist"]{artistName, albums[] -> {albumName, albumYear, genres[] -> {genreName}, vibes[] -> {vibeName}}} | order(artistName asc)`;

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
