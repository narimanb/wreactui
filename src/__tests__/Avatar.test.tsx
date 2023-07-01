import React from 'react';
import { render, screen } from '@testing-library/react';
import Avatar from '../Avatar';

describe('Avatar', () => {
	it('should render without crashing', () => {
		render(<Avatar src="test" />);
	});

	it('should render with base styles', () => {
		const expected = 'relative rounded-full inline-block';
		render(<Avatar role="avatar" src="test" />);

		expect(screen.getByRole('avatar').getAttribute('class')).toContain(
			expected
		);
	});

	it('should render with large styles', () => {
		const expected = 'w-10 h-10';
		render(<Avatar role="avatar" src="test" size="large" />);

		expect(screen.getByRole('avatar').getAttribute('class')).toContain(
			expected
		);
	});

	it('should render with regular styles using prop', () => {
		const expected = 'w-8 h-8';
		render(<Avatar role="avatar" src="test" size="regular" />);

		expect(screen.getByRole('avatar').getAttribute('class')).toContain(
			expected
		);
	});

	it('should render with regular styles by default', () => {
		const expected = 'w-8 h-8';
		render(<Avatar role="avatar" src="test" />);

		expect(screen.getByRole('avatar').getAttribute('class')).toContain(
			expected
		);
	});

	it('should render with small styles', () => {
		const expected = 'w-6 h-6';
		render(<Avatar role="avatar" src="test" size="small" />);

		expect(screen.getByRole('avatar').getAttribute('class')).toContain(
			expected
		);
	});

	it('should contain an image with alt text', () => {
		const expected = 'Lorem';
		render(<Avatar src="test" alt="Lorem" />);

		expect(screen.getByRole('img').getAttribute('alt')).toContain(expected);
	});

	it('should contain an image with the correct src', () => {
		const expected = 'test';
		render(<Avatar src="test" alt="Lorem" />);

		expect(screen.getByRole('img').getAttribute('src')).toContain(expected);
	});
});
