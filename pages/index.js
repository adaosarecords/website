import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useTranslations } from 'next-intl'
import Navbar from '../components/navbar/navbar'

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: await (await import('../messages/es.json')).default,
    },
  }
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adaosa Records</title>
        <meta name='description' content='Adaosa records music productions' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main className={styles.main}></main>

      <footer className={styles.footer}>
        <p>footer sup</p>
      </footer>
    </div>
  )
}
