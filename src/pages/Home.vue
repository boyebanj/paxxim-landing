<!-- src/pages/Home.vue -->
<template>
  <!-- Hero Section -->
  <HeroSection />
</template>

<script setup>
import { ref } from 'vue'
import HeroSection  from '@/components/HeroSection.vue'
import Button       from '@/components/Button.vue'

const copied = ref('')

function installViaBrew() {
  const cmd = 'brew install paxxim'
  navigator.clipboard.writeText(cmd)
    .then(() => {
      copied.value = `Copied: ${cmd}`
      setTimeout(() => (copied.value = ''), 3000)
    })
    .catch(() => {
      copied.value = 'Failed to copy'
      setTimeout(() => (copied.value = ''), 3000)
    })
}
</script>

<style scoped>
/* Fade-in animations */
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
.animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
.animate-fade-in-up-delay { animation: fadeInUp 0.8s ease-out 0.3s forwards; }

/* Shine effect for announcement link inside HeroSection */
.announcement-link {
  position: relative;
  overflow: hidden;
}
.announcement-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 200%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent);
  transform: skewX(-20deg);
  animation: shine 2.5s ease-in-out infinite;
}
@keyframes shine {
  0% { left: -100%; }
  100% { left: 100%; }
}
</style>