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
  const [nameError, setNameError] = React.useState('')
  const [emailError, setEmailError] = React.useState('')
  const [messageError, setMessageError] = React.useState('')
  const [isFormValid, setIsFormValid] = React.useState(false)
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false)

  React.useEffect(() => {
    if (
      nameError.length > 0 ||
      emailError.length > 0 ||
      messageError.length > 0 ||
      name.length <= 0 ||
      email.length <= 0 ||
      message.length <= 0
    ) {
      setIsFormValid(false)
    } else {
      setIsFormValid(true)
    }
  }, [messageError, nameError, emailError, isFormValid, name, email, message])

  React.useEffect(() => {
    setIsFormValid(false)
  }, [])

  const submitForm = async (e) => {
    e.preventDefault()
    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
    setName('')
    setEmail('')
    setMessage('')
    setIsFormSubmitted(true)
    setTimeout(() => {
      setIsFormSubmitted(false)
    }, 3000)
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
            <h1>{t('Info')}</h1>
            <div className={styles.info}>
              <div className={styles.infoItem}>
                <i className={`fa-solid fa-envelope ${styles.icon}`}></i>
                <p>adaosarecordsmusic@gmail.com</p>
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
            <h1>{t('Questions')}</h1>
            <form className={styles.form}>
              <div className={styles.formItem}>
                <label htmlFor='name'>{t('Name')}</label>
                <input
                  style={{
                    border: nameError.length > 0 ? '1px solid red' : '',
                  }}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                    e.target.value.length > 0
                      ? setNameError('')
                      : setNameError('El campo no puede estar vacio')
                  }}
                  placeholder='mi nombre'
                  type='text'
                />
                {nameError.length > 0 && (
                  <span className={styles.errorMessage}>{nameError}</span>
                )}
              </div>
              <div className={styles.formItem}>
                <label htmlFor='email'>{t('Mail')}</label>
                <input
                  style={{
                    border: emailError.length > 0 ? '1px solid red' : '',
                  }}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    e.target.value
                      .trim()
                      .match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                      ? setEmailError('')
                      : setEmailError('Email inválido')
                  }}
                  placeholder='micorreo@ejemplo.com'
                  type='text'
                />
                {emailError.length > 0 && (
                  <span className={styles.errorMessage}>{emailError}</span>
                )}
              </div>
              <div className={styles.formTextArea}>
                <label htmlFor='text'>{t('Message')}</label>
                <textarea
                  style={{
                    border: messageError.length > 0 ? '1px solid red' : '',
                  }}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value)
                    e.target.value.length > 0
                      ? setMessageError('')
                      : setMessageError('El campo no puede estar vacio')
                  }}
                  placeholder='mi mensaje'
                  rows={5}
                />
                {messageError.length > 0 && (
                  <span className={styles.errorMessage}>{messageError}</span>
                )}
              </div>
              <div className={styles.formFooter}>
                {!isFormSubmitted ? (
                  <div className={styles.formBtn}>
                    <button disabled={!isFormValid} onClick={submitForm}>
                      {t('Send')}
                    </button>
                  </div>
                ) : (
                  <div className={styles.successMessage}>
                    <p>
                      ¡Gracias! Nos pondremos en contacto contigo lo antes
                      posible.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  )
}
