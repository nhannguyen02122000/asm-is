import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />

  return (
    <>
      <Head>
        <title>AnimeN</title>
        <meta name="description" content="Anime watching platform" />
        <meta charSet="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/iamdustan-smoothscroll/0.4.0/smoothscroll.min.js"></script>
      </Head>
      {/* <Provider store={store}> */}
      <Component {...pageProps} />
      {/* </Provider> */}
      <WBLoader />
      <GALoader />
    </>
  )
}

export default MyApp
