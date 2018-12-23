module.exports = {
	"testPathIgnorePatterns": [
		'<rootDir>/node_modules'
	],
	"moduleNameMapper": {
		"^@components(.*)$": "<rootDir>/src/modules/common/components$1",
		"^@home(.*)$": "<rootDir>/src/modules/home$1",
		"^.+\\.(css|less|scss)$": "identity-obj-proxy"
	},
	"setupFiles": [
		"jest-prop-type-error"
	]
}