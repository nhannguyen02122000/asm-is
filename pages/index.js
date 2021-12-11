import Head from 'next/head'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import { useGetMoviesQuery, useGetSuggestionQuery } from '../store/api.slice'
import { eraseCookie } from '../utils/cookies'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const token = useSelector((state) => state.app.token)
  const { data, error: errorMovie, isLoading } = useGetMoviesQuery({ token }, { skip: !token })
  const { data: dataSuggestion, error: errorSuggesion } = useGetSuggestionQuery({ token }, { skip: !token })

  useEffect(() => {
    if (!errorSuggesion && !errorMovie) return
    if (
      // (errorAMovie.status === 403 && errorAMovie.data.code === 'token_not_valid') ||
      errorMovie.status === 403 &&
      errorMovie.data.code === 'token_not_valid'
    ) {
      eraseCookie('ACCESS_TOKEN')
      router.push('/login')
    }
  }, [errorSuggesion, errorMovie])

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
      {!isLoading && data ? (
        <Results data={data.result} />
      ) : (
        <div className="flex flex-col items-center justify-center mt-12">
          <div className="w-10 h-10 border-b-2 border-white rounded-full animate-spin"></div>
          <p className="mt-2">Đợi một chút nhé</p>
        </div>
      )}
      {/* RESULTS */}
    </div>
  )
}
