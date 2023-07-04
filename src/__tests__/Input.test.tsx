import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from '../Input';
import theme from '../themes/default';

describe('Input', () => {
	it('should render without crashing', () => {
		render(<Input />);
	});

	it('should render with base styles', () => {
		const expected = theme.input.base;
		render(<Input />);

		expect(screen.getByRole('textbox').getAttribute('class')).toContain(
			expected
		);
	});

	it('should render with active styles', () => {
		const expected = theme.input.active;
		render(<Input />);

		expect(screen.getByRole('textbox').getAttribute('class')).toContain(
			expected
		);
	});

	it('should render with disabled styles', () => {
		const expected = 'cursor-not-allowed bg-gray-300/50 dark:bg-gray-800';
		render(<Input disabled />);

		expect(screen.getByRole('textbox').getAttribute('class')).toContain(
			expected
		);
	});

	it('should render with valid styles', () => {
		const expected = theme.input.valid;
		render(<Input valid />);

		expect(screen.getByRole('textbox').getAttribute('class')).toContain(
			expected
		);
	});

	it('should render with invalid styles', () => {
		const expected = theme.input.invalid;
		render(<Input valid={false} />);

		expect(screen.getByRole('textbox').getAttribute('class')).toContain(
			expected
		);
	});

	it('should render with radio styles', () => {
		const expected = theme.input.radio;
		render(<Input type="radio" />);

		expect(screen.getByRole('radio').getAttribute('class')).toContain(expected);
	});

	it('should render with checkbox styles', () => {
		const expected = theme.input.checkbox;
		render(<Input type="checkbox" />);

		expect(screen.getByRole('checkbox').getAttribute('class')).toContain(
			expected
		);
	});

	it('should contain name attribute', () => {
		render(<Input name="test-name" />);

		expect(screen.getByRole('textbox').getAttribute('name')).toBeDefined();
	});
});
