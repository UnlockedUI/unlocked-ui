import type { Meta, Story } from '@storybook/vue3'
import Headline from './headline.vue'

export default {
  component: Headline,
  title: 'Components/Headline',
} as Meta

const Template: Story = args => ({
  components: { Headline },
  setup() { return { args } },
  template: '<Headline v-bind="args"> {{ args.default }} </Headline>',
})

export const Default = Template.bind({})

Default.args = {
  default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}
