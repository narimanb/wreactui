import React from 'react';
import { render, screen } from '@testing-library/react';
import Badge from '../Badge';

describe('Badge', () => {
	it('should render without crashing', () => {
		render(<Badge />);
	});

	it('should render with base styles', () => {
		const expected =
			'inline-flex px-2 text-xs font-medium leading-5 rounded-full';
		render(<Badge role="span" />);

		expect(screen.getByRole('span').getAttribute('class')).toContain(expected);
	});

	it('should render with success styles', () => {
		const expected =
			'text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100';
		render(<Badge role="span" type="success" />);

		expect(screen.getByRole('span').getAttribute('class')).toContain(expected);
	});

	it('should render with danger styles', () => {
		const expected =
			'text-red-700 bg-red-100 dark:text-red-100 dark:bg-red-700';
		render(<Badge role="span" type="danger" />);

		expect(screen.getByRole('span').getAttribute('class')).toContain(expected);
	});

	it('should render with warning styles', () => {
		const expected =
			'text-orange-700 bg-orange-100 dark:text-white dark:bg-orange-600';
		render(<Badge role="span" type="warning" />);

		expect(screen.getByRole('span').getAttribute('class')).toContain(expected);
	});

	it('should render with neutral styles', () => {
		const expected =
			'text-gray-700 bg-gray-100 dark:text-gray-100 dark:bg-gray-700';
		render(<Badge role="span" type="neutral" />);

		expect(screen.getByRole('span').getAttribute('class')).toContain(expected);
	});

	it('should render with primary styles', () => {
		const expected =
			'text-purple-700 bg-purple-100 dark:text-white dark:bg-purple-600';
		render(<Badge role="span" type="primary" />);

		expect(screen.getByRole('span').getAttribute('class')).toContain(expected);
	});

	it('should render with primary styles when no type is used', () => {
		const expected =
			'text-purple-700 bg-purple-100 dark:text-white dark:bg-purple-600';
		render(<Badge role="span" />);

		expect(screen.getByRole('span').getAttribute('class')).toContain(expected);
	});
});
