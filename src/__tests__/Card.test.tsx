import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../Card';
import Theme from '../themes/default';

const card = () => screen.getByTestId('card');

test('should render without crashing', () => {
	render(<Card data-testid="card" />);

	expect(card()).toBeInTheDocument();
});

test('should render with base styles', () => {
	const expectedClasses = Theme.card.base;
	render(<Card data-testid="card" />);

	expect(card()).toHaveClass(expectedClasses);
});

test('should render with default styles', () => {
	const expectedClasses = Theme.card.default;
	render(<Card data-testid="card" />);

	expect(card()).toHaveClass(expectedClasses);
});

test('should render without default styles', () => {
	const expectedClasses = Theme.card.default;
	render(<Card colored data-testid="card" />);

	expect(card().getAttribute('class')).not.toContain(expectedClasses);
});

test('should render children', () => {
	const expectedText = 'Lorem ipsum';
	render(<Card data-testid="card">Lorem ipsum</Card>);

	expect(card()).toHaveTextContent(expectedText);
});

test('should add classes to base styles', () => {
	const expectedClasses = Theme.card.base + ' bg-red-400';
	render(<Card className="bg-red-400" data-testid="card" />);

	expect(card()).toHaveClass(expectedClasses);
});
