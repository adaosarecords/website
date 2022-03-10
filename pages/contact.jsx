import React from 'react'
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
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [nameErrorMessage, setNameErrorMessage] = React.useState('')

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
                <input
                  style={{
                    border: nameErrorMessage.length > 0 ? '3px solid red' : '',
                  }}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                    e.target.value.length > 0
                      ? setNameErrorMessage('')
                      : setNameErrorMessage('El campo no puede estar vacio')
                  }}
                  placeholder='mi nombre'
                  type='text'
                />
                {nameErrorMessage.length > 0 && (
                  <span className={styles.errorMessage}>
                    {nameErrorMessage}
                  </span>
                )}
              </div>
              <div className={styles.formItem}>
                <label htmlFor='email'>{t('Mail')}</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='micorreo@ejemplo.com'
                  type='text'
                />
              </div>
              <div className={styles.formItem}>
                <label htmlFor='text'>{t('Message')}</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder='mi mensaje'
                  rows={10}
                />
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
