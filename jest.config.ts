module.exports = {
	collectCoverage: true,
	coverageReporters: ['json', 'html'],
	collectCoverageFrom: ['src/__tests__/**/*.{js,jsx,ts,tsx}'],
	coverageDirectory: 'coverage',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
