import '../styles/globals.scss'
import Script from 'next/script'
import { NextIntlProvider } from 'next-intl'
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar' // Pagination module

function MyApp({ Component, pageProps }) {
  SwiperCore.use([Autoplay, Navigation, Pagination])

  return (
    <NextIntlProvider locale='es' messages={pageProps.messages}>
      <Component {...pageProps} />
      <Script src='https://smtpjs.com/v3/smtp.js' crossOrigin='anonymous' />
      <Script
        src='https://kit.fontawesome.com/abc21028e3.js'
        crossOrigin='anonymous'
      />
    </NextIntlProvider>
  )
}

export default MyApp
