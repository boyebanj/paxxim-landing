import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollDirection() {
  const direction = ref('up')
  let lastY = window.scrollY

  function onScroll() {
    const currentY = window.scrollY
    direction.value = currentY > lastY ? 'down' : 'up'
    lastY = currentY
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return direction
}