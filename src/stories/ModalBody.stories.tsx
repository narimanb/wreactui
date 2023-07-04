import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import ModalBody, { ModalBodyProps } from '../ModalBody';

const meta: Meta<typeof ModalBody> = {
	component: ModalBody,
	title: 'Components/Modal/ModalBody',
	tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof ModalBody>;

export const Template: Story = {
	render: (args: ModalBodyProps) => <ModalBody {...args} />,
};

export const Basic = {
	...Template,
};
