<template>
  <div class="w-full max-w-md mx-auto">
    <!-- Subscription Form -->
    <form
      v-if="!submitted"
      @submit.prevent="subscribe"
      class="flex flex-col sm:flex-row gap-4"
      v-scroll-trigger
    >
      <input
        v-model="email"
        type="email"
        placeholder="Your email"
        required
        class="flex-1 px-4 py-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-accent bg-neutral-50 text-primary-dark"
      />
      <Button type="submit" variant="primary" class="flex-shrink-0">
        Subscribe
      </Button>
    </form>

    <!-- Success Message -->
    <div
      v-else
      class="mt-4 flex items-center justify-center space-x-2 text-accent-dark text-lg font-medium"
      v-scroll-trigger
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
      <span>Thanks! You’re on the list.</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from '@/components/Button.vue'

const email = ref('')
const submitted = ref(false)

function subscribe() {
  // TODO: replace with real API integration
  submitted.value = true
  email.value = ''
}
</script>

<style scoped>
</style>