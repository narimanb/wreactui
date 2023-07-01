import React from 'react';
import { render, screen } from '@testing-library/react';
import Backdrop from '../Backdrop';

const backdrop = () => screen.getByTestId('backdrop');

test('should render without crashing', () => {
	render(<Backdrop data-testid="backdrop" />);

	expect(backdrop()).toBeInTheDocument();
});

test('should render with base styles', () => {
	const expectedClasses =
		'fixed inset-0 z-40 flex items-end bg-black/50 sm:items-center sm:justify-center';
	render(<Backdrop data-testid="backdrop" />);

	expect(backdrop()).toHaveClass(expectedClasses);
});
