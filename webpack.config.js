module.exports = {
    entry: './index.ts',
    output: {
        filename: 'main.js',
        path: "C:\\Users\\Diackichan\\Desktop\\loop-tik\\tiktok-extension-build"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};