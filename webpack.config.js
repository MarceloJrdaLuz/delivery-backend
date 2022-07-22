module.exports = {
    entry: './src/server.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                test: /\js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        fallback: { 
            "path": require.resolve("path-browserify"),
            "url": require.resolve("url/"),
            "util": require.resolve("util/"),
            "stream": require.resolve("stream-browserify"),
            "crypto": require.resolve("crypto-browserify"),
            "zlib": require.resolve("browserify-zlib"),
            "os": require.resolve("os-browserify/browser"),
            "https": require.resolve("https-browserify"),
            "assert": require.resolve("assert/"),
            "http": require.resolve("stream-http"),
            "constants": require.resolve("constants-browserify"),
        },
        extensions: ['.js','.ts'],
     }
}