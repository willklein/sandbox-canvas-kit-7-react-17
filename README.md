# Sandbox: Canvas Kit 7 + React 17

> A little sandbox for testing code mods for upgrades

This README contains some quick notes and references for a meetup talk I prepared for [React Denver](https://github.com/reactdenver).

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[Canvas Kit from Workday](https://canvas.workday.com/) was added for some components to work with.

## Stuff to run

### Canvas Kit Upgrade

Let's bump Canvas Kit to the latest version, and see what happens.

```
npm install -S @workday/canvas-kit-react@8 @workday/canvas-kit-preview-react@8 @workday/canvas-kit-labs-react@8
```

Do things still run?

Check the upgrade guide:

Install the codemod as a dev dependency:

```
npm install -D @workday/canvas-kit-codemod
```

Run the code mod (yarn is easiest):

```
yarn canvas-kit-codemod v8 src
```

Checkout what changed.

### Conventions in ESLint

Tree-shaking with slash imports

Time to explore with astexplorer.net!

#### The rule

```
export const meta = {
  type: 'problem',
  hasSuggestions: true,
  fixable: false,
};

export function create(context) {
  return {
    ImportDeclaration(node) {
      if(node.source.value === '@workday/canvas-kit-react')

      context.report({
        node: node.source,
        message: 'Use a slash import for better tree shaking',
      });
    }
  };
};
```

#### Setting it up locally

Add a way to run ESLint directly by adding this to the `scripts` in `package.json`:

```
"lint": "eslint src"
```

Make sure it works:

```
npm run lint
```

Following the [developer guide](https://eslint.org/docs/latest/developer-guide/working-with-plugins#rules-in-plugins), create a blank rule in `local-eslint-rules/index.js`:

```
module.exports = {
  rules: {
    "use-slash-imports": {
      create: function (context) {
        // rule implementation ...
      },
    },
  },
};
```

Register it in `devDependencies`:

```
"eslint-plugin-local-rules": "file:./local-eslint-rules"
```

Add the rule to the config:

```
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ],
    "plugins": [
      "local-rules"
    ],
    "rules": {
      "local-rules/use-slash-imports": 1
    }
  },
```

Does it work?

```
npm run lint
```

Oh, we need this!

```
npm install
```

Run it again!

```
npm run lint
```

OK, now what? Let's [explore](https://astexplorer.net/).

### React Upgrade

Upgrade React to 18.

Reference: https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#installing

That's insufficient! Try this instead:

```
npm install -S react@18 react-dom@18
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
