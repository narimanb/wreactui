# Windmill React UI & Tailwind CSS V3

__The component library based on Tailwind CSS V3 for fast and accessible development of gorgeous interfaces.__

*Original Project Tailwind CSS V2 [Windmill React UI](https://github.com/estevanmaito/windmill-react-ui)
Projects using it: [Windmill Dashboard React](https://github.com/estevanmaito/windmill-dashboard-react)*

![dashboard](https://github.com/narimanb/windmill-react-ui-tailwindcss-3/assets/37624015/235e7f89-0d7d-4261-a746-9deb85b6f166)

## Mission

Be the most accessible it can be out of the box and the fastest way to production.

[Go to docs to see complete, live examples](https://windmillui.com/react-ui)

## 🚀 Usage

Install

```sh
npm i -D @narimanb/windmill-react-ui-tailwindcss-3
```

Inside `tailwind.config.js`

```js
const windmill = require('@narimanb/windmill-react-ui-tailwindcss-3/config');
module.exports = windmill({
	content: [],
	theme: {
		extend: {},
	},
	plugins: [],
});
```

Then place `Windmill` at the root of your project (the order doesn't matter, as long as your application is inside).

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

## 🔌 Contributing

- Fork
- Clone
- `npm install`
- `npm run storybook`

It will start a local server at `localhost:6006` with all components rendered.
