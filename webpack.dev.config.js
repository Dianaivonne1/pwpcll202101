const path = require('path');
module.exports = {
    //0. Establecer el modo del congigurador 
    mode: 'development',
    //1. Especificando er archivo de entrada
    entry: './client/index.js',
    //2. Especificar la salida 
    output:{
        //3. Ruta absoluta de salida
        path: path.join(__dirname, 'public'),
        //4. Nombre del archivo de salida 
        filename: 'js/bundle.js',
        //5. Ruta del path publica para fines del servidor de desarrollo 
        publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 8085,
        host: 'localhost'
    }
}