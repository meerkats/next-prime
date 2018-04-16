const typescript = require('@zeit/next-typescript')
const sass = require('@zeit/next-sass')
const css = require('@zeit/next-css')
const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config')
const analyzer = require('@zeit/next-bundle-analyzer')
const offline = require('next-offline')

const pluginConfig = {
  cssModules: false,
  webpack(config) {
    config = commonsChunkConfig(config, /\.(s?css)$/)
    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg|gif|jpg)$/,
      loader: 'file-loader',
      options: {
        publicPath: '/_next/static/',
        outputPath: 'static/',
      },
    })
    return config
  },
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../../bundles/server.html',
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html',
    },
  },
  workboxOpts: {},
}

module.exports = offline(analyzer(typescript(sass(css(pluginConfig)))))
