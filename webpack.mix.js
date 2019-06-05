const mix = require('laravel-mix');

mix.js([
    'resources/js/administrador/jquery.js',
    'resources/js/administrador/bootstrap.js',
    'resources/js/app.js',
    'resources/js/administrador/app.js',

], 'public/js/app.js')
.styles([
'resources/sass/app.scss',
'resources/css/boostrap.css',
'resources/css/toastr.css',
], 'public/css/app.css');

