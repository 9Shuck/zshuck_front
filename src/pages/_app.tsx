import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import NavBar from '@/components/navbar'
import SubFooter from '@/components/subfooter'
import Footer from '@/components/footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>
      <SubFooter/>
    </div>
  )
}
