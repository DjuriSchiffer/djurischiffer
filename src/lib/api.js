export async function fetchData(query, variables = {}) {
  const response = await fetch(import.meta.env.WORDPRESS_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  });

  const { data, error, loading } = await response.json();

  return data;
}
