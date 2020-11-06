import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Main/Navbar';
import Footer from '../Components/Main/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}

export default MyApp
