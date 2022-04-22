import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import Layout from '../../components/layout/layout'
import styles from '../../styles/artist.slug.module.scss'

export default function Artist({ artist }) {
  const t = useTranslations('Artist')

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src={artist.image} width={500} height={500} alt={'artist'} />
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

export async function getStaticPaths() {
  const res = await fetch(
    `https://adaosarecords.ue.r.appspot.com/api/v1/artists`,
    {
      method: 'GET',
    }
  )
  const artists = await res.json()
  const paths = artists.map((artist) => ({
    params: { id: artist._id },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ locale, params }) {
  const { id } = params
  const res = await fetch(
    `https://adaosarecords.ue.r.appspot.com/api/v1/artists/${id}`,
    {
      method: 'GET',
    }
  )
  let artist = await res.json()
  const updatedArtistBio = {
    ...artist,
    bio: locale === 'en' ? artist.bio.en : artist.bio.es,
  }
  return {
    props: {
      messages: await (await import(`../../messages/${locale}.json`)).default,
      artist: updatedArtistBio,
    },
  }
}
