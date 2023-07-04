import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Card, { CardProps } from '../Card';

const meta: Meta<typeof Card> = {
	component: Card,
	title: 'Components/Card/Card',
	tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Template: Story = {
	render: (args: CardProps) => <Card {...args} />,
};

export const Basic = {
	...Template,
	parameters: {
		children: 'Hello',
	},
};
