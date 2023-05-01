const linkFragment = `
link {
    target
     title
     url 
 }
`;

const imageFragment = `
image {
    id
    uri
    altText
    title
    srcSet
    sourceUrl
 }
`;

export const pageComponents = ` 
pageComponents {
    __typename
    ... on Page_Homedata_PageComponents_ComponentHighlightedProjects {
      title
      subtitle
      projects {
        title
        text
        ${linkFragment}
        githubUrl
        ${imageFragment}
      }
    }
  }`;

export const homeData = `
... on Page {
    homeData {
        homeBanner {
            title
            subTitle
            text
            ${linkFragment}
            link2 {
                target
                title
                url
            }
            ${imageFragment}
        }
        ${pageComponents}
    }
}
`;
