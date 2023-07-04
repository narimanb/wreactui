import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import CardBody, { CardBodyProps } from '../CardBody';

const meta: Meta<typeof CardBody> = {
	component: CardBody,
	title: 'Components/Card/CardBody',
	tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof CardBody>;

export const Template: Story = {
	render: (args: CardBodyProps) => <CardBody {...args} />,
};

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
