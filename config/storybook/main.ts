const config: {
	stories: string[]
	framework: { name: string; options: {} }
	docs: { autodocs: string }
	addons: string[]
	previewHead: (head: string) => string
} = {
	stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions'
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {}
	},
	docs: {
		autodocs: 'tag'
	},
	previewHead: (head) => `
		${head}
		<style>
			@import '../../src/app/styles/index.scss'
		</style>
	`
}

export default config
