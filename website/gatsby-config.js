const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Marp: Markdown Presentation Writer',
    description:
      'Marp is simple and modern presentation writer through Markdown.',
    keywords: ['markdown', 'slide', 'deck', 'presentation', 'marp', 'marpit'],
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          postCssPlugins: [autoprefixer()],
          camelCase: true,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/blog`,
        name: 'blog-pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: '<!-- more -->',
        plugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener',
            },
          },
          'gatsby-remark-prismjs',
        ],
      },
    },
  ],
}
