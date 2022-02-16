import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './Button'

export default {
  title: 'Components/Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const FullWidth = Template.bind({})
FullWidth.args = {
  text: 'Add to cart',
}

export const Disabled = Template.bind({})
Disabled.args = {
  text: 'Add to cart',
  disabled: true,
}
