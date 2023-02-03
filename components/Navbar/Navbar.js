import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import styles from "./Navbar.module.css"


const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
  return (
    <>
       <div className={styles.nav}>
        <div className={styles.pname}>Habitician</div>
        <div className={styles.comp}>
          <div>Home</div>
          <div>Features</div>
          <div>About</div>
        </div>
       </div>
       
    </>
  )
}
