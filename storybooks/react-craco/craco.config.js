// import path from "node:path"
const path = require('path')
const config = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            "@pages": path.resolve(__dirname, 'src/pages'),
            "@components": path.resolve(__dirname, 'src/components'),
            "@router": path.resolve(__dirname, 'src/router'),
            "@store": path.resolve(__dirname, 'src/store'),
            "@apis": path.resolve(__dirname, 'src/apis'),
            "@utils": path.resolve(__dirname, 'src/utils'),
            "@assets": path.resolve(__dirname, 'src/assets'),
            "@css": path.resolve(__dirname, 'src/assets/css'),
            "@imgs": path.resolve(__dirname, 'src/assets/imgs')
        },
        configure: {
            resolve: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    }
}
module.exports = config