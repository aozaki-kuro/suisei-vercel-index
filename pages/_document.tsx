import Document, { Head, Html, Main, NextScript } from 'next/document'
import siteConfig from '../config/site.config'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta property="og:url" content="https://archive.suisei.cc/" />
          <meta property="og:title" content="Suisei Archive | Treasure every moment" />
          <meta property="og:image" content="https://img.suisei.cc/icon/star.png" />
          <meta name="twitter:title" content="Suisei Archive | Treasure every moment" />
          <meta name="twitter:image" content="https://img.suisei.cc/icon/star.png" />
          <meta name="theme-color" content="#d072a5" />
          <link rel="apple-touch-icon" href="https://img.suisei.cc/icon/star.png" sizes="192x192" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          {siteConfig.googleFontLinks.map(link => (
            <link key={link} rel="stylesheet" href={link} />
          ))}
          <script defer data-domain="archive.suisei.cc" src="https://beacon.suisei.cc/app.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
