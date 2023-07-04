import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Badge, { BadgeProps } from '../Badge';

const meta: Meta<typeof Badge> = {
	component: Badge,
	title: 'Components/Badge',
	tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Template: Story = {
	render: (args: BadgeProps) => <Badge {...args} />,
};

export const Basic = {
	...Template,
	parameters: {
		children: 'badge text',
		type: 'neutral',
	},
};
