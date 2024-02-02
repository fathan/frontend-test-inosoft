const mix = require('laravel-mix');
const webpack = require('webpack');
const path = require('path');
const tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

if (!mix.inProduction()) {
  mix
    .webpackConfig({
      devtool: 'inline-source-map',
      devServer: {
        port: '8085'
      }
    });
}
else {
  /* eslint-disable-next-line */
  if (process.env.hasOwnProperty('ASSET_URL') && process.env.ASSET_URL) {
    mix.setResourceRoot(process.env.ASSET_URL);
  }
}

mix
  .webpackConfig ({
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: false,
        __VUE_PROD_DEVTOOLS__: false
      }),
    ],
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@root': path.resolve('resources/js'),
        '@components': path.resolve('resources/js/components'),
        '@configurations': path.resolve('resources/js/configurations'),
        '@layouts': path.resolve('resources/js/layouts'),
        '@services': path.resolve('resources/js/services'),
        '@pages': path.resolve('resources/js/pages'),
        '@plugins': path.resolve('resources/js/plugins'),
        '@routers': path.resolve('resources/js/routers'),
        '@stores': path.resolve('resources/js/stores'),
        '@utils': path.resolve('resources/js/utils'),
        '@styles': path.resolve('resources/styles'),
        '@js': path.resolve('public/js'),
        '@css': path.resolve('public/css'),
        '@images': path.resolve('resources/assets/images'),
        '@svg': path.resolve('resources/assets/svg'),
        '@fonts': path.resolve('resources/fonts')
      }
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          exclude: /node_modules/,
          loader: 'eslint-loader',
          test: /\.(js|vue)?$/
        },
        {
          test: /\.scss$/,
          loader: 'sass-loader',
          options: {
            additionalData: `
              $prefixClass: 'inosoft';
            `
          }
        }
      ]
    }
  });

mix.setPublicPath('public');
mix
  .js('resources/js/app.js', 'public/js')
  .vue()
  .sass('resources/styles/app.scss', 'public/css')
  .options({
    postCss: [
      tailwindcss('./tailwind.config.js')
    ],
    hmrOptions: {
      host: 'localhost',
        port: '8085'
      }
  })
  .copy(
    'resources/assets/images',
    'public/images'
  );

mix.extract();
mix.version();