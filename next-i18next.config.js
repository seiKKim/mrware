module.exports = {
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
  },
  localePath: path.resolve('./public/locales'),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
