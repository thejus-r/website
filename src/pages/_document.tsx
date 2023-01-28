import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap" rel="stylesheet"></link>
      </Head>
      <body className='bg-stone-100 text-stone-900'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
