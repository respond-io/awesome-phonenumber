export default {
	resolver: 'ts-jest-resolver',
	testEnvironment: 'node',
	testMatch: [
		'<rootDir>/test/**/*.ts',
		'<rootDir>/test/**/*.js',
	],
	moduleNameMapper: {
		"^@respond-io/awesome-phonenumber$": "<rootDir>/index.js",
	},
	modulePathIgnorePatterns: [ "<rootDir>/dist/" ],
	collectCoverage: false,
	extensionsToTreatAsEsm: ['.ts'],
}
