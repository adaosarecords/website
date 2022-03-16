const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['es', 'en', 'es-MX', 'en-US'],
    defaultLocale: 'es',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "main.scss";`,
  },
}

module.exports = nextConfig
