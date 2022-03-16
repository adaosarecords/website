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
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <link rel='icon' href='/images/logo-orange.png' />
        <link rel='alternate' href='http://example.com' hrefLang='en-us' />
        <link rel='alternate' href='http://example.com/es' hrefLang='es-mx' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
