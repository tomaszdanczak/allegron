import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CheckoutSteps from './CheckoutSteps'

export default {
  title: 'Components/Molecules/CheckoutSteps',
  component: CheckoutSteps,
} as ComponentMeta<typeof CheckoutSteps>

const Template: ComponentStory<typeof CheckoutSteps> = (args) => <CheckoutSteps {...args} />

export const Step1 = Template.bind({})
Step1.args = {
  currentStep: 1,
}
