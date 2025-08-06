<!-- src/components/HeroSection.vue -->
<template>
  <div class="page_hero__Dwaih relative overflow-hidden">
    <div class="page_heroText___VRvH page_fadeInUp__yDeSr" v-scroll-trigger>
      <h1>Your shortcut to property management.</h1>
      <p class="page_fadeInUpStagger__UbVUU">
        <span style="display:inline-block;vertical-align:top;text-decoration:inherit;text-wrap:balance">
          A collection of powerful tools to streamline rent tracking, tenant management, and maintenance—all in one elegant platform.
        </span>
      </p>
    </div>

    <div class="HeroDownloadInfo_container__QTM_P">
      <div class="HeroDownloadInfo_buttonContainer__jiu_t">
        <a class="Button_button__JJiqJ Button_light__KdYEB" href="#" aria-disabled="false">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
            <path fill="currentColor" d="M12.665 15.358c-.905.844-1.893.711-2.843.311-1.006-.409-1.93-.427-2.991 0-1.33.551-2.03.391-2.825-.31C-.498 10.886.166 4.078 5.28 3.83c1.246.062 2.114.657 2.843.71 1.09-.213 2.133-.826 3.296-.746 1.393.107 2.446.64 3.138 1.6-2.88 1.662-2.197 5.315.443 6.337-.526 1.333-1.21 2.657-2.345 3.635zM8.03 3.778C7.892 1.794 9.563.16 11.483 0c.268 2.293-2.16 4-3.452 3.777"/>
          </svg>
          Download for Web
        </a>
        <router-link class="Button_button__JJiqJ Button_dark__dyBom" to="/windows" aria-disabled="false">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
            <path fill="currentColor" fill-rule="evenodd" d="M0 0h7.584v7.584H0zm8.416 0h7.583v7.584H8.416zm-.832 8.416H0V16h7.584zm.832 0h7.583V16H8.416z" clip-rule="evenodd"/>
          </svg>
          Join Windows waitlist
        </router-link>
      </div>
      <div class="HeroDownloadInfo_sub__uJ70w">
        <span>v1.0.0</span>
        <span>Web & Mobile</span>
        <span>
          <button
            type="button"
            @click="installViaBrew"
          >
            Install via Homebrew
          </button>
        </span>
        <span v-if="copied" class="text-green-400">{{ copied }}</span>
      </div>
    </div>

    <div class="HeroAnnouncement_announcementContainer__hJe_K">
      <div class="HeroAnnouncement_announcementOuter__T5qC1 HeroAnnouncement_animate__T5ctC">
        <router-link ref="announcementButton" class="HeroAnnouncement_announcement__TOQds HeroAnnouncement_x__3wAWd HeroAnnouncement_rotating2__GbW_t" to="/ios">
          <span>Introducing Paxxim for Mobile</span>
          <span class="HeroAnnouncement_muted__SLMsc">
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 4.75 13.25 8m0 0-3.5 3.25M13.25 8H2.75"/>
            </svg>
          </span>
        </router-link>
      </div>
    </div>

    <div class="page_heroBackground__MQqbj absolute inset-0">
      <HeroBackground />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import HeroBackground from '@/components/HeroBackground.vue'

const copied = ref('')
const announcementButton = ref(null)

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

onMounted(() => {
  if (!announcementButton.value) return

  const button = announcementButton.value
  let animationFrameId = null
  let time = 0
  const duration = 4000 // Animation duration in ms (4s)

  function animateGlow() {
    const rect = button.getBoundingClientRect()
    const width = rect.width - 12 // Adjust for glow size
    const height = rect.height - 12
    const perimeter = 2 * (width + height) // Total perimeter length
    const progress = (time % duration) / duration // 0 to 1
    let x, y

    // Calculate position along the perimeter
    const segmentLength = perimeter / 4
    const currentPos = progress * perimeter

    if (currentPos < width) {
      // Top edge
      x = currentPos
      y = 0
    } else if (currentPos < width + height) {
      // Right edge
      x = width
      y = currentPos - width
    } else if (currentPos < 2 * width + height) {
      // Bottom edge
      x = width - (currentPos - (width + height))
      y = height
    } else {
      // Left edge
      x = 0
      y = height - (currentPos - (2 * width + height))
    }

    // Update CSS custom properties
    button.style.setProperty('--x', `${x + 6}px`) // Offset by half glow size
    button.style.setProperty('--y', `${y + 6}px`)
    button.style.setProperty('--r2', `${progress * 360}deg`) // Rotate like Raycast

    time += 16 // ~60fps (16ms per frame)
    animationFrameId = requestAnimationFrame(animateGlow)
  }

  // Start animation
  animateGlow()

  // Handle hover state
  button.addEventListener('mouseenter', () => {
    button.style.setProperty('--glow-intensity', '1.2')
  })
  button.addEventListener('mouseleave', () => {
    button.style.setProperty('--glow-intensity', '0.8')
  })

  // Handle resize to adjust for button size changes
  window.addEventListener('resize', () => {
    button.style.setProperty('--x', '0px')
    button.style.setProperty('--y', '0px')
    time = 0 // Reset animation to avoid position jumps
  })

  // Cleanup
  onUnmounted(() => {
    if (animationFrameId) cancelAnimationFrame(animationFrameId)
    button.removeEventListener('mouseenter', () => {})
    button.removeEventListener('mouseleave', () => {})
    window.removeEventListener('resize', () => {})
  })
})
</script>

<style scoped>
</style>