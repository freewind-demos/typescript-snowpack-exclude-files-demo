/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  exclude: ['node-should-exclude.ts'],
  mount: {
    /* ... */
    './src/': '/'
  },
  plugins: [
    '@snowpack/plugin-react-refresh'
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
