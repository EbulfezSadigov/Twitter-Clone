import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useContext } from 'react';
import Feed from '../components/feed';
import Login from '../components/login';
import Modal from '../components/modal';
import Sidebar from '../components/sidebar';
import Trending from '../components/trending';
import { AppContext } from '../contexts/appcontext';

export default function Home() {

  const {data:session} = useSession();
  const [appcontext] = useContext(AppContext)

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
        <div className='flex gap-6'>
            <Feed/>
            <Trending/>
            {appcontext?.isModalOpen && <Modal/>}
        </div>
      </main>
    </div>
  )
}
