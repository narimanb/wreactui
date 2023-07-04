import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from '../Label';

describe('Label', () => {
	it('should render without crashing', () => {
		render(<Label>Lorem</Label>);
	});

	it('should render with base styles', () => {
		const expected = 'block text-sm text-gray-700 dark:text-gray-400';
		render(<Label role="label">Lorem</Label>);

		expect(screen.getByRole('label').getAttribute('class')).toContain(expected);
	});

	it('should render with check styles using check prop', () => {
		const expected = 'inline-flex items-center';
		render(
			<Label role="label" check>
				Lorem
			</Label>
		);

		expect(screen.getByRole('label').getAttribute('class')).toContain(expected);
	});

	it('should render with check styles using radio prop', () => {
		const expected = 'inline-flex items-center';
		render(
			<Label role="label" radio>
				Lorem ipsum
			</Label>
		);

		expect(screen.getByRole('label').getAttribute('class')).toContain(expected);
	});

	it('should render with disabled styles', () => {
		const expected = 'opacity-50 cursor-not-allowed';
		render(
			<Label role="label" disabled>
				Lorem ipsum
			</Label>
		);

		expect(screen.getByRole('label').getAttribute('class')).toContain(expected);
	});
});
