import { SVGAttributes } from 'react';

/**
 * Basic example:
 * ```js
 * <svg data-prefix='alert' data-icon='success' {...props}>
 *    <path d='...'></path>
 * </svg>
 * ```
 */
export default interface SVGIcon extends SVGAttributes<SVGElement> {
	/**
	 * The 'data-prefix' property is only written during initialization.
	 * @param 'data-prefix' - The data-prefix of SVG
	 * @type {string}
	 * @readonly
	 * @example alert
	 */
	readonly 'data-prefix': string;
	/**
	 * The 'data-icon' property is only written during initialization.
	 * @param 'data-icon' - The data-icon of SVG
	 * @type {string}
	 * @readonly
	 * @example success
	 */
	readonly 'data-icon': string;
	/**
	 *  Permit any property starting with 'data-'.
	 * @type {string}
	 * @example data-ui
	 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/data-*
	 */
	[headerName: `data-${string}`]: string;
}
