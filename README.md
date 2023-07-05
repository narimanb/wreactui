![image](https://github.com/narimanb/wreactui/assets/37624015/888b81a4-0bb5-49d4-9a25-6720d553d720)

The React UI component library based on Tailwind CSS V3 for fast and accessible development of gorgeous interfaces.

[![codecov](https://codecov.io/gh/narimanb/wreactui/branch/main/graph/badge.svg?token=O0NG9J08NK)](https://codecov.io/gh/narimanb/wreactui) [![Build](https://github.com/narimanb/wreactui/actions/workflows/build.yml/badge.svg)](https://github.com/narimanb/wreactui/actions/workflows/build.yml) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/narimanb/wreactui/blob/main/LICENSE) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/narimanb/wreactui/graphs/commit-activity)

# ![image](https://github.com/narimanb/wreactui/assets/37624015/02864a9c-0b04-41a0-ae64-8795ee9a7279) Install

Install via npm

```sh
npm i -D @narimanb/wreactui
```

Install via yarn

```sh
yarn add -D @narimanb/wreactui
```

# ![image](https://github.com/narimanb/wreactui/assets/37624015/b43f2be3-f0f3-48ea-afb6-1fe8080d7bd6) Configuration

> Add `wreactui` in your `tailwind.config.js` file.

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */

const wreactui = require('@narimanb/wreactui/config');

module.exports = wreactui({
   content: ['./src/**/*.{html,js}'],
   theme: {
       extend: {},
   },
   plugins: [],
});
```

# ![image](https://github.com/narimanb/wreactui/assets/37624015/993d78dc-90cd-4838-9f1c-5d3f635db26d) Usage

Place `Wreactui` at the root of your project (the order doesn't matter, as long as your application is inside).

```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Wreactui } from '@narimanb/wreactui';

ReactDOM.render(
   <Wreactui>
      <App />
   </Wreactui>,

   document.getElementById('root')
);
```

Use components inside your project

```js
import { Button } from '@narimanb/wreactui';

function App() {
   return <Button>Hi there!</Button>;
}

export default App;
```

# ![image](https://github.com/narimanb/wreactui/assets/37624015/d93cfcb4-b403-415a-803a-7e8e2436dc14) Documentation

- [Alert](https://github.com/narimanb/wreactui/wiki/Alert)
- [Avatar](https://github.com/narimanb/wreactui/wiki/Avatar)
- [Backdrop](https://github.com/narimanb/wreactui/wiki/Backdrop)
- [Badge](https://github.com/narimanb/wreactui/wiki/Badge)
- [Button](https://github.com/narimanb/wreactui/wiki/Button)
- [Card](https://github.com/narimanb/wreactui/wiki/Card)
- [Dropdown](https://github.com/narimanb/wreactui/wiki/Dropdown)
- [Helper Text](https://github.com/narimanb/wreactui/wiki/Helper-Text)
- [Input](https://github.com/narimanb/wreactui/wiki/Input)
- [Label](https://github.com/narimanb/wreactui/wiki/Label)
- [Modal](https://github.com/narimanb/wreactui/wiki/Modal)
- [Pagination](https://github.com/narimanb/wreactui/wiki/Pagination)
- [Select](https://github.com/narimanb/wreactui/wiki/Select)
- [Table](https://github.com/narimanb/wreactui/wiki/Table)
- [Textarea](https://github.com/narimanb/wreactui/wiki/Textarea)
- [Transition](https://github.com/narimanb/wreactui/wiki/Transition)
- [Wreactui](https://github.com/narimanb/wreactui/wiki/Wreactui)

# ![image](https://github.com/narimanb/wreactui/assets/37624015/33326609-98d7-42a3-b369-8cf4a63a7543) Examples

dark & light theme

![controls-animate](https://github.com/narimanb/wreactui/assets/37624015/9efa19be-1bcb-4d3e-a866-e8230ed8ce63)

dashboard

![dashboard](https://github.com/narimanb/wreactui/assets/37624015/235e7f89-0d7d-4261-a746-9deb85b6f166)

# ![image](https://github.com/narimanb/wreactui/assets/37624015/34c3eede-5610-4a66-9381-360ba4a3a3af) Development

1. Install Node 18 or later. You can use the package manager of your choice.
2. Clone this repository `git clone https://github.com/narimanb/wreactui.git`.
3. Run `npm ci` to install the dependencies.
4. Run `npm run storybook`
5. It will start a local server at `localhost:6006` with all components rendered.

# ![image](https://github.com/narimanb/wreactui/assets/37624015/955fe5ef-aea1-4ab5-8e77-0408d849259d) History

_Original Project Tailwind CSS V2 [Windmill React UI](https://github.com/estevanmaito/windmill-react-ui)
Projects using it: [Windmill Dashboard React](https://github.com/estevanmaito/windmill-dashboard-react)_
