import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Label, { LabelProps } from '../Label';

const meta: Meta<typeof Label> = {
	component: Label,
	title: 'Components/Label',
	tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Template: Story = {
	render: (args: LabelProps) => <Label {...args} />,
};

export const Basic = {
	...Template,
	parameters: {
		children: 'Basic label',
	},
};
