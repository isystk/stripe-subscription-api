import { Meta, Story } from '@storybook/react'
import React from 'react'
import Price from './index'
export default {
  title: '04_organisms/Price',
  component: Price,
} as Meta
const Template: Story = () => {
  return <Price />
}

export const Primary = Template.bind({})
Primary.storyName = 'プライマリ'
Primary.args = {}
