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
  images: {
    domains: ['images-v1.s3.amazonaws.com'],
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
