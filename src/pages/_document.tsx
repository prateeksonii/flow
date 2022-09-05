import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/inter-ui/3.19.3/inter.css"
          integrity="sha512-3kSeajrEqMrItwRkYz09bOsHsl4/wpoT6mgw5Aw+eSLweQtX7kZp2P/Dm7hnUg/TrbTGesAgCPwvZpllhuROTw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
