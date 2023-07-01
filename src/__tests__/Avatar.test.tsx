import React, { createRef } from 'react';
import { render, screen, within } from '@testing-library/react';
import Avatar from '../Avatar';

const avatar = () => screen.getByTestId('avatar');
const img = () => within(avatar()).getByRole('img');

test('should render without crashing', () => {
	render(<Avatar src="#" data-testid="avatar" />);

	expect(avatar()).toBeInTheDocument();
});

test('should render with base styles', () => {
	const expectedClasses = 'relative rounded-full inline-block';
	render(<Avatar src="#" data-testid="avatar" />);

	expect(avatar()).toHaveClass(expectedClasses);
});

test('should be able to access the <Avatar />', () => {
	const avatarRef = createRef<HTMLDivElement>();
	render(<Avatar ref={avatarRef} src="#" data-testid="avatar" />);
	expect(avatar()).toEqual(avatarRef.current);
});

test('should render with large styles', () => {
	const expectedClasses = 'w-10 h-10';
	render(<Avatar src="#" size="large" data-testid="avatar" />);

	expect(avatar()).toHaveClass(expectedClasses);
});

test('should render with regular styles', () => {
	const expectedClasses = 'w-8 h-8';
	render(<Avatar src="#" size="regular" data-testid="avatar" />);

	expect(avatar()).toHaveClass(expectedClasses);
});

test('should render with small styles', () => {
	const expectedClasses = 'w-6 h-6';
	render(<Avatar src="#" size="small" data-testid="avatar" />);

	expect(avatar()).toHaveClass(expectedClasses);
});

test('should contain an image with the correct src', () => {
	const expectedSrc = '#';
	render(<Avatar src="#" data-testid="avatar" />);

	expect(img()).toHaveAttribute('src', expectedSrc);
});

test('should contain an image with alt text', () => {
	const expectedAltText = 'Lorem';
	render(<Avatar src="#" alt="Lorem" data-testid="avatar" />);

	expect(img()).toHaveAccessibleName(expectedAltText);
});
