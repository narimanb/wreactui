module.exports = {
	collectCoverage: true,
	testEnvironment: 'jsdom',
	rootDir: './',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	coverageDirectory: '<rootDir>/coverage',
	collectCoverageFrom: [
		'<rootDir>/src/**/*.{js,jsx,ts,tsx}',
		'!<rootDir>/src/**/*.stories.{js,jsx,ts,tsx}', // exclude all stories from test coverage
	],
	coverageReporters: ['json', 'html'],
};
