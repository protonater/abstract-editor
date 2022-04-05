import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Meta } from '../components/meta';
import { globalStyles } from "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />
      {globalStyles}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
