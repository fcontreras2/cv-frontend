// // const path = require('path');
// // const ExtractTextPlugin = require('extract-text-webpack-plugin');
// // const webpack = require('webpack');
// // const nodeExternals = require('webpack-node-externals');
// //
// // module.exports = {
// //   mode: 'development',
// //   entry: path.resolve(__dirname, 'src/server.js'),
// //   output: {
// //     path: path.resolve(__dirname, 'dist'),
// //     filename: 'server.js',
// //   },
// //   target: 'node', // in order to ignore built-in modules like path, fs, etc.
// //   externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
// //   resolve: {
// //     alias: {
// //       Styles: path.resolve(__dirname,'./src/styles/theme'),
// //       Shared: path.resolve(__dirname,'./src/shared/')
// //     }
// //   },
// //   module: {
// //     rules: [
// //       // Aquí van los loaders
// //       {
// //         // test: que tipo de archivo quiero reconocer,
// //         // use: que loader se va a encargar del archivo
// //         test: /\.js$/,
// //         exclude: /(node_modules|bower_components)/,
// //         use: {
// //           loader: 'babel-loader',
// //           options: {
// //             presets: ['@babel/preset-env', '@babel/preset-react']
// //           }
// //         },
// //       },
// //       {
// //         // test: que tipo de archivo quiero reconocer,
// //         // use: que loader se va a encargar del archivo
// //         test: /\.scss$/,
// //         use: ExtractTextPlugin.extract({
// //           // ['style-loader','css-loader']
// //           // fallback: 'style-loader',
// //           use: ["css-loader", "sass-loader"]
// //         }),
// //       }
// //     ]
// //   },
// //   plugins: [
// //     // aquí van los plugins
// //     new ExtractTextPlugin("css/[name].css"),
// //     new webpack.DllReferencePlugin({
// //        context: path.resolve(__dirname, 'build/library/'),
// //        manifest: require('./build/library/library.json')
// //      })
// //   ]
// // }
//
//
//
// const path = require('path');
// const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
//
// module.exports = {
//   mode: 'development',
//   entry: [
// 		path.resolve(__dirname, 'src')
// 	],
// 	output: {
// 		path: path.resolve(__dirname, 'src'),
// 		filename: 'bundle.js',
// 		publicPath: '/'
// 	},
//   resolve: {
//     alias: {
//       Styles: path.resolve(__dirname,'./src/styles/theme'),
//       Shared: path.resolve(__dirname,'./src/shared/')
//     }
//   },
//   module: {
//     rules: [
//       // Aquí van los loaders
//       {
//         // test: que tipo de archivo quiero reconocer,
//         // use: que loader se va a encargar del archivo
//         test: /\.js$/,
// 				use: {
// 					loader: 'babel-loader',
// 					query: {
// 						presets: ["@babel/preset-react", "@babel/env" ]
// 					}
// 				},
// 				include: path.resolve(__dirname, 'src'),
//       },
//       {
//         // test: que tipo de archivo quiero reconocer,
//         // use: que loader se va a encargar del archivo
//         test: /\.scss$/,
//         use: ExtractTextPlugin.extract({
//           // ['style-loader','css-loader']
//           // fallback: 'style-loader',
//           use: ["css-loader", "sass-loader"]
//         }),
//       }
//     ]
//   },
//   plugins: [
//     new webpack.DllReferencePlugin({
//        context: path.resolve(__dirname, 'build/library/'),
//        manifest: require('./build/library/library.json')
//      }),
//     new webpack.HotModuleReplacementPlugin(),
//  		new webpack.NamedModulesPlugin(),
//  		new webpack.DefinePlugin({
//  			'process.env': {
//  				NODE_ENV: JSON.stringify('development'),
//  				WEBPACK: true
//  			}
//  		})
//   ]
// }


const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server/index.js',
  target: 'node',
  externals: [nodeExternals()],

  output: {
    path: path.resolve('server-build'),
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        options: {
            presets: ['@babel/preset-env',"@babel/preset-react"]
          }
      }
    ]
  }
};
