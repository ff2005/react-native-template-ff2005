# React Native Template

[![NPM version](https://img.shields.io/npm/v/react-native-template-iso-starter?logo=npm&color=CB0000)](https://www.npmjs.com/package/react-native-template-iso-starter)
[![MIT License](https://img.shields.io/npm/l/react-native-template-iso-starter)](https://opensource.org/licenses/MIT)
[![Node](https://img.shields.io/badge/node-12.14.0-1A5D00?logo=node.js)](https://nodejs.org/)
[![React](https://img.shields.io/badge/react-16.9.0-68D3FC?logo=react)](https://reactjs.org/)
[![React Native](https://img.shields.io/badge/react--native-0.61.5-68D3FC?logo=react)](https://facebook.github.io/react-native/)
[![Typescript](https://img.shields.io/badge/typescript-3.7.3-007ACC?logo=typescript)](https://www.typescriptlang.org/)


> React Native template with some extras.

## Features

- Elegant usage directly within the [React Native CLI](https://github.com/react-native-community/cli).
- Consistent with the default React Native template.
- Additional dependencies: typescript, redux, react-navigation.
- Also: husky, lint-staged, babel-plugin-transform-remove-console.

## Usage

### Node
This template was tested with node v12.14.0 and npm v6.13.4.
If you are using nvm, this template includes a .nvmrc file. Never the less, you can do **`nvm use v12.14.0`** to use / download this version.

More details in https://github.com/nvm-sh/nvm.

### CocoaPods
Do not forget to update / install cocoa Pods doing **`sudo gem install cocoapods`**.

More details in https://guides.cocoapods.org.

### React Native CLI
This template uses the new React Native Community CLI. If you have the legacy CLI installed globally, please uninstall first with **`npm uninstall -g react-native-cli`**.

See notes on this bellow.

### This template
Time for some magic. Let's run.

```sh
npx react-native init MyApp --template react-native-template-iso-starter
```

## Notes

### React Native Legacy CLI
There seems to be quite some confusion about the legacy CLI. This template only works with the new CLI. Make sure you have uninstalled the legacy `react-native-cli` first (`npm uninstall -g react-native-cli`). If you wish, you can also install the new CLI globally (`npm i -g @react-native-community/cli` or `yarn global add @react-native-community/cli`).
Further information can be found here: https://github.com/react-native-community/cli#about


### Libs info
- [react](https://reactjs.org)
- [react-native](https://facebook.github.io/react-native/)
- [typescript](https://www.typescriptlang.org)
- [redux](https://redux.js.org)
- [react-navigation](https://reactnavigation.org)
- [husky](https://github.com/typicode/husky)
- [lint-staged](https://github.com/okonet/lint-staged)
- [babel-plugin-transform-remove-console](https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-remove-console)

### Extra libs that mite be useful

- [async-storage](https://github.com/react-native-community/async-storage)
- [react-native-hooks](https://github.com/react-native-community/react-native-hooks)
- [react-navigation-hooks](https://github.com/react-navigation/hooks)
- [react-navigation-redux-helpers](https://github.com/react-navigation/redux-helpers)

### Curated links
- [React Native Community Github](https://github.com/react-native-community)
- [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)
- [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)
- [React Navigation Stack Navigator](https://reactnavigation.org/docs/en/stack-navigator.html)
- [Publishing to Google Play Store](https://facebook.github.io/react-native/docs/signed-apk-android)
- [Awesome React Native](https://github.com/jondot/awesome-react-native)
- [React Native More Resources](https://facebook.github.io/react-native/docs/more-resources.html)

## Contributing

Contributions are very welcome. Please check out the [contributing document](CONTRIBUTING.md).

## License

This project is [MIT](LICENSE) licensed.
