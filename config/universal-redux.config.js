const projectRoot = process.cwd();
const sourceRoot = `${projectRoot}/src`;
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  /*
  // Express configuration
  */
  server: {
    /*
    // The host to run the Express universal renderer. See src/server.js.
    //
    // Expects: String
    */
    host: process.env.HOST || 'localhost',

    /*
    // The port to run Express universal renderer will run on. See src/server.js.
    //
    // Expects: Number
    */
    port: process.env.PORT || 3000,

    /*
    // The path at which static assets are served from. If omitted, Express will
    // serve any static assets from your project root 'static' directory.
    // Optional.
    //
    // Expects: String
    */
    staticPath: projectRoot + '/static',

    /*
    // The path at which a favicon image will be served from using the `serve-favicon`
    // library. If omitted, Express will not serve a favicon. Optional.
    //
    // Expects: String
    */
    // favicon: projectRoot + '/static/favicon.ico',

    /*
    // The maximum age, in milliseconds, for which a static asset will be
    // considered fresh, per the Cache-Control max-age property. If
    // ommitted, defaults to 0. Optional.
    //
    // Expects: Number
    */
    // maxAge: 0

    /*
    // The renderer returns middleware for universal rendering. This config option sets the framework to
    // which this middleware should be compatible.
    // Expects: String
    // options: 'express' || 'koa'
    */
    webFramework: 'express'
  },

  /*
  // Globals available to both serverside and clientside rendering.
  // You may also add your own here.
  */
  globals: {

    /*
    // Whether or not to run redux-logger
    //
    // Expects: Boolean
    */
    __LOGGER__: !isProduction,

    /*
    // Whether or not to run redux-devtools
    //
    // Expects: Boolean
    */
    __DEVTOOLS__: !isProduction,

    /*
    // Whether or not to show redux-devtools when page loads.
    //
    // Expects: Boolean
    */
    __DEVTOOLS_IS_VISIBLE__: true
  },

  /*
  // Enable eslint checks per Webpack build. Will not be run
  // on production.
  //
  // Expects: Boolean
  */
  lint: {
    enabled: false
    // config: projectRoot + '/.eslintrc'
  },

  /*
  // Providers for the root component to assemble. Built in options
  // include 'react-router', 'react-router-redux', 'redux-async-connect',
  // 'async-props'. Custom root components may accept additional options.
  // Optional. If unspecified will use react-router, react-router-redux,
  // and redux-async-connect. Experimental.
  //
  // Expects: Array
  */
  providers: [
    'react-router',
    'react-router-redux',
    'redux-async-connect'
  ],

  /*
  // The root component factory file. Optional. Will be added to Webpack aliases.
  */
  // rootClientComponent: sourceRoot + '/rootClientComponent.js',

  /*
  // The root component factory file. Optional.
  */
  // rootServerComponent: sourceRoot + '/rootServerComponent.js',

  /*
  // The root component factory file. Optional. Will be added to Webpack aliases.
  // Is overridden by either rootClientComponent or rootServerComponent.
  */
  // rootComponent: sourceRoot + '/rootComponent.js',

  /*
  // Project level babelConfig to be merged with defaults. Optional.
  //
  // Expects: String
  */
  // babelConfig: projectRoot + '/.babelrc',

  /*
  // Enable native desktop notifications for Webpack build events.
  // Will not be run on production.
  //
  // Expects: Boolean
  */
  notifications: false,

  /*
  // Path to a file with customizations for the default
  // webpack-isomorphic-tools configuration. Optional.
  //
  // Expects: String
  */
  toolsConfigPath: __dirname + '/webpack-isomorphic-tools.config.js',

  /*
  // When eneabled, will output Webpack and Webpack Isomorphic
  // Tools configurations at startup
  //
  // Expects: Boolean
  */
  verbose: true,

  /*
  // The react-router Routes file. Required. Will be added to Webpack aliases.
  */
  routes: sourceRoot + '/routes.js',

  html: {
    /*
    // A path to a component that provides additional DOM items to be appended
    // to the <head>. Optional.
    //
    // Expects: String
    */
    // head: sourceRoot + '/containers/Head/Head.js',

    /*
    // A path to a component that provides the root html shell. It is strongly
    // encouraged to instead use html.head to provide your own additions, as
    // with this parameter you are responsible for some of the internals of
    // Universal Redux.
    //
    // Be sure that the content includes all of the items inside of the default
    // Head and Body inside of Universal Redux's src/server directory.
    //
    // Expects: String
    */
    // root: sourceRoot + '/containers/Root/Root.js'
  },

  /*
  // Deprecated in favor of html.root (or html.root if
  // necessary)
  //
  // The path to your replacement for the default HTML shell. Optional.
  // If not provided, the default used will be that in src/server/html.js
  //
  // Expects: String
  */
  // htmlShell: sourceRoot + '/containers/HtmlShell/HtmlShell.js',

  redux: {
    /*
    // A path to an index of middleware functions. Optional.
    //
    // Expects: String
    */
    middleware: sourceRoot + '/redux/middleware/index.js',
  },

  /*
  // Customizations for Webpack configuration. Optional.
  //
  // Expects: Object
  */
  webpack: {

    /*
    // A list of libraries that do not change frequently between deploys
    // and are best served in the vendor bundle. Optional.
    //
    // Expects: Array
    */
    // vendorLibraries: [],

    /*
    // Webpack configuration cusomtizations. There are more parameters
    // available than specified here. For the full list, see
    // https://webpack.github.io/docs/configuration.html. Optional.
    //
    // Expects: Object
    */
    config: {

      /*
      // The Webpack devtool configuration. May affect build times.
      // See https://webpack.github.io/docs/configuration.html#devtool
      */
      devtool: isProduction ? 'source-map' : 'inline-eval-cheap-source-map',

      module: {
        loaders: [
          // { test: /\.jsx?$/, exclude: /node_modules/, loaders: jsLoaders }, // now prepended in merge-configs and merge-babel-config
          { test: /\.json$/, loader: 'json-loader' },
          { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
          { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
          { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
          { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
          { test: /\.(webm|mp4)$/, loader: 'file' },
          { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
        ]
      },
    }
  }
};
