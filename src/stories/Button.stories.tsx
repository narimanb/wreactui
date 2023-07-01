import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Button, { ButtonProps } from '../Button';
import HeartIcon from './static/heart.svg';

const meta: Meta<typeof Button> = {
	component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Template: Story = {
	render: (args: ButtonProps) => <Button {...args} />,
};

export const Basic = {
	...Template,
	parameters: {
		children: 'Button',
		layout: 'primary',
		size: 'regular',
	},
};

export const WithIcon = {
	...Template,
	parameters: {
		children: 'Icon',
		layout: 'primary',
		icon: HeartIcon,
	},
};
