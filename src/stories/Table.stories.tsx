import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Table, { TableProps } from '../Table';

const meta: Meta<typeof Table> = {
	component: Table,
	title: 'Components/Table/Table',
	tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Table>;

export const Template: Story = {
	render: (args: TableProps) => <Table {...args} />,
};

export const Basic = {
	...Template,
};
