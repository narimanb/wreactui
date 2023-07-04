import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import HelperText, { HelperTextProps } from '../HelperText';

const meta: Meta<typeof HelperText> = {
	component: HelperText,
	title: 'Components/HelperText',
	tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof HelperText>;

export const Template: Story = {
	render: (args: HelperTextProps) => <HelperText {...args} />,
};

export const Basic = {
	...Template,
	parameters: {
		children: 'Helper text used with inputs.',
		valid: undefined,
	},
};

export const WithValidation = {
	...Template,
	parameters: {
		children: 'Helper text used with inputs.',
		valid: true,
	},
};
