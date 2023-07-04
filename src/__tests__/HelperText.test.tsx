import React from 'react';
import { render, screen } from '@testing-library/react';
import HelperText from '../HelperText';

describe('HelperText', () => {
	it('should render without crashing', () => {
		render(<HelperText>Lorem ipsum</HelperText>);
	});

	it('should render with base styles', () => {
		const expected = 'text-xs';
		render(<HelperText role="help">Lorem ipsum</HelperText>);

		expect(screen.getByRole('help').getAttribute('class')).toContain(expected);
	});

	it('should render with valid styles', () => {
		const expected = 'text-green-600 dark:text-green-400';
		render(
			<HelperText role="help" valid>
				Lorem ipsum
			</HelperText>
		);

		expect(screen.getByRole('help').getAttribute('class')).toContain(expected);
	});

	it('should render with invalid styles', () => {
		const expected = 'text-red-600 dark:text-red-400';
		render(
			<HelperText role="help" valid={false}>
				Lorem ipsum
			</HelperText>
		);

		expect(screen.getByRole('help').getAttribute('class')).toContain(expected);
	});
});
