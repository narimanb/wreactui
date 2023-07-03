import React from 'react';
import { render, screen } from '@testing-library/react';
import TableBody from '../TableBody';
import Theme from '../themes/default';

const tableBody = () => screen.getByTestId('tbody');

test('should render without crashing', () => {
	render(<TableBody data-testid="tbody" />);

	expect(tableBody()).toBeInTheDocument();
});

test('should render as tbody element', () => {
	render(<TableBody data-testid="tbody" />);

	expect(screen.getByRole('rowgroup')).toBeInTheDocument();
});

test('should render with base styles', () => {
	const expectedClasses = Theme.tableBody.base;
	render(<TableBody data-testid="tbody" />);

	expect(tableBody()).toHaveClass(expectedClasses);
});
