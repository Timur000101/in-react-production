import type { Meta, StoryObj } from '@storybook/react'

import { Button, ThemeButton } from './Button'

const meta = {
	title: 'shared/Button',
	component: Button,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {}
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		children: 'Primary Button'
	}
}

export const Clear: Story = {
	args: {
		children: 'Clear Button',
		theme: ThemeButton.CLEAR
	}
}

export const Outline: Story = {
	args: {
		children: 'Outline Button',
		theme: ThemeButton.OUTLINE
	}
}
