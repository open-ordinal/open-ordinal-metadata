import path from 'path';
import { dirname } from 'path';
import TerserPlugin from "terser-webpack-plugin";
import webpack from 'webpack';
import packageJson from './package.json' with { type: "json" };
import { fileURLToPath } from 'url';

//const mode = "development";
const mode = "production";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default env => {
    let minify = env.minify;
    if (minify == undefined) minify = false;

    let entry = minify ? {
        "open-ordinal-metadata.min": "./lib/OOMD.js"
    } : {
        "open-ordinal-metadata": "./lib/OOMD.js"
    }

    return {
        mode: mode,
        entry: entry,
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: '[name].js',
            libraryTarget: 'module',
            clean: false,
        },
        experiments: {
            outputModule: true
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        },
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
            minimize: minify,
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
        plugins: [
            new webpack.BannerPlugin({
                banner: `/*! 
* Open Ordinal Metadata ${packageJson.version}
*/`,
                raw: true
            })
        ]
    }
};