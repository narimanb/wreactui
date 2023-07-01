import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Backdrop, { BackdropProps } from '../Backdrop';

const meta: Meta<typeof Backdrop> = {
	component: Backdrop,
};
export default meta;

type Story = StoryObj<typeof Backdrop>;

export const Template: Story = {
	render: (args: BackdropProps) => <Backdrop {...args} />,
};

export const Basic = {
	...Template,
};
