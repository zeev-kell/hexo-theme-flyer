var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
var isPro = process.env.NODE_ENV == "production";

function resolve(dir) {
    return path.join(__dirname, 'source', dir)
}

function common(dir) {
    return path.join(__dirname, 'common', dir)
}

var plugins = [];
plugins.push(new webpack.ProvidePlugin({
    "$"            : "jquery",
    "jQuery"       : "jquery",
    "window.jQuery": "jquery"
}));
plugins.push(new ExtractTextPlugin('../css/common.min.css'));

if (isPro) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress : {
            warnings     : false,
            drop_debugger: isPro,
            drop_console : isPro
        },
        sourceMap: false
    }));
    plugins.push(new OptimizeCSSPlugin());
    console.log(" -------------------> production");
}

var config = {
    entry  : {
        common: common("js/common.js")
    },
    output : {
        path    : resolve("js"),
        filename: '[name].min.js'
    },
    resolve: {
        extensions: ['.js', '.styl', '.css']
    },
    plugins: plugins,
    module : {
        rules: [{
            test   : /\.js$/,
            loader : 'babel-loader',
            include: [resolve('')]
        }, {
            test  : /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            query : {
                limit: 10000,
                name : path.posix.join("..", 'img/[name].[ext]')
            }
        }, {
            test  : /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            query : {
                limit: 10000,
                name : path.posix.join("..", 'fonts/[name].[ext]')
            }
        }, {
            test: /\.scss$/,
            use : ExtractTextPlugin.extract({
                use: [{
                    loader : 'css-loader'
                }, {
                    loader: 'postcss-loader'
                }, {
                    loader : 'sass-loader'
                }]
            })
        }]
    }
};
if (!isPro) {
    config.devtool = '#cheap-module-eval-source-map';
}


module.exports = config;
