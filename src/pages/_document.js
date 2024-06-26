import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white dark:bg-slate-800 text-[#333] dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
