
import Layout from '../components/Layout'
import { SeatBookingContextProvider } from '../context_hooks/useSeatBookings'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <SeatBookingContextProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </SeatBookingContextProvider>
  )
}

export default MyApp
