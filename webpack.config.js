var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        'app': [path.join(__dirname, '/client/src/App.js')],
        vendor: [
          'react',
          'react-dom'
        ]
    },
    output: {
        path: path.join(__dirname, '/client/build'),
        filename: 'bundle.js',
        publicPath: '/build'
    },
    /*
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    */
    devtool: 'eval-source-map',
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: '/node_modules/',
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-1', 'react']
            }
        }, {
            test: /\.less?$/,
            loader: 'style!css!less'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
    ],
    devServer: {
      hot: true,
      inline: true,
      contentBase: path.join(__dirname, './client/'),
      stats: { colors: true },
      proxy: {
        '/api/*': {
          target: 'http://127.0.0.1:3000',
          secure: false,
          changeOrigin: true
        }
      }
    },
};
