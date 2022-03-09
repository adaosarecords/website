import '../styles/globals.scss'
import Script from 'next/script'
import { NextIntlProvider } from 'next-intl'

import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css'

function MyApp({ Component, pageProps }) {
  SwiperCore.use([Autoplay])
  return (
    <NextIntlProvider locale='es' messages={pageProps.messages}>
      <Component {...pageProps} />
      <Script
        src='https://kit.fontawesome.com/abc21028e3.js'
        crossOrigin='anonymous'
      />
    </NextIntlProvider>
  )
}

export default MyApp
