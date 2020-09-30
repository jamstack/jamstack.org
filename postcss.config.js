const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in the project
  content: [
    './src/site/**/*.njk'
  ],

  // Include any special characters
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})



module.exports = {
  plugins: [
    require('tailwindcss'),
    // work around tailwind and cleancss (automatic bundle/minify CSS)
    require('postcss-banner')({
      inline: true,
      banner: 'clean-css ignore:start',
      footer: 'clean-css ignore:end',
    }),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production' ? [purgecss,  require('cssnano')] : []
  ]
};
