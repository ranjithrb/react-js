# React Base folder structure

This structure is built on top of [Create React App](https://github.com/facebook/create-react-app).

## Preferred prerequisites

- Node (>= 12.16.0)
- VS Code (>= v1.41.1)

## VS Code Configurations

### Extensions

- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Modifications required in settings.json

```
{
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true
	},
	"editor.formatOnPaste": true,
	"[javascript]": {
		"editor.formatOnSave": false
	},
	"editor.formatOnSave": true,
	"editor.autoIndent": "full",
	"editor.detectIndentation": false,
	"editor.tabSize": 4,
	"files.trimTrailingWhitespace": true,
}
```

## Please follow the below steps to start the app.

1. yarn install
2. yarn start

Note:

1. Please refer CRA_README.md for CRA related commands.
2. Use either npm or yarn and not both.
