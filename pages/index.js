import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Swiper, SwiperSlide } from 'swiper/react'
import Layout from '../components/layout/layout'
import ReactPlayer from 'react-player'

import styles from '../styles/Home.module.scss'
import Navbar from '../components/navbar/navbar'
import Domingo from '../public/images/domingo.jpg'

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: await (await import('../messages/es.json')).default,
    },
  }
}

export default function Home() {
  const [isMuted, setIsMuted] = React.useState(true)

  return (
    <Layout>
      <Head>
        <title>Adaosa Records</title>
        <meta name='description' content='Adaosa records music productions' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <header>
          <ReactPlayer
            onReady={() => console.log('playing')}
            className='react-player fixed-bottom'
            url='intro.mp4'
            width='100%'
            height='100%'
            playing={true}
            loop={true}
            volume={1}
            muted={isMuted}
          />
          {isMuted ? (
            <i
              className={'fa-solid fa-volume-xmark'}
              onClick={() => setIsMuted(false)}
            />
          ) : (
            <i
              onClick={() => setIsMuted(true)}
              className='fa-solid fa-volume-high'
            />
          )}
        </header>
      </main>
    </Layout>
  )
}
