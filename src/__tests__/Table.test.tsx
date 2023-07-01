import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../Table';

describe('Table', () => {
	it('should render without crashing', () => {
		render(<Table />);
	});

	it('should contain a table', () => {
		render(<Table />);

		expect(screen.getByRole('table')).toBeTruthy();
	});
});
