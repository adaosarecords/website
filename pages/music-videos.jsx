import React from 'react'
import Head from 'next/head'
import ReactPlayer from 'react-player/lazy'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

import styles from '../styles/musicvideos.module.scss'
import Layout from '../components/layout/layout'
import { MUSIC_VIDEOS } from '../data/musicVideos'

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: await (await import(`../messages/${locale}.json`)).default,
    },
  }
}

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

export default function MusicVideos() {
  const [currentVideo, setCurrentVideo] = React.useState(MUSIC_VIDEOS[0])
  const [widthDimension, setWidthDimension] = React.useState(0)

  const deriveScrollDimensions = () => {
    const scrollWidth = window.innerWidth || document.documentElement.innerWidth
    setWidthDimension(scrollWidth)

    return () => {
      window.removeEventListener('resize', deriveScrollDimensions)
    }
  }

  React.useEffect(() => {
    window.addEventListener('resize', deriveScrollDimensions)
    deriveScrollDimensions()
  }, [])

  return (
    <Layout>
      <Head>
        <title>Adaosa Records | Videos Musicales | Music Videos</title>
        <link rel='canonical' href='https://adaosarecords.com/music-videos' />
        <meta
          name='description'
          content='Adaosa records music productions. Music Videos. Videos Musicales'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1 className={styles.heading}>{currentVideo.title}</h1>
        {/* player wrapper  */}
        <div className={styles.playerWrapper}>
          {/* main player  */}
          <div className={styles.mainPlayer}>
            <ReactPlayer
              className={styles.reactPlayer}
              url={currentVideo.videoUrl}
              playing={true}
              loop={true}
              width='100%'
              height='100%'
              playsinline
              volume={1}
              controls={true}
            />
          </div>

          {/* thumb slider  */}
          <div className={styles.slider}>
            <Swiper
              navigation
              pagination
              spaceBetween={50}
              slidesPerView={
                widthDimension < 680 ? 1 : widthDimension < 880 ? 2 : 3
              }
              loop
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {MUSIC_VIDEOS.map((video) => {
                return (
                  <SwiperSlide
                    onClick={() => setCurrentVideo(video)}
                    key={video.id}
                  >
                    <div className={styles.sliderItem}>
                      <Image
                        loader={({ src }) => `${src}?w=${100}&q=${75}`}
                        src={video.imageUrl}
                        layout={'fill'}
                        alt={'video thumb'}
                      />
                    </div>
                    <p className={styles.title}>{video.title}</p>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </main>
    </Layout>
  )
}
