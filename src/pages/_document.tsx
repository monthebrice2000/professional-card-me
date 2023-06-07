import Document, { Head, Html, Main, NextScript } from 'next/document';

import { AppConfig } from '@/utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
        <body
          className="bg-cover font-sans leading-normal tracking-wider text-gray-900 antialiased bg-center bg-no-repeat"
          // className="bg-cover bg-center bg-no-repeat"
          style={{
            // position: 'absolute',
            width: `${100}vw`,
            height: `${100}vh`,
            zIndex: -1000,
            backgroundImage: `url('https://ik.imagekit.io/kjatsnf4j/1_Ww-ei5cz4XEgz83npDHXDg_EQCwL-BpEI.jpeg?updatedAt=1684955897623')`,
          }}
        >
          <Main />
          <NextScript />
          
        </body>
      </Html>
    );
  }
}

export default MyDocument;
