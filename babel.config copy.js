const { alias } = require('./lookiero.config.js');

module.exports = (api) => {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],

    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias,
        },
      ],
    ],
  };
};
