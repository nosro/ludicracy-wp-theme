const autoprefixer = require('autoprefixer');
const postcssInlineSvg = require('postcss-inline-svg');

module.exports = {
	plugins: [
    autoprefixer(),
    postcssInlineSvg({ removeFill: true }),
	]
}