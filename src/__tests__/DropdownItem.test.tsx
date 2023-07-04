import React from 'react';
import { render, screen, within } from '@testing-library/react';
import DropdownItem from '../DropdownItem';
import Theme from '../themes/default';

const dropdownItem = () => screen.getByTestId('test');

test('should render without crashing', () => {
	render(<DropdownItem data-testid="test" />);

	expect(dropdownItem()).toBeInTheDocument();
});

test('should render with base styles', () => {
	const expectedClasses = Theme.dropdownItem.base;
	render(<DropdownItem />);

	expect(screen.getByRole('listitem')).toHaveClass(expectedClasses);
});

test('should contain a Button child', () => {
	render(<DropdownItem data-testid="test" />);

	expect(within(screen.getByRole('listitem')).getByRole('button')).toBeTruthy();
});

test('should pass extra props to the inner button', () => {
	const expected = 'test';
	render(<DropdownItem tag="a" href="test" />);

	expect(screen.getByRole('link').getAttribute('href')).toContain(expected);
});
