import Head from 'next/head'
import { useTranslations } from 'next-intl'

import { ARTISTS } from '../data/artists'
import Layout from '../components/layout/layout'

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: await (await import('../messages/es.json')).default,
    },
  }
}

export default function Groups() {
  const t = useTranslations('Home.Artists')
  return (
    <Layout>
      <Head>
        <title>Adaosa Records</title>
        <meta name='description' content='Adaosa records music productions' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>{t('Title')}</h1>
        <section className={styles.container}></section>
      </main>
    </Layout>
  )
}
