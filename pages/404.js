import styles from '../styles/404.module.scss'
import Link from 'next/link'
import Button from '../components/button/button'
import Navbar from '../components/navbar/navbar'
import { useTranslations } from 'next-intl'

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  }
}

export default function NotFound404() {
  const t = useTranslations('404')

  return (
    <div className={styles.container}>
      <Navbar />
      <h1>{t('Title')}</h1>
      <h2>{t('Error')}</h2>
      <p>{t('Help')}</p>
      <Button>
        <a href={`/`}>{t('Button')}</a>
      </Button>
    </div>
  )
}
