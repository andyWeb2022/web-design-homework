import '../src/styles/global.css';

export default function App({ Component, pageProps }) {
  return <>
          <head>
            <title>期末作業</title>
            <meta property="og:title" content="Mentor Zoo" key="title" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </head>
          <Component {...pageProps} />
        </>
}
