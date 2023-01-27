
import Banner from '@/components/Banner'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Thejus Rajendran</title>
        <meta name="description" content="Portfolio Website of Thejus Rajendran" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-gray-200 w-screen'>
        <Banner />
      </main>
    </>
  )
}
