/** @type {import('eslint').Linter.Config} */
module.exports = {
	ignorePatterns: ['node_modules/**/*'],
	root: true,
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: ['eslint:recommended', 'next', 'plugin:@typescript-eslint/recommended', 'plugin:import/recommended', 'plugin:import/typescript', 'plugin:react-hooks/recommended', 'plugin:react/recommended', 'prettier', 'turbo'],
	parser: '@typescript-eslint/parser',
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: { jsx: true } },
	plugins: ['@typescript-eslint', 'react', 'simple-import-sort'],
	rules: {
		'@typescript-eslint/explicit-function-return-type': 'warn',
		'@typescript-eslint/explicit-member-accessibility': 'error',
		'@typescript-eslint/member-delimiter-style': 'error',
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
		'@typescript-eslint/no-use-before-define': 'error',
		'@typescript-eslint/no-var-requires': 'error',
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'unix'],
		'no-console': ['error', { allow: ['warn', 'error'] }],
		quotes: ['error', 'single'],
		'react/display-name': 'error',
		'react/prop-types': 'error',
		'react/react-in-jsx-scope': 'error',
		semi: ['error', 'always'],
		'simple-import-sort/exports': 'error',
		'simple-import-sort/imports': 'error',
	},
	settings: {
		react: {
			version: 'latest',
		},
	},
};
