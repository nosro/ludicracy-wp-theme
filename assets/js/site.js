// accept hot module reloading
if ( module.hot ) {
  module.hot.accept();
}

// Import fonts
const WebFont = require('webfontloader');

WebFont.load({
  google: {
    families: ['Raleway:100,400,500,700'],
  },
});

// Core Styles
import '../scss/style.scss';

import './site/navigation';
import './site/skip-link-focus-fix';
