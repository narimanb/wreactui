import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../Table';

const table = () => screen.getByTestId('test');

test('should render without crashing', () => {
	render(<Table data-testid="test" />);

	expect(table()).toBeInTheDocument();
});

test('should contain a table', () => {
	render(<Table />);

	expect(screen.getByRole('table')).toBeInTheDocument();
});
