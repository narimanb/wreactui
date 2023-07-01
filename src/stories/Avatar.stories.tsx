import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Avatar, { AvatarProps } from '../Avatar';

import avatarImage from './static/avatar-1.jpg';

const meta: Meta<typeof Avatar> = {
	component: Avatar,
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Template: Story = {
	render: (args: AvatarProps) => <Avatar {...args} />,
};

export const Basic = {
	...Template,
	parameters: {
		size: 'large',
		src: avatarImage,
		alt: 'Profile image',
	},
};
