const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = {
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, {limit: 10240}))

        config.plugin('PreloadWebpackPlugin').use(PreloadWebpackPlugin,[{
            rel: 'preload',
            include: 'allAssets',
            fileWhitelist:[/\.woff2/],
        }])
    },
    publicPath: '/',
    transpileDependencies: [
        "vuetify"
    ]
}
