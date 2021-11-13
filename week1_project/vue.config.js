const path = require('path');
module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [
                // 这个是绝对路径,不能使用 alias 中配置的别名路径，如@表示的src
                path.resolve(__dirname, './src/assets/scss/style.scss')
            ]
        }
    },
    publicPath: './'
}