<template>
  <div ref="container" :class="containerClass"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import lottie from 'lottie-web'
const props = defineProps({
  src: { type: Object, required: true },        // imported JSON
  containerClass: { type: String, default: '' }  // e.g. 'mx-auto h-16 w-16'
})
const container = ref(null)
onMounted(() => {
  lottie.loadAnimation({
    container: container.value,
    animationData: props.src,
    loop: true,
    autoplay: true,
  })
})
</script>