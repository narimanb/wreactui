import React from 'react';
import { render, screen } from '@testing-library/react';
import Textarea from '../Textarea';
import theme from '../themes/default';

describe('Textarea', () => {
	it('should render without crashing', () => {
		render(<Textarea />);
	});

	it('should render with base styles', () => {
		const expected = theme.textarea.base;
		render(<Textarea />);

		expect(screen.getByRole('textbox').getAttribute('class')).toContain(
			expected
		);
	});

	it('should render with active styles', () => {
		const expected = theme.textarea.active;
		render(<Textarea />);

		expect(screen.getByRole('textbox').getAttribute('class')).toContain(
			expected
		);
	});

	it('should render with disabled styles', () => {
		const expected = 'cursor-not-allowed bg-gray-300/50 dark:bg-gray-800';
		render(<Textarea disabled />);

		expect(screen.getByRole('textbox').getAttribute('class')).toContain(
			expected
		);
	});

	it('should render with valid styles', () => {
		const expected = theme.textarea.valid;
		render(<Textarea valid />);

		expect(screen.getByRole('textbox').getAttribute('class')).toContain(
			expected
		);
	});

	it('should render with invalid styles', () => {
		const expected = theme.textarea.invalid;
		render(<Textarea valid={false} />);

		expect(screen.getByRole('textbox').getAttribute('class')).toContain(
			expected
		);
	});

	it('should contain name attribute', () => {
		render(<Textarea name="test-name" />);

		expect(screen.getByRole('textbox').getAttribute('name')).toBe('test-name');
	});
});
