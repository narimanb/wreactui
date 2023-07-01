import React from 'react';
import { render, screen } from '@testing-library/react';
import TableFooter from '../TableFooter';

describe('TableFooter', () => {
	it('should render without crashing', () => {
		render(<TableFooter />);
	});

	it('should render with base styles', () => {
		const expected =
			'px-4 py-3 border-t dark:border-gray-700 bg-gray-50 text-gray-500 dark:text-gray-400 dark:bg-gray-800';
		render(<TableFooter role="footer" />);

		expect(screen.getByRole('footer').getAttribute('class')).toContain(
			expected
		);
	});
});
