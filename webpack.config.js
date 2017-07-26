const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function isDirectory(dir) {
    return fs.lstatSync(dir).isDirectory()
}

const TopicsDir = path.join(__dirname, './src/topics');
const TopicDirs = fs.readdirSync(TopicsDir).filter(function (dir) {
    return isDirectory(path.join(TopicsDir, dir))
});

const directory = '8_Redux',
    topicDirs = {
        [`${directory}-exercise`]: `./src/topics/${directory}/exercise/exercise.js`,
        vendor: './src/vendor.js',
        app: './src/index.routing.js'
    };

const routingEntries = TopicDirs.reduce(function (entries, dir) {
    if (fs.existsSync(path.join(TopicsDir, dir, '/exercise/exercise.js')))
        entries[dir + '-exercise'] = path.join(TopicsDir, dir, '/exercise/exercise.js');

    return entries
}, {
        vendor: './src/vendor.js',
        app: './src/index.routing.js'
    }
);

module.exports = {
    devServer: {
        historyApiFallback: true
    },
    //entry: topicDirs,
    entry: routingEntries,
    output: {
        path: path.resolve('public'),
        //publicPath: '/', //ONLY use if WebpackPlugin is inserting into file. Can also use <base href="/" /> as well
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.woff(2)?$/,   loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
            { test: /\.ttf$/, loader: 'file-loader' },
            { test: /\.eot$/, loader: 'file-loader' },
            { test: /\.svg$/, loader: 'file-loader' },
            { test: require.resolve('jquery'), loader: 'expose?jQuery' }
        ]
    },
    plugins: Object.keys(routingEntries).filter(key => key !== 'vendor').map(key => {
        const tempKeyExercise = key.indexOf('-exercise') !== -1 ? key.substring(0, key.indexOf('-exercise')) : key

        if (tempKeyExercise === 'app') {
            return new HtmlWebpackPlugin({
                template: './src/index.html',
                chunks: ['vendor', 'app'],
                filename: 'index.html',
                inject: 'body'
            });
        } else if (key.indexOf('-exercise') !== -1) {
            return new HtmlWebpackPlugin({
                template: './src/topics/' + tempKeyExercise + '/exercise/exercise.html',
                chunks: ['vendor', key],
                filename: 'topics/' + tempKeyExercise + '/exercise/exercise.html',
                inject: 'body'
            });
        }
    })
};