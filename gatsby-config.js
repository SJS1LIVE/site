module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "SJS1 Live",
    description: "South Jersey Sports 1 Media Platform",
    url: "https://www.sjs1.live",
    siteUrl: "https://www.sjs1.live",
    twitterUsername: "@sjs1live",
    author: "Mark Roxberry",
    keywords: ["sports", "platform", "development"],
    version: "2021.12.04.01",
  },
  plugins: [
    // {
    //   resolve: "gatsby-source-wordpress",
    //   options: {
    //     url: "",
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
