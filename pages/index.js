import Head from 'next/head'
import Login from '../Components/Form/Login'
import { Nav } from 'react-bootstrap'

export default function Home() {
  const index = true
  return (
    <div>
      <Head>
        <title>New Wave Study</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Login></Login>
      </main>
    </div>
  )
}
