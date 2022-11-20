import Head from 'next/head';
import ProfileBlock from '../../components/block/profile-block';
import Layout from '../../components/layout/layout';

const ProfilePage = () => {
  return (
    <>
      <Head>
        <title>Profile | KVK.com</title>
      </Head>
      <Layout>
        <ProfileBlock />
      </Layout>
    </>
  );
};

export default ProfilePage;
