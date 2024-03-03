const path = require('path');
//Установка режима сборки
const mode = process.env.NODE_ENV || 'development';
//Подлючение плагинов для работы с HTML и CSS
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//Флаг для определения режима разработки
const devMode = mode === 'development';
//Указание цели сборки в зависимости от режима разработки
const target = devMode ? 'web' : 'browserslist';
//Включение source-map в режиме разработки для удобной отладки
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
    mode,
    target,
    devtool,
    //Настройка локального сервера для разработки
    devServer: {
        port: 3000,
        open: true,
        hot: true,
    },
    //Указание точки входа для сборки
    entry: path.resolve(__dirname, 'src', 'index.js'),
    //Объект с настройками для выходных файлов сборки
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/[name][ext]',
    },
    plugins: [
        //Подключения плагина для HTML
        new HtmlWebpackPlugin({
            // Прописываем путь к html файлу
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        //Подключения плагина для CSS
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            // подгрузчик для обновления html страницы в реальном времени
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            // style-loader отвечает за добавленеие стилей с помощью js
            {
                test: /\.css$/i,
                use: [
                    // осуществление выбора подгрузчика стилей
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                     "css-loader"],
            },
            //Загрузка шрифтов
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',
                }
            },
            //Загрузка изображений
            {
                test: /\.(jpe?g|png|webp|gif|svg)$/i,
                use: [
                    {
                        //лоудер для сжатия размера изображения 
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                              progressive: true,
                            },
                            optipng: {
                              enabled: false,
                            },
                            pngquant: {
                              quality: [0.65, 0.90],
                              speed: 4
                            },
                            gifsicle: {
                              interlaced: false,
                            },
                            webp: {
                              quality: 75
                            }
                        }
                    }
                ],
                type: 'asset/resource',
            },
            //Загрузка Babel для поддержки обратной совместимости
            {
                test: /\.(?:js|mjs|cjs)$/i,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ]
                  }
                }
              }
        ]
    }
}