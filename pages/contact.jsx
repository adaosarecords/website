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

  const submitForm = (e) => {
    e.preventDefault()
  }

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
                <p>adaosarecords@hotmail.com</p>
              </div>
              <div className={styles.infoItem}>
                <i className={`fa-solid fa-phone ${styles.icon}`}></i>
                <p>744 141-0876</p>
              </div>
              <div className={styles.infoItem}>
                <i className={`fa-solid fa-location-dot ${styles.icon}`}></i>
                <p>San Marcos, Gro. Mexico</p>
              </div>
              <div className={styles.infoItem}>
                <i className={`fa-solid fa-clock ${styles.icon}`}></i>
                <p>Horas de Operacion: 9:00 AM - 05:00 PM</p>
              </div>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.right}>
            <h2>{t('Questions')}</h2>
            <form className={styles.form}>
              <div className={styles.formItem}>
                <label htmlFor='name'>{t('Name')}</label>
                <input placeholder='mi nombre' type='text' />
              </div>
              <div className={styles.formItem}>
                <label htmlFor='name'>{t('Mail')}</label>
                <input placeholder='micorreo@ejemplo.com' type='text' />
              </div>
              <div className={styles.formItem}>
                <label htmlFor='name'>{t('Message')}</label>
                {/* <input placeholder='micorreo@ejemplo.com' type='text' /> */}
                <textarea placeholder='mi mensaje' rows={10} />
              </div>
              <div className={styles.formBtn}>
                <button onClick={submitForm}>{t('Send')}</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  )
}
