import Head from 'next/head'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { ARTISTS } from '../data/artists'
import Layout from '../components/layout/layout'
import styles from '../styles/artists.module.scss'

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: await (await import(`../messages/${locale}.json`)).default,
    },
  }
}

export default function Groups() {
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
          {ARTISTS.map((artist) => {
            return (
              <div className={styles.wrapper} key={artist.id}>
                <div key={artist.id} width={'120px'} className={styles.card}>
                  <Image src={artist.imageUrl} width={300} height={300} />
                </div>
                <p className={styles.title}>{artist.title}</p>
              </div>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}
