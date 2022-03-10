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
      messages: await (await import('../messages/es.json')).default,
    },
  }
}

export default function MusicVideos() {
  const [currentVideo, setCurrentVideo] = React.useState(MUSIC_VIDEOS[0])

  return (
    <Layout>
      <Head>
        <title>Adaosa Records</title>
        <meta name='description' content='Adaosa records music productions' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h2 style={{ padding: '0', margin: '0', marginBottom: '20px' }}>
          {currentVideo.title}
        </h2>
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
              volume={0.04}
              controls={true}
            />
          </div>

          {/* thumb slider  */}
          <div className={styles.slider}>
            <Swiper
              navigation
              pagination
              spaceBetween={50}
              slidesPerView={3}
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
