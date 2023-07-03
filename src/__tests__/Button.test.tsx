import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../Button';
import Theme from '../themes/default';

const button = () => screen.getByTestId('button');

test('should render without crashing', () => {
	render(<Button data-testid="button" />);

	expect(button()).toBeInTheDocument();
});

test('should render a button element', () => {
	render(<Button />);

	expect(screen.getByRole('button')).toBeInTheDocument();
});

test('should render a button with type submit', () => {
	const expectedType = 'submit';

	render(<Button type="submit" />);

	expect(screen.getByRole('button').getAttribute('type')).toContain(
		expectedType
	);
});

test('should render a button with type reset', () => {
	const expectedType = 'reset';

	render(<Button type="reset" />);

	expect(screen.getByRole('button').getAttribute('type')).toContain(
		expectedType
	);
});

test('should render an anchor element', () => {
	render(<Button tag="a" href="#" />);

	expect(screen.getByRole('link')).toBeInTheDocument();
});

test('should not contain type for anchor element', () => {
	render(<Button tag="a" href="#" />);

	expect(screen.getByRole('link').getAttribute('type')).not.toBeInTheDocument();
});

test('should contain base classes', () => {
	const expectedClasses = Theme.button.base;

	render(<Button data-testid="button" />);

	expect(button()).toHaveClass(expectedClasses);
});
