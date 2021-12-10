import Head from 'next/head'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import Nav from '../components/Nav'
import { useGetMoviesQuery, useGetMoviesByCodeQuery } from '../store/api.slice'
import { getCookie } from '../utils/cookies'

export default function Home() {
  const token = useSelector((state) => state.app.token)
  const { data } = useGetMoviesQuery({ token }, { skip: !token })
  const { data: aMovie } = useGetMoviesByCodeQuery({ id: 1, token }, { skip: !token })
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
