import { ComponentStory, ComponentMeta } from '@storybook/react'

import SearchBox from './SearchBox'

export default {
  title: 'Components/Atoms/SearchBox',
  component: SearchBox,
} as ComponentMeta<typeof SearchBox>

const Template: ComponentStory<typeof SearchBox> = (args) => <SearchBox {...args} />

export const OnlyLg = Template.bind({})
OnlyLg.args = {
  onlyLg: true,
}

export const DisplayAlways = Template.bind({})
DisplayAlways.args = {}
