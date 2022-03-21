import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&family=Nothing+You+Could+Do&family=Oswald:wght@200;400;700&display=swap'
          rel='stylesheet'
        />
        {/* Global Site Tag (gtag.js) - Google Analytics by */}
        <meta
          name='description'
          content='Adaosa Records Music. Lo mejor de la musica costena. San marcos Guerrero'
        />
        <meta
          name='keywords'
          content='Adaosa records music, Adao, Sabino, san marcos, guerrero, musica costena, adaosarecords, guerrero, los karkiks, la luz roja, conjunto mar azul'
        />
        <meta name='author' content='adaosa records music' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>

        <link rel='icon' href='/images/logo-orange.png' />
        <link
          rel='alternate'
          href='http://adaosarecordsmusic.com'
          hrefLang='en-us'
        />
        <link
          rel='alternate'
          href='http://adaosarecordsmusic.com/es'
          hrefLang='es-mx'
        />
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WQ8BNLB"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        ></noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
