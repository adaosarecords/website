import Link from 'next/link'

import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import styles from './layout.module.scss'

export default function Layout({ children, home }) {
  return (
    <div>
      <Navbar />
      <div
        style={!home ? { paddingTop: '4rem' } : {}}
        className={styles.container}
      >
        {children}
      </div>
      <Footer />
    </div>
  )
}
