import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="This is a todo app built with Next.js for Skill Test PT. EZV Service Indonesia."
          key="description"
        />
        <meta property="og:title" content="My Todo List" key="og:title" />
        <meta
          property="og:description"
          content="This is a todo app built with Next.js for Skill Test PT. EZV Service Indonesia."
          key="og:description"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
