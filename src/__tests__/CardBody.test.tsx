import React from 'react';
import { render, screen } from '@testing-library/react';
import CardBody from '../CardBody';

describe('CardBody', () => {
	it('should render without crashing', () => {
		render(<CardBody />);
	});

	it('should render with default styles', () => {
		const expected = 'p-4';
		render(<CardBody role="cardbody" />);

		expect(screen.getByRole('cardbody').getAttribute('class')).toContain(
			expected
		);
	});
});
