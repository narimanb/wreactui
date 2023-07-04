import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Modal, { ModalProps } from '../Modal';

const meta: Meta<typeof Modal> = {
	component: Modal,
	title: 'Components/Modal/Modal',
	tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Template: Story = {
	render: (args: ModalProps) => <Modal {...args} />,
};

export const Basic = {
	...Template,
};
