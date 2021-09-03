
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports  = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    // path: path.join(process.cwd(), 'dist1'),
    filename: 'main.[name].js',
    publicPath: '',
    libraryTarget: 'umd'
    // filename: '[name].[hash:7].js',
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
          MiniCssExtractPlugin.loader,
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
  devtool: false,
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin()
    // new HtmlWebpackPlugin(
    //   {
    //     title: 'ag-table',
    //     template: './public/index.html'
    //   }
    // )
  ]
}