import Head from 'next/head'
import Login from '../Components/Form/Login'
import styles from '../styles/Home.module.css'
import { Nav } from 'react-bootstrap'

export default function Home() {
  return (
    <div>
      <Head>
        <title>New Wave Study</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main, styles.container}>
        <Login></Login>
      </main>
    </div>
  )
}
