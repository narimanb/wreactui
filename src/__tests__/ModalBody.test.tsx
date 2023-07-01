import React from 'react';
import { render, screen } from '@testing-library/react';
import ModalBody from '../ModalBody';

describe('ModalBody', () => {
	it('should render without crashing', () => {
		render(<ModalBody>Lorem ipsum</ModalBody>);
	});

	it('should render with base styles', () => {
		const expected = 'mb-6 text-sm text-gray-700 dark:text-gray-400';
		render(<ModalBody role="div">Lorem ipsum</ModalBody>);

		expect(screen.getByRole('div').getAttribute('class')).toContain(expected);
	});

	it('should render children', () => {
		const expected = 2;
		render(
			<ModalBody role="div">
				<p>Lorem</p>
				<p>Ipsum</p>
			</ModalBody>
		);

		expect(screen.getByRole('div').childElementCount).toBe(expected);
	});
});
