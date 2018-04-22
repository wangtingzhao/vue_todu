module.exports =(isDev) => {
    return {
        preserveWhitepace: true,
        extractCSS: !isDev,
        cssModules: {
            locaIdnetName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hsah:base64:5]',
            camelCase: true
        },
        //hotReload: false  // 根据环境变量生成
        // loaders: {
        //     'docs': docsLoader
        // }
    }
}