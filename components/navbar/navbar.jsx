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

// className={router.asPath === href ? styles.active : styles.default}>

export default function Navbar() {
  const t = useTranslations('Home.Nav')
  const router = useRouter()
  console.log('rotuer', router.asPath)

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
            <a className={router.asPath === '/' ? styles.active : ''}>
              {t('Home')}
            </a>
          </Link>
          <Link href='/music-videos'>
            <a
              className={router.asPath === '/music-videos' ? styles.active : ''}
            >
              {t('MusicVideos')}
            </a>
          </Link>
          <Link href='/groups'>
            <a className={router.asPath === '/groups' ? styles.active : ''}>
              {t('Groups')}
            </a>
          </Link>
          <Link href='/contact'>
            <a className={router.asPath === '/contact' ? styles.active : ''}>
              {t('Contact')}
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
