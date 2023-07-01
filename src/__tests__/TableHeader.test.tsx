import React from 'react';
import { render, screen } from '@testing-library/react';
import TableHeader from '../TableHeader';

describe('TableHeader', () => {
	it('should render without crashing', () => {
		render(
			<table>
				<TableHeader />
			</table>
		);
	});

	it('should render with base styles', () => {
		const expected =
			'text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800';
		render(
			<table>
				<TableHeader />
			</table>
		);

		expect(screen.getByRole('rowgroup').getAttribute('class')).toContain(
			expected
		);
	});
});
