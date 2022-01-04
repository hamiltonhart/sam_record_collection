import type { NextPage } from "next";
import Head from "next/head";

import Typography from "@mui/material/Typography";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Musica de Iorio</title>
        <meta name="description" content="All of Sam's albums!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Typography variant="h1" align="center">
          Sam's Music
        </Typography>
      </main>
    </div>
  );
};

export default Home;
