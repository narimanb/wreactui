import React from 'react';
import { render, screen } from '@testing-library/react';
import Badge from '../Badge';
import Theme from '../themes/default';

const badge = () => screen.getByTestId('badge');

test('should render without crashing', () => {
	render(<Badge data-testid="badge" />);

	expect(badge()).toBeInTheDocument();
});

test('should render with base styles', () => {
	const expectedClasses = Theme.badge.base;
	render(<Badge data-testid="badge" />);

	expect(badge()).toHaveClass(expectedClasses);
});

test('should render with success styles', () => {
	const expectedClasses = Theme.badge.success;
	render(<Badge type="success" data-testid="badge" />);

	expect(badge()).toHaveClass(expectedClasses);
});

test('should render with danger styles', () => {
	const expectedClasses = Theme.badge.danger;
	render(<Badge type="danger" data-testid="badge" />);

	expect(badge()).toHaveClass(expectedClasses);
});

test('should render with warning styles', () => {
	const expectedClasses = Theme.badge.warning;
	render(<Badge type="warning" data-testid="badge" />);

	expect(badge()).toHaveClass(expectedClasses);
});

test('should render with neutral styles', () => {
	const expectedClasses = Theme.badge.neutral;
	render(<Badge type="neutral" data-testid="badge" />);

	expect(badge()).toHaveClass(expectedClasses);
});

test('should render with primary styles', () => {
	const expectedClasses = Theme.badge.primary;
	render(<Badge type="primary" data-testid="badge" />);

	expect(badge()).toHaveClass(expectedClasses);
});

test('hould render with primary styles when no type is used', () => {
	const expectedClasses = Theme.badge.primary;
	render(<Badge data-testid="badge" />);

	expect(badge()).toHaveClass(expectedClasses);
});
