const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

//const mode = "development";
const mode = "production";

module.exports = {

    mode: mode,
    entry: {
        "open-ordinal-metadata.min": "./lib/OOMD.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js',
        libraryTarget: 'umd2',
        library: 'ooMD',
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    // infrastructureLogging: {
    //     debug: [name => name.includes('webpack-dev-server')],
    // },
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "*"
        },
        static: [
            {
                directory: path.join(__dirname, 'test'),
                watch: true,
            },
            {
                directory: path.join(__dirname, 'dist'),
                watch: true,
            },
        ],
        allowedHosts: "all",
        compress: true,
        port: 9999,
        historyApiFallback: {
            index: 'index.html'
        },
        client: {
            logging: 'none', // 'none', 'error', 'warn', 'info', 'log', 'verbose'
            reconnect: true,
            overlay: {
                errors: true,
                warnings: true,
                runtimeErrors: true,
            },
        },
    },
    devtool: 'source-map',
    optimization: {
        minimize: true,
        usedExports: false,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        unused: true,
                        dead_code: true,
                    },
                },
                extractComments: false,
            })
        ],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },

};