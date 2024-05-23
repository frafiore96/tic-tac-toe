module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/'
      : '/',
    outputDir: 'dist',
    assetsDir: 'assets',
    devServer: {
      port: 8080,
      open: true
    }
  };
  