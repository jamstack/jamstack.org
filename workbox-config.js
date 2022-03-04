module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{html,xml,css,jpg,png,gif,ico,svg,js,webmanifest,pdf}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};