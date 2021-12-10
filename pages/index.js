import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'

export default function Home() {
  console.log(process.env.BASE_API_URL)
  return (
    <div>
      <Head>
        <title>{`${process.env.APP_NAME}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/* HEADER */}
      <Nav />
      {/* NAV */}

      {/* RESULTS */}
    </div>
  )
}
