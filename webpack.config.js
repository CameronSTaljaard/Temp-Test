const path = require( 'path' );
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'main.js'
    },
    resolve: {
      extensions: [ '.ts', '.js' ],
      fallback: {
        util: require.resolve("util/")
      }
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'public'),
                to: path.resolve(__dirname, 'dist/')
            }]
        })
    ],
    target: 'node'
};
