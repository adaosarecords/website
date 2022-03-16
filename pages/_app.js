import React from 'react'
import { useRouter } from 'next/router'
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

import '../styles/globals.scss'
import * as ga from '../lib/ga'

function MyApp({ Component, pageProps }) {
  SwiperCore.use([Autoplay, Navigation, Pagination])
  const router = useRouter()

  // use effect
  React.useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('routeChangeError', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('routeChangeError', handleRouteChange)
    }
  }, [router.events])

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
