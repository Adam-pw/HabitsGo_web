import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import styles from "./Navbar.module.css"


const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.pname}>Task Tribe</div>
        <div className={styles.comp}>
          <div>Home</div>
          <div>Features</div>
          <div>About</div>
          <button className={styles.button}>Download</button>
        </div>
      </div>
    </>
  )
}
