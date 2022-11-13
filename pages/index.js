import Head from "next/head";
import PostCard from "../components/PostCard";

import { client } from "../lib/appolo";
import { gql } from "@apollo/client";

export default function Home({ posts }) {
  console.log(posts);
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

      <div className="container pt-5">
        <h1 className="text-center pb-5">Tech Blog</h1>
        <div className="row">
          <div className="col-lg-8">
            <h2 className="pb-3">Our blog posts</h2>
            {posts &&
              posts.map((post, i) => {
                return <PostCard post={post} key={i} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  // Paste your GraphQL query inside of a gql tagged template literal
  const GET_POSTS = gql`
    query AllPostsQuery {
      posts {
        nodes {
          title
          content
          date
          uri
        }
      }
    }
  `;

  // Here we make a call with the client and pass in our query string to the
  // configuration objects 'query' property
  const response = await client.query({
    query: GET_POSTS,
  });

  // Once we get the response back, we need to traverse it to pull out the
  // data we want to pass into the HomePage
  const posts = response?.data?.posts?.nodes;

  return {
    props: {
      posts,
    },
    revalidate: 10, // In seconds
  };
}
