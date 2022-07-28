const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      demo: './src/demo.ts',    
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
            exclude: /node_modules/,
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif|ged)$/i,
            type: 'asset/resource',    
            exclude: /node_modules/,
            generator: {
              filename: 'static/[name][ext]'
            }
          }, 
          {
            test: /(index|index_fr)\.(html)$/i,
            type: 'asset/resource',    
            exclude: /node_modules/,
            generator: {
              filename: '[name][ext]'
            }
          },  
          {
            test: /\.(tsx?)$/,
            use: 'ts-loader',
            exclude: '/node_modules/',
          }, 
        ],    
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
      plugins: [
        new HtmlWebpackPlugin({    
          title: 'Gedcom to Pdf - Live Demo',    
          favicon: './favicon.png',
          template: 'src/assets/demo.html',
          filename: 'demo.html',
          //hash: false, // hash for cache bursting
          //minify: false, // should html file be minified?
        }),    
      ],
    output: {
        clean: true,
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: './dist',
        },
        port: 9000
    },  
    optimization: {
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    stats:{
      errorDetails:true
    },
   /* externals: {
      // only define the dependencies you are NOT using as externals!
      canvg: "canvg",
      html2canvas: "html2canvas",
      dompurify: "dompurify",
    }*/
};
