import { ApolloProvider } from "@apollo/client/react";
import { client } from "../lib/appolo";
import Head from "next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Head>
        {/* you can add metadata here, for all pages */}

        <title>Djuri Schiffer</title>
        <meta name="description" content="Djuri Schiffer personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
