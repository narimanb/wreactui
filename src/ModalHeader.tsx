/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from './context/ThemeContext';

export interface ModalHeaderProps
	extends React.HTMLAttributes<HTMLDivElement> {}

const ModalHeader = React.forwardRef<HTMLParagraphElement, ModalHeaderProps>(
	function ModalHeader(props, ref) {
		const { children, className, ...other } = props;
		const {
			theme: { modalHeader },
		} = useContext(ThemeContext);

		const baseStyle = modalHeader.base;

		const cls = classNames(baseStyle, className);

		return (
			<p className={cls} ref={ref} {...other}>
				{children}
			</p>
		);
	}
);

export default ModalHeader;
