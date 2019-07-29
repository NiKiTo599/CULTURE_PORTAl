import React from 'react';

const athorPage = ({ data }) =>  {
    console.log(data)
    return (
      <h1>Hello, {data.javascriptFrontmatter.frontmatter.name}</h1>
    );
}
export default athorPage;
export const postQuery = graphql`
  query($path: String!) {
    javascriptFrontmatter( frontmatter: { path: { eq: $path }}) {
      frontmatter {
        path
        name
      }
    }
  }
`