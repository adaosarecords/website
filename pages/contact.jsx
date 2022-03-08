import Head from 'next/head'
import Layout from '../components/layout/layout'

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: await (await import('../messages/es.json')).default,
    },
  }
}

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Adaosa Records</title>
        <meta name='description' content='Adaosa records music productions' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>contact</h1>
      </main>
    </Layout>
  )
}
