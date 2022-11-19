import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Login from '../components/login';
import Sidebar from '../components/sidebar';

export default function Home() {

  const {data:session} = useSession();

  if(!session) return <Login/>

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='relative max-w-[1400px] mx-auto'>
        <Sidebar />
      </main>
    </div>
  )
}
