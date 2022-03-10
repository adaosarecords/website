import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout/layout'
import ReactPlayer from 'react-player/lazy'
import { useTranslations } from 'next-intl'

import styles from '../styles/Home.module.scss'
import { RECORDINGS } from '../data/recordings'

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import('../messages/es.json')).default,
    },
  }
}

export default function Home({}) {
  const [isMuted, setIsMuted] = React.useState(true)
  const t = useTranslations('Home')

  React.useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    })
  }, [])

  return (
    <>
      <Head>
        <title>Adaosa Records</title>
        <meta name='description' content='Adaosa records music productions' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <ReactPlayer
          className='react-player fixed-bottom'
          url='intro.mp4'
          playing={true}
          loop={true}
          width='100%'
          height='100%'
          playsinline
          volume={1}
          muted={isMuted}
          controls={false}
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
      <Layout home>
        <main>
          <section className={styles.studioRecordings}>
            <h1>{t('StudioRecordings.Title')}</h1>
            <div className={styles.albumContainer}>
              {RECORDINGS.map((album) => {
                return (
                  <div className={styles.albumContainer__card} key={album.url}>
                    <Image src={album.url} width={300} height={300} />
                    <div className={styles.albumContainer_text}>
                      <h2>{album.artist}</h2>
                      <p>{album.subTitle}</p>
                    </div>
                    {album.youtubeUrl && (
                      <div className={styles.albumContainer__btn}>
                        <a href={`${album.youtubeUrl}`}>
                          {t('StudioRecordings.Watch')}
                        </a>
                      </div>
                    )}
                    {album.spotifyUrl && (
                      <div className={styles.albumContainer__btn}>
                        <a href={`${album.spotifyUrl}`}>
                          {t('StudioRecordings.Spotify')}
                        </a>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        </main>
      </Layout>
    </>
  )
}
