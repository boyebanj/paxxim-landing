<template>
  <!--
    Reusable Button component
    Props:
      - variant: 'primary' | 'secondary' (defaults to 'primary')
      - tag: HTML element or component to render (defaults to 'button')
  -->
  <component
    :is="tag"
    :class="buttonClasses"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'

// Define props for variant and tag
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary'].includes(v),
  },
  tag: {
    type: String,
    default: 'button',
  },
})

// Compute classes based on variant
const buttonClasses = computed(() => [
  'inline-flex items-center justify-center font-semibold rounded-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2 py-2 px-4',
  props.variant === 'primary'
    ? 'bg-accent text-primary-light hover:bg-accent-dark focus:ring-accent'
    : 'bg-transparent border border-neutral-200 text-primary-light hover:bg-neutral-200 focus:ring-neutral-200'
])
</script>

<style scoped>
</style>
