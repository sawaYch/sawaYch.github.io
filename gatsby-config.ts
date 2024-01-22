import type { GatsbyConfig } from 'gatsby';
import dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

console.log("api url", process.env.SOURCE_STRAPI_URL);

const config: GatsbyConfig = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Void Dojo`,
    siteUrl: `https://sawaych.github.io`,
    author: `Sawa`,
    description: `🐧 Nice to meet you. Welcome to Void Dojo! 🐼
    Portfolio & Personal Blog for Sawa - Software Engineer in 🇭🇰`,
    twitterUsername: `SawaYch`,
    image:
      'https://raw.githubusercontent.com/sawaYch/sawaYch.github.io/master/icons/icon-256x256.png',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'topojson',
        path: `${__dirname}/src/topojson`,
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Void Dojo | Sawa',
        short_name: 'VD',
        start_url: '/',
        background_color: '#222222',
        icon: 'src/images/favicon.webp',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.SOURCE_STRAPI_URL,
        accessToken: process.env.SOURCE_STRAPI_TOKEN,
        collectionTypes: [
          "article",
          "tag",
          "category",
          "artwork",
          "gallery"
        ],
      },
    },
    'gatsby-plugin-mdx',
  ],
};

export default config;
