import Image from 'next/image'
import Link from 'next/link'

import styles from './navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.container__innerWrapper}>
        <Link href='/' passHref>
          <div className={styles.imgContainer}>
            <span style={{ paddingRight: '0.5rem' }}>
              {/* <Image
                className={styles.imgContainer__img}
                src={ProfileImg}
                height={35}
                width={35}
                alt='head shot'
              /> */}
            </span>
            <p>Adaosa Records</p>
          </div>
        </Link>
        <div className={styles.container__rightContent}>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
        </div>
      </div>
    </nav>
  )
}
