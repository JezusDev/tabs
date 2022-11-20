import Head from 'next/head';
import Layout from '../../components/layout/layout';
import Profile from '../../components/profile/profile';

const ProfilePage = () => {
  return (
    <>
      <Head>
        <title>Profile | KVK.com</title>
      </Head>
      <Layout>
        <Profile />
      </Layout>
      
    </>
  ); 
};

export default ProfilePage;
