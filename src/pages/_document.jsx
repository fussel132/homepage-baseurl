import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="A highly customizable homepage (or startpage / application dashboard) with Docker and service API integrations."
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="manifest" href="/admin/site.webmanifest?v=4" crossOrigin="use-credentials" />
        <link rel="preload" href="/admin/api/config/custom.css" as="style" />
        <link rel="stylesheet" href="/admin/api/config/custom.css" /> {/* eslint-disable-line @next/next/no-css-tags */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
