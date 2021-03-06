<script lang="ts" setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import { UButton } from '@/components/button'
import { UDropdownItem } from '@/components/dropdown-item'
import { UIcon } from '@/components/icon'
import { withTheme } from '@/theme'

export interface Item {
  text: string
  active?: boolean
  class?: string
  disabled?: boolean
  type?: string
  href?: string
  target?: string
  iconSrc?: string
}

export interface DropdownProps {
  text?: string
  items: Array<Item>
}

const props = defineProps<DropdownProps>()

const styles = withTheme('dropdown')

const classes: any = styles
</script>

<script lang="ts">
export default { name: 'u-dropdown' }
</script>

<template>
  <Menu v-slot="{ open }" as="div" :class="classes.wrapper">
    <MenuButton>
      <slot name="activator">
        <UButton
          type="text"
          size="small"
        >
          {{ text }}
          <template #appendIcon>
            <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
          </template>
        </UButton>
      </slot>
    </MenuButton>

    <div v-show="open">
      <transition :enter-active-class="classes.transition.enterActiveClass" :enter-from-class="classes.transition.enterFromClass" :enter-to-class="classes.transition.enterToClass" :leave-active-class="classes.transition.leaveActiveClass" :leave-from-class="classes.transition.leaveFromClass" :leave-to-class="classes.transition.leaveToClass">
        <slot name="menu">
          <MenuItems :class="classes.menu">
            <div v-for="item in items" :key="item.text">
              <MenuItem v-slot="{ active }" as="div" :disabled="item.disabled">
                <slot :active="active" :item="item">
                  <UDropdownItem
                    :href="item.href"
                    :disabled="item.disabled"
                    :active="active"
                  >
                    <template v-if="item.iconSrc" #prefixIcon>
                      <UIcon :src="item.iconSrc" />
                    </template>
                    <template v-else-if="item.icon" #prefixIcon>
                      <UIcon>
                        {{ item.icon }}
                      </UIcon>
                    </template>
                    {{ item.text }}
                  </UDropdownItem>
                </slot>
              </MenuItem>
            </div>
          </MenuItems>
        </slot>
      </transition>
    </div>
  </Menu>
</template>
