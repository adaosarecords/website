import Head from 'next/head'
import { useTranslations } from 'next-intl'

import styles from '../styles/contact.module.scss'
import Layout from '../components/layout/layout'

export async function getStaticProps({ locale }) {
  console.log('locale', locale)
  return {
    props: {
      messages: await (await import('../messages/es.json')).default,
    },
  }
}

export default function Contact() {
  const t = useTranslations('Contact')

  return (
    <Layout>
      <Head>
        <title>Adaosa Records</title>
        <meta name='description' content='Adaosa records music productions' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div className={styles.container}>
          <div className={styles.left}>
            <h2>{t('Info')}</h2>
            <div className={styles.info}>
              <div className={styles.infoItem}>
                <i className={`fa-solid fa-envelope ${styles.icon}`}></i>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <h2>{t('Questions')}</h2>
          </div>
        </div>
      </main>
    </Layout>
  )
}
