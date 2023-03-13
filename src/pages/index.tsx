import Banner from "@/components/Banner";
import ShowCase from "@/components/ShowCase";
import Head from "next/head";

import { loadProject } from "@/lib/utils/load-project";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { Project } from "@/lib/types/ProjectType";

export const getStaticProps: GetStaticProps = async () => {
  const projects = await loadProject();

  return {
    props: {
      projects,
    },
  };
};

const Home: NextPage = ({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Thejus Rajendran</title>
        <meta
          name="description"
          content="Portfolio website of Thejus Rajendran who is an UI Engineer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <main className="px-6 md:px-12">
        <Banner />
        <ShowCase projects={projects} />
      </main>
    </>
  );
};

export default Home;
