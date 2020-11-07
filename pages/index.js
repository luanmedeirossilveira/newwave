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

      <Nav 
        defaultActiveKey="/home" 
        className="flex-column" 
        style={{float: "left", marginTop: "2rem", borderRight: "1px solid gray", padding: "2rem"}}>
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>

      <main className={styles.main, styles.container}>
        <Login></Login>
      </main>

    </div>
  )
}
