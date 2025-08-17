<!-- src/pages/windows.vue -->
<template>
  <div class="Waitlist_hero__zmOuQ">
    <div class="Waitlist_text__T2GAp">
      <h1>Paxxim for Windows</h1>
      <p>Join the waitlist to get notified when Paxxim is available for Windows.</p>
      <form class="Waitlist_signupForm__nUoeU" @submit.prevent="handleSubmit">
        <div class="Input_outerWrapper__0nCNU">
          <input
            v-model="email"
            placeholder="Email address…"
            required
            data-1p-ignore="true"
            type="email"
            class="Input_input__trG8n"
            name="email"
          />
        </div>
        <button
          type="submit"
          class="Button_button__JJiqJ Button_light__KdYEB"
          aria-disabled="false"
        >
          Join waitlist
        </button>
      </form>
    </div>
    <div style="position:relative">
      <div class="Waitlist_graphic__QVrXt">
        <img
          alt="Windows waitlist logo"
          loading="lazy"
          decoding="async"
          data-1p-ignore="true"
          src="@/assets/images/windows_waitlist.png"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

function handleSubmit() {
  alert(`Thanks! We’ll notify you at ${email.value}`)
  email.value = ''
}
</script>

<style scoped>
</style>
