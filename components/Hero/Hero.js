import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import styles from "./Hero.module.css"


const inter = Inter({ subsets: ['latin'] })

export default function Hero() {
  return (
    <>
       <div className={styles.front}></div>
       <div className={styles.front1}>hello</div>
       
       
    </>
  )
}
