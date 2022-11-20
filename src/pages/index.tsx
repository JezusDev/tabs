import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from '../components/layout/layout';
import MainScreen from '../components/main-screen/main-screen';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign In | KVK.com</title>
      </Head>
      <Layout>
        <MainScreen />
      </Layout>
    </>
  );
};

export default Home;
