import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout/layout'
import ReactPlayer from 'react-player/lazy'
import { useTranslations } from 'next-intl'

import styles from '../styles/Home.module.scss'
import { RECORDINGS } from '../data/recordings'
import Button from '../components/button/button'

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
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
        <meta
          name='description'
          content='Adaosa records music productions. Lo mejor de la musica costeña. San marcos Guerrero. Adao"sa records. Adaosarecordsmusic.com'
        />
        <meta
          name='keywords'
          content='Adaosa records music, Adao, Sabino, san marcos, guerrero, musica costeña, adaosarecords, guerrero, los karkiks, la luz roja, conjunto mar azul, musica costeña para bailar. Domingo Validivia. Los Donnys de Guerrero. Costa chica, san marcos guerrero'
        />
        <meta name='author' content='adaosa records music' />
        <link rel='canonical' href='https://adaosarecords.com' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
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

        <div className={styles.mask} />
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
          <section className={styles.featuredVideo}>
            <h1 className={styles.heading}>{t('FeaturedVideo')}</h1>
            <ReactPlayer
              className='video-featured'
              url='https://www.youtube.com/watch?v=RD1T-nv98uU'
              playing={false}
              loop={true}
              width='100%'
              height='100%'
              playsinline
              volume={1}
              controls
            />
          </section>
          <section className={styles.studioRecordings}>
            <h1 className={styles.heading}>{t('StudioRecordings.Title')}</h1>
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
                      <Button>
                        <a href={`${album.youtubeUrl}`}>
                          {t('StudioRecordings.Watch')}
                        </a>
                      </Button>
                    )}
                    {album.spotifyUrl && (
                      <Button>
                        <a href={`${album.spotifyUrl}`}>
                          {t('StudioRecordings.Spotify')}
                        </a>
                      </Button>
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
