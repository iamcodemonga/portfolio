import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <meta name="author" content="Emmanuel Ufot" />
          <meta name="description" content="I specialize in creating high-performance web applications that enhance brand identity. In addition, I provide support and encouragement to fellow software developers in their effort to build robust, industry-standard softwares." />
          <link rel="icon" href="./codemonga.jpg" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=DM+Sans&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fahkwang&display=swap" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
