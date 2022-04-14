let mix = require('laravel-mix')

mix.js('src/App.js','public')
    .sass('src/App.scss','css')
    .setPublicPath('public')