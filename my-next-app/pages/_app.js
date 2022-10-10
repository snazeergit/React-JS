import '../styles/globals.css'
import { Footer } from '../component/Footer'
import { Menu } from '../component/Menu'
import { Header } from '../component/Header'

function MyApp({ Component, pageProps }) {
  return <div>
    <Header />
    <Menu />
    <Component {...pageProps}/>
    <Footer />
  </div>
}

export default MyApp
