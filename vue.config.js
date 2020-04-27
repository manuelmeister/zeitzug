module.exports = {
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, {limit: 10240}))
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/ba/'
        : '/',
    transpileDependencies: [
        "vuetify"
    ]
}
