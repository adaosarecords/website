import styles from './footer.module.scss'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('Footer')

  return (
    <footer className={styles.container}>
      <div className={styles.container__social}>
        <a href='https://www.youtube.com/c/AdaosaR%C3%A9cords'>
          <span className='fa-brands fa-youtube' />
        </a>
        <a href='https://www.facebook.com/adaosarecords/'>
          <span className='fa-brands fa-facebook' />
        </a>
        <a href='https://www.instagram.com/adaosarecords/?hl=en'>
          <span className='fa-brands fa-instagram' />
        </a>
        <a href='https://twitter.com/adaoproduccion'>
          <span className='fa-brands fa-twitter' />
        </a>
      </div>
      <p style={{ fontFamily: 'Nothing You Could Do', fontSize: '18px' }}>
        {t('SubTitle')}
      </p>
      <p>
        &copy; {new Date().getFullYear()} Adao&apos;sa Records. {t('Rights')}
      </p>
      <p className={styles.developer}>
        {t('Developer')}{' '}
        <a
          style={{ color: 'rgb(43, 135, 211)' }}
          href='https://www.devandres.tech/'
        >
          Andres Alcocer
        </a>
      </p>
    </footer>
  )
}
