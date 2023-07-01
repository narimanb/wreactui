import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Card, { CardProps } from '../Card';

const meta: Meta<typeof Card> = {
	component: Card,
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Template: Story = {
	render: (args: CardProps) => <Card {...args} />,
};

// TODO: Add composed examples with CardBody
export const Basic = {
	...Template,
	parameters: {
		children: 'Hello',
	},
};

export const Colored = {
	...Template,
	parameters: {
		children: 'Hello',
		colored: true,
		className: 'bg-red-200',
	},
};
