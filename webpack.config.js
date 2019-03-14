const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 公共目录
const website = {
    publicPath: '/'
}
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        bundle: path.resolve(__dirname, 'src/main.tsx')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: website.publicPath
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.coffee', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(tsx)/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack-React-Development By Postbird',
            template: 'src/index.html'
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: '0.0.0.0',
        compress: true,
        port: 8080,
        inline: true,
        open: 'http://127.0.0.1:8080'
    }
}