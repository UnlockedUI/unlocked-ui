<script lang="ts" setup>
import { withTheme } from '@/theme'

export interface FooterProps {
  class?: string
  absolute?: boolean
}

const props = defineProps<FooterProps>()

const styles = withTheme('footer')
const classes = styles
</script>

<script lang="ts">
export default { name: 'u-footer' }
</script>

<template>
  <div :class="[classes.wrapper, props.absolute ? classes.absolute : '']">
    <div :class="classes.container">
      <slot />
    </div>
  </div>
</template>
