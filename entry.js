// https://webpack.github.io/docs/tutorials/getting-started/

// Would normally need to write this to load css and other style files:
// require("!style!css!./style.css");
// If we bind file extensions by compiling in the command line...
// webpack ./entry.js bundle.js --module-bind 'css=style!css'
require("./style.css");
document.write(require("./content.js"));

// webpack 
// On the command line will try to load the file webpack.config.js in the current directory, and will compile what is specified in that file.

// webpack --progress --colors
// Will display a progress bar during compilation.

// webpack --progress --colors --watch
// To avoid having to run the recompile command every time a file is changed.

// To run a small express server at localhost:8080
// npm install webpack-dev-server -g
// webpack-dev-server --progress --colors
// Will serve your static assets and your bundle (compiled automatically), and will automatically update the browser page when a bundle is recompiled.  Uses webpack's watch mode.
