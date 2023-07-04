import React, { useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from './context/ThemeContext';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TableFooterProps
	extends React.HTMLAttributes<HTMLTableSectionElement> {}

const TableFooter = React.forwardRef<HTMLTableSectionElement, TableFooterProps>(
	function TableFooter(props, ref) {
		const { className, children, ...other } = props;

		const {
			theme: { tableFooter },
		} = useContext(ThemeContext);

		const baseStyle = tableFooter.base;

		const cls = classNames(baseStyle, className);

		return (
			<tfoot className={cls} ref={ref} {...other}>
				{children}
			</tfoot>
		);
	}
);

export default TableFooter;
