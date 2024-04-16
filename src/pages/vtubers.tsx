/* eslint-disable no-undef */
import React from 'react';
import { PageProps, graphql } from 'gatsby';
import Oshinoko from '../components/oshinoko';

export const query = graphql`
  query VtuberImageFiles {
    allFile(
      filter: {
        extension: { regex: "/(png)/" }
        relativeDirectory: { eq: "oshinoko" }
      }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData(
              width: 196
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
    site {
      siteMetadata {
        author
        title
        description
      }
    }
  }
`;

const VtubersPage: React.FC<PageProps<Queries.AllFileAndSiteDataQuery>> = ({
  data,
}: PageProps<Queries.AllFileAndSiteDataQuery>) => <Oshinoko data={data} />;
export default VtubersPage;
