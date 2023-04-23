async function fetchAPI(query, variables) {
  const response = await fetch(import.meta.env.WORDPRESS_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const { data, error, loading } = await response.json();

  return data;
}

export async function getPageDataByUri(uri) {
  const data = await fetchAPI(
    `query GetNodeByUri($uri: String!) {
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
    {
      uri,
    }
  );
  return data.nodeByUri.homeData;
}
