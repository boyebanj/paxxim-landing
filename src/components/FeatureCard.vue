<template>
  <div
    class="bg-neutral-50 rounded-lg shadow-lg p-6 text-center
           transition-transform transition-shadow duration-300
           hover:-translate-y-1 hover:shadow-2xl"
    v-scroll-trigger
  >
    <div class="mb-4">
      <img :src="icon" :alt="title" class="mx-auto h-16 w-16" />
    </div>
    <h3 class="font-semibold text-xl mb-2 text-primary-dark">{{ title }}</h3>
    <p class="text-neutral-600">{{ description }}</p>
  </div>
</template>

<script setup>
import LottiePlayer from '@/components/LottiePlayer.vue'

const props = defineProps({
  icon: String,
  title: String,
  description: String,
})

// If this is the Maintenance card, swap icon for Lottie
const isMaintenance = props.icon.includes('maintenance')
let maintenanceAnim = null
if (isMaintenance) {
  maintenanceAnim = await import('@/assets/animations/maintenance.json')
}
</script>