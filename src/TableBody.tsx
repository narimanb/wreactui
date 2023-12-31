import React, { useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from './context/ThemeContext';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TableBodyProps
	extends React.HTMLAttributes<HTMLTableSectionElement> {}

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
	function TableBody(props, ref) {
		const { className, children, ...other } = props;

		const {
			theme: { tableBody },
		} = useContext(ThemeContext);

		const baseStyle = tableBody.base;

		const cls = classNames(baseStyle, className);

		return (
			<tbody className={cls} ref={ref} {...other}>
				{children}
			</tbody>
		);
	}
);

export default TableBody;
