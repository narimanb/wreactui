import React from 'react';
import { render, screen } from '@testing-library/react';
import Backdrop from '../Backdrop';
import Theme from '../themes/default';

const backdrop = () => screen.getByTestId('backdrop');

test('should render without crashing', () => {
	render(<Backdrop data-testid="backdrop" />);

	expect(backdrop()).toBeInTheDocument();
});

test('should render with base styles', () => {
	const expectedClasses = Theme.backdrop.base;
	render(<Backdrop data-testid="backdrop" />);

	expect(backdrop()).toHaveClass(expectedClasses);
});
