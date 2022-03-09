import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'

import Logo from '../../public/images/logo-orange.png'
import styles from './navbar.module.scss'

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: await (await import('../../messages/es.json')).default,
    },
  }
}

export default function Navbar() {
  const [scrollDimensions, setScrollDimensions] = React.useState({
    scrollY: 0,
  })
  const t = useTranslations('Home.Nav')
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const deriveScrollDimensions = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop
    setScrollDimensions({ scrollY })
    return () => {
      window.removeEventListener('resize', deriveScrollDimensions)
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', deriveScrollDimensions)
  }, [])

  return (
    <nav
      style={{ backgroundColor: scrollDimensions.scrollY > 60 ? '#000' : '' }}
      className={styles.container}
    >
      <div
        className={styles.mobileMenu}
        style={{
          opacity: isMenuOpen ? 1 : 0,
          zIndex: isMenuOpen ? 100 : -100,
          transition: 'all 300ms ease-out',
        }}
      >
        <div>
          <span
            onClick={() => setIsMenuOpen(false)}
            className='fa-solid fa-xmark'
          ></span>
        </div>
        <div className={styles.mobileMenu__items}>
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
          <div className={styles.mobileMenu__social}>
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
      </div>

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
          {!isMenuOpen && (
            <span
              onClick={() => setIsMenuOpen(true)}
              className='fa-solid fa-bars'
            />
          )}
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
