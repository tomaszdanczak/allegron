import { ComponentStory, ComponentMeta } from '@storybook/react'

import MessageBox from './MessageBox'

export default {
  title: 'Components/Atoms/MessageBox',
  component: MessageBox,
} as ComponentMeta<typeof MessageBox>

const Template: ComponentStory<typeof MessageBox> = (args) => <MessageBox {...args} />

export const Error = Template.bind({})
Error.args = {
  children: 'Request failed with status code 500',
  variant: 'error',
}

export const Info = Template.bind({})
Info.args = {
  children: 'Cart is empty',
  variant: 'info',
}

export const Success = Template.bind({})
Success.args = {
  children: 'Delivered at 2022-02-14',
  variant: 'success',
}
