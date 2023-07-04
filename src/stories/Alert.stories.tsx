import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Alert, { AlertProps } from '../Alert';

const meta: Meta<typeof Alert> = {
	component: Alert,
	title: 'Components/Alert',
	tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Template: Story = {
	render: (args: AlertProps) => <Alert {...args} />,
};

export const Basic = {
	...Template,
	parameters: {
		children: 'This is a neutral alert.',
		type: 'neutral',
	},
};

export const WithoutClose = {
	...Template,
	parameters: {
		children: "This alert doesn't have a close button.",
		type: 'success',
		onClose: undefined,
	},
};
