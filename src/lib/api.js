export async function homePageData() {
  const response = await fetch(import.meta.env.WORDPRESS_API_URL, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query GetNodeByUri($uri: String!) {
            nodeByUri(uri: $uri) {
              __typename
              ...on Page {
                uri
                homeData {
                  homeBanner {
                    title
                    subTitle
                    text
                    link {
                      target
                      title
                      url
                    }
                    link2 {
                      target
                      title
                      url
                    }
                    image {
                      id
                      uri
                      altText
                      title
                      srcSet
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
        `,
      variables: {
        uri: "/",
      },
    }),
  });
  const { data } = await response.json();
  return data;
}
