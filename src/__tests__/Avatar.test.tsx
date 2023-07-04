import React, { createRef } from 'react';
import { render, screen, within } from '@testing-library/react';
import Avatar from '../Avatar';
import Theme from '../themes/default';

const avatar = () => screen.getByTestId('avatar');
const img = () => within(avatar()).getByRole('img');

test('should render without crashing', () => {
	render(<Avatar src="#" data-testid="avatar" />);

	expect(avatar()).toBeInTheDocument();
});

test('should render with base styles', () => {
	const expectedClasses = Theme.avatar.base;
	render(<Avatar src="#" data-testid="avatar" />);

	expect(avatar()).toHaveClass(expectedClasses);
});

test('should be able to access the <Avatar />', () => {
	const avatarRef = createRef<HTMLDivElement>();
	render(<Avatar ref={avatarRef} src="#" data-testid="avatar" />);
	expect(avatar()).toEqual(avatarRef.current);
});

test('should render with large styles', () => {
	const expectedClasses = Theme.avatar.size.large;
	render(<Avatar src="#" size="large" data-testid="avatar" />);

	expect(avatar()).toHaveClass(expectedClasses);
});

test('should render with regular styles', () => {
	const expectedClasses = Theme.avatar.size.regular;
	render(<Avatar src="#" size="regular" data-testid="avatar" />);

	expect(avatar()).toHaveClass(expectedClasses);
});

test('should render with small styles', () => {
	const expectedClasses = Theme.avatar.size.small;
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
