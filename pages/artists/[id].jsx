import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import Layout from '../../components/layout/layout'
import styles from '../../styles/artist.slug.module.scss'

export async function getServerSideProps({ locale, params }) {
  const { id } = params
  const res = await fetch(
    `https://adaosarecords.ue.r.appspot.com/api/v1/artists/${id}`,
    {
      method: 'GET',
    }
  )
  const data = await res.json()
  console.log('data', data)
  return {
    props: {
      messages: await (await import(`../../messages/${locale}.json`)).default,
      data,
    },
  }
}

export default function Artist({ data }) {
  const [artist, setArtist] = React.useState({
    image: '/#',
    name: '',
    bio: '',
    groupMembers: [],
  })
  const t = useTranslations('Artist')

  React.useState(() => {
    setArtist(data)
  }, [])

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src={artist.image} width={500} height={500} />
        </div>
        <div className={styles.infoTxt}>
          <h1>{artist.name}</h1>
          <p>{artist.bio}</p>

          {artist.groupMembers.length > 0 && (
            <div className={styles.members}>
              <h3>{t('Members')}</h3>
              {artist.groupMembers.map((member, idx) => {
                return <p key={`member-${Math.random() * idx}`}>{member}</p>
              })}
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
