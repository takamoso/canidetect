module.exports = api => {
  api.cache(true)

  return {
    sourceType: 'unambiguous',
    presets: [
      ['@babel/preset-env', {
        modules: false,
        useBuiltIns: 'usage',
        corejs: 3,
      }],
    ],
  }
}