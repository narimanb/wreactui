import React from 'react';
import { render, screen } from '@testing-library/react';
import CardBody from '../CardBody';
import Theme from '../themes/default';

const cardBody = () => screen.getByTestId('test');

test('should render without crashing', () => {
	render(<CardBody data-testid="test" />);

	expect(cardBody()).toBeInTheDocument();
});

test('should render with base styles', () => {
	const expectedClasses = Theme.cardBody.base;
	render(<CardBody data-testid="test" />);

	expect(cardBody()).toHaveClass(expectedClasses);
});
