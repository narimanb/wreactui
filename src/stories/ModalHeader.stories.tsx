import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import ModalHeader, { ModalHeaderProps } from '../ModalHeader';

const meta: Meta<typeof ModalHeader> = {
	component: ModalHeader,
	title: 'Components/Modal/ModalHeader',
	tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof ModalHeader>;

export const Template: Story = {
	render: (args: ModalHeaderProps) => <ModalHeader {...args} />,
};

export const Basic = {
	...Template,
};
