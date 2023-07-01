import React from 'react';
import { render, screen } from '@testing-library/react';
import Badge from '../Badge';

const badge = () => screen.getByTestId('badge');

test('should render without crashing', () => {
	render(<Badge data-testid="badge" />);

	expect(badge()).toBeInTheDocument();
});

test('should render with base styles', () => {
	const expectedClasses =
		'inline-flex px-2 text-xs font-medium leading-5 rounded-full';
	render(<Badge data-testid="badge" />);

	expect(badge()).toHaveClass(expectedClasses);
});

test('should render with success styles', () => {
	const expectedClasses =
		'text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100';
	render(<Badge type="success" data-testid="badge" />);

	expect(badge()).toHaveClass(expectedClasses);
});

test('should render with danger styles', () => {
	const expectedClasses =
		'text-red-700 bg-red-100 dark:text-red-100 dark:bg-red-700';
	render(<Badge type="danger" data-testid="badge" />);

	expect(badge()).toHaveClass(expectedClasses);
});

test('should render with warning styles', () => {
	const expectedClasses =
		'text-orange-700 bg-orange-100 dark:text-white dark:bg-orange-600';
	render(<Badge type="warning" data-testid="badge" />);

	expect(badge()).toHaveClass(expectedClasses);
});

test('should render with neutral styles', () => {
	const expectedClasses =
		'text-gray-700 bg-gray-100 dark:text-gray-100 dark:bg-gray-700';
	render(<Badge type="neutral" data-testid="badge" />);

	expect(badge()).toHaveClass(expectedClasses);
});

test('should render with primary styles', () => {
	const expectedClasses =
		'text-purple-700 bg-purple-100 dark:text-white dark:bg-purple-600';
	render(<Badge type="primary" data-testid="badge" />);

	expect(badge()).toHaveClass(expectedClasses);
});

test('hould render with primary styles when no type is used', () => {
	const expectedClasses =
		'text-purple-700 bg-purple-100 dark:text-white dark:bg-purple-600';
	render(<Badge data-testid="badge" />);

	expect(badge()).toHaveClass(expectedClasses);
});
