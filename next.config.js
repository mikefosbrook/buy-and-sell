/* eslint-disable no-param-reassign */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config, { isServer }) {
    config.module.rules.push(
      // Convert *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
    );

    // MSW and Next don't play well together - the following shouldn't be required, but is, and yet, it still throws warnings in the terminal
    // The following is taken from: https://github.com/mswjs/msw/issues/1877#issuecomment-1868467758
    // There is a similar solution in MSW's with-next example: github.com/mswjs/examples/blob/with-next/examples/with-next/next.config.mjs

    if (isServer) {
      // next server build => ignore msw/browser
      if (Array.isArray(config.resolve.alias)) {
        // in Next the type is always object, so this branch isn't necessary. But to keep TS happy, avoid @ts-ignore and prevent possible future breaking changes it's good to have it
        config.resolve.alias.push({ name: 'msw/browser', alias: false });
      } else {
        config.resolve.alias['msw/browser'] = false;
      }
    } else if (Array.isArray(config.resolve.alias)) {
      // browser => ignore msw/node
      config.resolve.alias.push({ name: 'msw/node', alias: false });
    } else {
      config.resolve.alias['msw/node'] = false;
    }

    return config;
  },
};

module.exports = nextConfig;
