import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import Logo from '../../public/images/logo-orange.png'
import { useRouter } from 'next/router'

import styles from './navbar.module.scss'

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: await (await import('../../messages/es.json')).default,
    },
  }
}

export default function Navbar() {
  const t = useTranslations('Home.Nav')
  const router = useRouter()

  return (
    <nav className={styles.container}>
      <div className={styles.container__innerWrapper}>
        <Link href='/' passHref>
          <div className={styles.imgContainer}>
            <span style={{ paddingRight: '0.5rem' }}>
              <Image
                className={styles.imgContainer__img}
                src={Logo}
                alt='head shot'
              />
            </span>
          </div>
        </Link>
        <div className={styles.container__rightContent}>
          <Link href='/'>
            <a
              className={router.asPath === '/' ? styles.active : styles.default}
            >
              {t('Home')}
            </a>
          </Link>
          <Link href='/music-videos'>
            <a
              className={
                router.asPath === '/music-videos'
                  ? styles.active
                  : styles.default
              }
            >
              {t('MusicVideos')}
            </a>
          </Link>
          <Link href='/groups'>
            <a
              className={
                router.asPath === '/groups' ? styles.active : styles.default
              }
            >
              {t('Groups')}
            </a>
          </Link>
          <Link href='/contact'>
            <a
              className={
                router.asPath === '/contact' ? styles.active : styles.default
              }
            >
              {t('Contact')}
            </a>
          </Link>
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
      </div>
    </nav>
  )
}
