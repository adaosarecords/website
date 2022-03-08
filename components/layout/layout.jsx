import Link from 'next/link'

import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import styles from './layout.module.scss'

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  )
}
