import Head from 'next/head'
import Login from '../Components/Form/Login'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>New Wave Study</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Login></Login>
      </main>

    </div>
  )
}
