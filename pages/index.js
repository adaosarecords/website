import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useTranslations } from 'next-intl'
import Navbar from '../components/navbar/navbar'

export async function getStaticProps({ locale }) {
  console.log('locale', locale)
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: await (await import('../messages/es.json')).default,
    },
  }
}

export default function Home() {
  const t = useTranslations('Home.Nav')
  console.log('t', t)

  return (
    <div className={styles.container}>
      <Head>
        <title>Adaosa Records</title>
        <meta name='description' content='Adaosa records music productions' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1>{t('Home')}</h1>
      </main>

      <footer className={styles.footer}>
        <p>footer sup</p>
      </footer>
    </div>
  )
}
