import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../Card';
import theme from '../themes/default';

describe('Card', () => {
	it('should render without crashing', () => {
		render(<Card />);
	});

	it('should render with base styles', () => {
		const expected = theme.card.base;
		render(<Card role="card" />);

		expect(screen.getByRole('card').getAttribute('class')).toContain(expected);
	});

	it('should render with default styles', () => {
		const expected = 'bg-white dark:bg-gray-800';
		render(<Card role="card" />);

		expect(screen.getByRole('card').getAttribute('class')).toContain(expected);
	});

	it('should render without default styles', () => {
		const expected = 'bg-white dark:bg-gray-800';
		render(<Card role="card" colored />);

		expect(screen.getByRole('card').getAttribute('class')).not.toContain(
			expected
		);
	});

	it('should add classes to base styles', () => {
		const expected =
			'min-w-0 rounded-lg ring-1 ring-black/5 overflow-hidden bg-red-400';
		render(<Card role="card" className="bg-red-400" colored />);

		expect(screen.getByRole('card').getAttribute('class')).toBe(expected);
	});

	it('should render children', () => {
		render(<Card role="card">Lorem ipsum</Card>);

		expect(screen.getByRole('card')).toHaveTextContent('Lorem ipsum');
	});
});
