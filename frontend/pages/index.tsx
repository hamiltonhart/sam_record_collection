import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Musica de Iorio</title>
        <meta name="description" content="All of Sam's albums!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <main><h1>Sam's Music</h1></main>
    </div>
  )
}

export default Home
