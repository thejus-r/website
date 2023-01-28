import Banner from '@/components/Banner'
import ShowCase from '@/components/ShowCase'
import Head from 'next/head'


import { loadProject } from "@/lib/utils/load-project";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { Project } from '@/lib/types/ProjectType';

export const getStaticProps: GetStaticProps = async () => {
  const projects = await loadProject();

  return {
    props: {
      projects
    }
  }
}

const Home: NextPage = ({ projects }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <>
      <Head>
        <title>Thejus Rajendran</title>
        <meta name="description" content="Portfolio Website of Thejus Rajendran" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='px-6 md:px-12'>
        <Banner />
        <ShowCase projects={projects} />
      </main>
    </>
  )
}

export default Home;