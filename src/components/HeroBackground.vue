<!-- src/components/HeroBackground.vue -->
<template>
  <canvas ref="canvas" class="w-full h-full block"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const canvas = ref(null)

onMounted(() => {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x000000)

  const camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.set(0, 0, 7)

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    antialias: true,
    alpha: true,
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)

  // Sleek yellow emissive bars
  const material = new THREE.MeshStandardMaterial({
    color: 0xFFEB3B,
    emissive: 0xFFEB3B,
    emissiveIntensity: 0.8,
    transparent: true,
    opacity: 0.85,
  })

  const group = new THREE.Group()
  const count = 15
  for (let i = 0; i < count; i++) {
    const length = THREE.MathUtils.randFloat(1.5, 3.5)
    const thickness = 0.05
    const geometry = new THREE.BoxGeometry(length, thickness, thickness)
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(
      THREE.MathUtils.randFloatSpread(3),
      THREE.MathUtils.randFloatSpread(3),
      THREE.MathUtils.randFloatSpread(1)
    )
    mesh.rotation.set(
      THREE.MathUtils.randFloat(0, Math.PI),
      THREE.MathUtils.randFloat(0, Math.PI),
      THREE.MathUtils.randFloat(0, Math.PI)
    )
    group.add(mesh)
  }
  scene.add(group)

  const ambient = new THREE.AmbientLight(0x444444)
  scene.add(ambient)
  const point = new THREE.PointLight(0xFFEB3B, 1)
  point.position.set(5, 5, 5)
  scene.add(point)

  // Handle resizing
  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('resize', onResize)

  // Initial static render
  renderer.render(scene, camera)

  // Start animation after 2s delay
  let req
  setTimeout(() => {
    const animate = () => {
      group.rotation.x += 0.0015
      group.rotation.y += 0.001
      renderer.render(scene, camera)
      req = requestAnimationFrame(animate)
    }
    animate()
  }, 2000)

  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
    cancelAnimationFrame(req)
    renderer.dispose()
  })
})
</script>

<style scoped>
</style>
