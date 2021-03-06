<script lang="ts" setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { computed, ref } from 'vue'
import { withTheme } from '@/theme'

export interface TooltipProps {
  top?: boolean
  left?: boolean
  right?: boolean
  bottom?: boolean
  hover?: boolean
  click?: boolean
}

const props = withDefaults(defineProps<TooltipProps>(), {
  top: true,
  hover: true,
  click: false,
})

const classes = computed(() => {
  const styles = withTheme('tooltip')
  const object = { ...styles }

  if (props.bottom) {
    object.position = 'top-full mt-2'
    return object
  }

  if (props.left) {
    object.position = 'right-full mr-2'
    return object
  }

  if (props.right) {
    object.position = 'left-full ml-2'
    return object
  }

  if (props.top) {
    object.position = 'bottom-full mb-2'
    return object
  }

  return object
})

const open = ref(false)

let activators: Record<string, (e: Event) => void> = {
  mouseover: (e: Event) => reveal(),
  mouseleave: (e: Event) => reveal(),
}

const clickEvent = {
  click: (e: Event) => reveal(),
}

if (props.click)
  activators = clickEvent

function reveal(time?: number) {
  open.value = !open.value
  if (time)
    setTimeout(reveal, time)
}
</script>

<script lang="ts">
export default { name: 'u-tooltip' }
</script>

<template>
  <Popover class="relative flex flex-col items-center">
    <PopoverButton>
      <slot name="activator" :on="activators" :reveal="reveal">
        Solutions
      </slot>
    </PopoverButton>

    <PopoverPanel v-if="open" static :class="['absolute z-10', classes.position]">
      <slot name="tooltip">
        <div class="px-4 py-2 bg-primary text-textContrast rounded-full text-sm">
          <slot />
        </div>
      </slot>
    </PopoverPanel>
  </Popover>
</template>
