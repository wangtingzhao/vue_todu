const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const isDev = process.env.NODE_ENV === 'development'

let config
let devServer = {
      port: 8000,
      host: '0.0.0.0',
      overlay: {
        errors: true,
      },
      hot: true
    }
const defaultPluins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV:  '"development"'
    }
  }),
  new HTMLPlugin({
    template: path.join(__dirname, 'template.html')
  })
]

config = merge(baseConfig, {
  entry: path.join(__dirname,'../practice/index.js'),
  devtool: '#cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.(vue|js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.styl/,
        use: [
            'style-loader',
            'css-loader',
            // {
            //   loader:  'css-loader',
            //   options: {
            //     module:true,
            //     localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]'
            //   }
            // },
            {
                loader: "postcss-loader",
                options: {
                    sourceMap: true
                }
            },
            'stylus-loader'
        ]
      }
    ]
  },
  devServer,
  resolve: {
    alias: {
      'vue': path.join(__dirname,'../node_modules/vue/dist/vue.esm.js')
    }
  },
  plugins: defaultPluins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ])
})

module.exports = config
