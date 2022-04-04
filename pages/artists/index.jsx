import Head from 'next/head'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

import Layout from '../../components/layout/layout'
import styles from '../../styles/artists.module.scss'

export async function getStaticProps({ locale }) {
  const res = await fetch(
    'https://adaosarecords.ue.r.appspot.com/api/v1/artists',
    {
      method: 'GET',
    }
  )
  const data = await res.json()
  return {
    props: {
      messages: await (await import(`../../messages/${locale}.json`)).default,
      artistsData: data,
    },
  }
}

export default function Groups({ artistsData }) {
  const [artists, setArtists] = React.useState([])

  React.useState(() => {
    setArtists(artistsData)
  }, [])

  const t = useTranslations('Home.Artists')
  return (
    <Layout>
      <Head>
        <title>
          Adaosa Records | Coastal Music From Guerrero | Artistas | Artists
        </title>
        <meta
          name='description'
          content='Adaosa records music productions. Artistas. Artists.'
        />
        <link rel='canonical' href='https://adaosarecords.com/artists' />
        <link rel='icon' href='/images/logo-orange.png' />
      </Head>
      <main>
        <h1>{t('Title')}</h1>
        <section className={styles.artistContainer}>
          {artists.map((artist) => {
            return (
              <div className={styles.wrapper} key={artist._id}>
                <div width={'120px'} className={styles.card}>
                  <Image src={artist.image} width={300} height={300} />
                </div>
                <p className={styles.title}>{artist.name}</p>
              </div>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}
