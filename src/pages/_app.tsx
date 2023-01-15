import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import NavBar from '@/components/navbar'
import Footer from '@/components/subfooter'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}
