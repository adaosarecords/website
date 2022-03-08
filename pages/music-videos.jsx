import Head from 'next/head'
import Navbar from '../components/navbar/navbar'
import Layout from '../components/layout/layout'

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: await (await import('../messages/es.json')).default,
    },
  }
}

export default function MusicVideos() {
  return (
    <Layout>
      <Head>
        <title>Adaosa Records</title>
        <meta name='description' content='Adaosa records music productions' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>Music vides</h1>
      </main>
    </Layout>
  )
}
