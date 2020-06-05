const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = {
    chainWebpack: config => {
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
