import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>{`${process.env.APP_NAME}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/* HEADER */}

      {/* NAV */}

      {/* RESULTS */}
    </div>
  )
}
