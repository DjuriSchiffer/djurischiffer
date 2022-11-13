import Head from "next/head";

import { client } from "../lib/appolo";
import { gql } from "@apollo/client";

export default function SlugPage({ post }) {
  console.log(post);

  return (
    <>
      <Head>
        <title>Tech Blog</title>
        <meta
          name="description"
          content="Keep up to date with the latest trends in tech"
        />
        <link rel="icon" href="/favicon.ico" />

        {/* You can add more metadata here, like open graph tags for social media, etc */}
      </Head>
    </>
  );
}

export async function getStaticProps({ params }) {
  const GET_POST = gql`
    query GetPostByURI($id: ID!) {
      post(id: $id, idType: URI) {
        title
        content
        date
        author {
          node {
            firstName
            lastName
          }
        }
      }
    }
  `;
  //  the params argument for this function corresponds to the dynamic URL segments
  //  we included in our page-based route. So, in this case, the `params` object will have
  //  a property named `uri` that contains that route segment when a user hits the page
  const response = await client.query({
    query: GET_POST,
    variables: {
      id: params.uri,
    },
  });
  const post = response?.data?.post;
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: "blocking",
  };
}
