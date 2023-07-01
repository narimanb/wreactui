import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Input, { InputProps } from '../Input';

const meta: Meta<typeof Input> = {
	component: Input,
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Template: Story = {
	render: (args: InputProps) => <Input {...args} />,
};

export const Text = {
	...Template,
};

export const Checkbox = {
	...Template,
	parameters: {
		type: 'checkbox',
	},
};

export const Radio = {
	...Template,
	parameters: {
		type: 'radio',
	},
};
