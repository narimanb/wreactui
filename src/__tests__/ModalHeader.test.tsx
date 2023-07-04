import React from 'react';
import { render, screen } from '@testing-library/react';
import ModalHeader from '../ModalHeader';

describe('ModalHeader', () => {
	it('should render without crashing', () => {
		render(<ModalHeader>Lorem ipsum</ModalHeader>);
	});

	it('should render with base styles', () => {
		const expected =
			'mt-4 mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300';
		render(<ModalHeader role="p">Lorem ipsum</ModalHeader>);

		expect(screen.getByRole('p').getAttribute('class')).toContain(expected);
	});
});
