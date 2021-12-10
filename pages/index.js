import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>{`${process.env.APP_NAME}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      Let's build {`${process.env.APP_NAME}`}
    </div>
  )
}
