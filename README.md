# Windmill React UI & Tailwind CSS V3

**The React component library based on Tailwind CSS V3 for fast and accessible development of gorgeous interfaces.**

[![codecov](https://codecov.io/gh/narimanb/windmill-react-ui-tailwindcss-3/branch/main/graph/badge.svg?token=O0NG9J08NK)](https://codecov.io/gh/narimanb/windmill-react-ui-tailwindcss-3) [![Build](https://github.com/narimanb/windmill-react-ui-tailwindcss-3/actions/workflows/build.yml/badge.svg)](https://github.com/narimanb/windmill-react-ui-tailwindcss-3/actions/workflows/build.yml) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/narimanb/windmill-react-ui-tailwindcss-3/blob/main/LICENSE) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/narimanb/windmill-react-ui-tailwindcss-3/graphs/commit-activity)

![dashboard](https://github.com/narimanb/windmill-react-ui-tailwindcss-3/assets/37624015/235e7f89-0d7d-4261-a746-9deb85b6f166)

## Example dark & light theme

![controls-animate](https://github.com/narimanb/windmill-react-ui-tailwindcss-3/assets/37624015/9efa19be-1bcb-4d3e-a866-e8230ed8ce63)

## ![image](https://github.com/narimanb/windmill-react-ui-tailwindcss-3/assets/37624015/02864a9c-0b04-41a0-ae64-8795ee9a7279) Installation

Install via npm

```sh
npm i -D @narimanb/windmill-react-ui-tailwindcss-3
```

## ![image](https://github.com/narimanb/windmill-react-ui-tailwindcss-3/assets/37624015/b43f2be3-f0f3-48ea-afb6-1fe8080d7bd6) Configuration

> Add `windmill` in your `tailwind.config.js` file.

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */

const windmill = require('@narimanb/windmill-react-ui-tailwindcss-3/config');

module.exports = windmill({
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {},
	},
	plugins: [],
});
```

## ![image](https://github.com/narimanb/windmill-react-ui-tailwindcss-3/assets/37624015/993d78dc-90cd-4838-9f1c-5d3f635db26d) Usage

Place `Windmill` at the root of your project (the order doesn't matter, as long as your application is inside).

```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Windmill } from '@narimanb/windmill-react-ui-tailwindcss-3';

ReactDOM.render(
	<Windmill>
		<App />
	</Windmill>,

	document.getElementById('root')
);
```

Use components inside your project

```js
import { Button } from '@narimanb/windmill-react-ui-tailwindcss-3';

function App() {
	return <Button>Hi there!</Button>;
}

export default App;
```

## ![image](https://github.com/narimanb/windmill-react-ui-tailwindcss-3/assets/37624015/d93cfcb4-b403-415a-803a-7e8e2436dc14) Wiki

- [Alert](https://github.com/narimanb/windmill-react-ui-tailwindcss-3/wiki/Alert)
- [Avatar](https://github.com/narimanb/windmill-react-ui-tailwindcss-3/wiki/Avatar)
- [Backdrop](https://github.com/narimanb/windmill-react-ui-tailwindcss-3/wiki/Backdrop)
- [Badge](https://github.com/narimanb/windmill-react-ui-tailwindcss-3/wiki/Badge)
- [Button](https://github.com/narimanb/windmill-react-ui-tailwindcss-3/wiki/Button)
- [Card](https://github.com/narimanb/windmill-react-ui-tailwindcss-3/wiki/Card)
- [Dropdown](https://github.com/narimanb/windmill-react-ui-tailwindcss-3/wiki/Dropdown)
- [Helper Text](https://github.com/narimanb/windmill-react-ui-tailwindcss-3/wiki/Helper-Text)
- [Input](https://github.com/narimanb/windmill-react-ui-tailwindcss-3/wiki/Input)
- [Label](https://github.com/narimanb/windmill-react-ui-tailwindcss-3/wiki/Label)
- [Modal](https://github.com/narimanb/windmill-react-ui-tailwindcss-3/wiki/Modal)
- [Pagination](https://github.com/narimanb/windmill-react-ui-tailwindcss-3/wiki/Pagination)
- [Select](https://github.com/narimanb/windmill-react-ui-tailwindcss-3/wiki/Select)
- [Table](https://github.com/narimanb/windmill-react-ui-tailwindcss-3/wiki/Table)
- [Textarea](https://github.com/narimanb/windmill-react-ui-tailwindcss-3/wiki/Textarea)
- [Transition](https://github.com/narimanb/windmill-react-ui-tailwindcss-3/wiki/Transition)
- [Windmill](https://github.com/narimanb/windmill-react-ui-tailwindcss-3/wiki/Windmill)

## History

_Original Project Tailwind CSS V2 [Windmill React UI](https://github.com/estevanmaito/windmill-react-ui)
Projects using it: [Windmill Dashboard React](https://github.com/estevanmaito/windmill-dashboard-react)_
