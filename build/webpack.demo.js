
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')


module.exports  = {
  mode: 'development',
  entry: './examples/entry.js',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    // path: path.join(process.cwd(), 'dist1'),
    filename: 'main.js',
    publicPath: ''
    // filename: '[name].[hash:7].js',
  },
  // devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    publicPath: '/',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
    // 使用的扩展名

    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../src')
    }
  },
  optimization: {
    minimize: false
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin(
      {
        title: 'ag-table',
        template: './template/index.html'
      }
    ),
    new BundleAnalyzerPlugin({
      analyzerPort: 8089,
      openAnalyzer: true
    })
  ]
}