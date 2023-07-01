// eslint-disable-next-line import/extensions
import windmill from './config';

export default windmill({
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {},
	},
	plugins: [],
});
