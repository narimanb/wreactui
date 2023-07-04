import React from 'react';
import { render, screen } from '@testing-library/react';
import TableContainer from '../TableContainer';
import Theme from '../themes/default';

const tableContainer = () => screen.getByTestId('test');

test('should render without crashing', () => {
	render(<TableContainer data-testid="test" />);

	expect(tableContainer()).toBeInTheDocument();
});

test('should render with base styles', () => {
	const expectedClasses = Theme.tableContainer.base;
	render(<TableContainer data-testid="test" />);

	expect(tableContainer()).toHaveClass(expectedClasses);
});
