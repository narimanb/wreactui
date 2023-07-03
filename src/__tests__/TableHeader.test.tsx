import React from 'react';
import { render, screen } from '@testing-library/react';
import TableHeader from '../TableHeader';
import Theme from '../themes/default';

const tableHeader = () => screen.getByTestId('header');

test('should render without crashing', () => {
	render(<TableHeader data-testid="header" />);

	expect(tableHeader()).toBeInTheDocument();
});

test('should render as thead element', () => {
	render(<TableHeader data-testid="header" />);

	expect(screen.getByRole('rowgroup')).toBeInTheDocument();
});

test('should render with base styles', () => {
	const expectedClasses = Theme.tableHeader.base;
	render(<TableHeader data-testid="header" />);

	expect(tableHeader()).toHaveClass(expectedClasses);
});
