import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import ModalFooter, { ModalFooterProps } from '../ModalFooter';

const meta: Meta<typeof ModalFooter> = {
	component: ModalFooter,
	title: 'Components/Modal/ModalFooter',
	tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof ModalFooter>;

export const Template: Story = {
	render: (args: ModalFooterProps) => <ModalFooter {...args} />,
};

export const Basic = {
	...Template,
};
