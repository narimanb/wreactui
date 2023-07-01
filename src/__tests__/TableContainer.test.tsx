import React from 'react';
import { render, screen } from '@testing-library/react';
import TableContainer from '../TableContainer';
import theme from '../themes/default';

describe('TableContainer', () => {
	it('should render without crashing', () => {
		render(<TableContainer />);
	});

	it('should render with base styles', () => {
		const expected = theme.tableContainer.base;
		render(<TableContainer role="table" />);

		expect(screen.getByRole('table').getAttribute('class')).toContain(expected);
	});
});
