import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Pagination, { PaginationProps } from '../Pagination';

const meta: Meta<typeof Pagination> = {
	component: Pagination,
	title: 'Components/Pagination',
	tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Pagination>;

export const Template: Story = {
	render: (args: PaginationProps) => <Pagination {...args} />,
};

export const Basic = {
	...Template,
	parameters: {
		totalResults: 120,
		resultsPerPage: 10,
	},
};
