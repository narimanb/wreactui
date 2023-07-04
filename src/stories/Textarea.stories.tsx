import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Textarea, { TextareaProps } from '../Textarea';

const meta: Meta<typeof Textarea> = {
	component: Textarea,
	title: 'Components/Textarea',
	tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Template: Story = {
	render: (args: TextareaProps) => <Textarea {...args} />,
};

export const Basic = {
	...Template,
};
