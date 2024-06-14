import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Jutopia</title>
        <meta name="description" content="Jutopia web app written with React" />
        <link rel="icon" href="/jutopia-favicon.svg" />
        <meta name="theme-color" content="#0046ff" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
