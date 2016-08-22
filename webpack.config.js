module.exports = {

    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },

    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/main.jsx',
            NavigationBar: 'app/components/NavigationBar.jsx',
            Weather: 'app/components/Weather.jsx',
            About: 'app/components/About.jsx',
            Examples: 'app/components/Examples.jsx',
            WeatherMessage:'app/components/WeatherMessage.jsx',
            WeatherForm:'app/components/WeatherForm.jsx',
            WeatherContainer:'app/components/WeatherContainer.jsx',
            OpenWeatherMap: 'app/api/OpenWeatherMap.jsx'

        },
        extensions:['','.js','.jsx']
    },

    module:{
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },

    devtool: 'cheap-module-eval-source-map'

}