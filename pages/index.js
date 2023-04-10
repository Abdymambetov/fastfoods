import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import burgerIcon from '@/public/fatburger.png'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Жирные бургеры | Main</title>
      <meta name='title' content='Жирные бургеры'/>
    </Head>
      <div className={styles.container}>
        <h1 className={`${styles.title} font-effect-fire-animation`}>main page</h1>
        <div className={styles.mainImage}>
          <Image src={burgerIcon} alt="icon" width={400} height={200} />
        </div>
        <p className={styles.text}>Что такое идеальный бургер? Лист свежего салата, мягкие булочки, сочное мясо. О других составляющих начинки можно поспорить, ведь это дело вкуса.</p>
        <p className={styles.text}>Есть ещё пара-тройка факторов, влияющих на аппетит: цены, качество обслуживания, правильная атмосфера заведения.</p>
        <Link href='/burgers'><p className={styles.btn}>All burgers</p></Link>
      </div>
    </>
  )
}
