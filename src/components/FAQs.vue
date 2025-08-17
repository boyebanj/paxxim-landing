<template>
  <div class="Container_container__pBLEY Container_md__dbYCi">
    <div class="styles_wrapper__G6caj" id="faqs">
      <div class="SectionTitle_container__qvIRZ styles_title__E8e_A SectionTitle_center__tGgzU">
        <h2>FAQs</h2>
        <p>You’ve got questions. We’ve got answers</p>
      </div>

      <div class="styles_accordion__n2DiM">
        <div
          v-for="(item, idx) in items"
          :key="idx"
          class="styles_accordionPanel__mE3ye"
        >
          <h4
            :id="titleId(idx)"
            class="styles_question__v7hmD"
          >
            <button
              class="styles_accordionTrigger__SBRKl"
              :aria-expanded="isOpen(idx) ? 'true' : 'false'"
              :aria-controls="contentId(idx)"
              @click="toggle(idx)"
              @keydown.space.prevent="toggle(idx)"
              @keydown.enter.prevent="toggle(idx)"
            >
              {{ item.q }}
            </button>
          </h4>

          <div
            class="styles_answer__ac2B8"
            role="region"
            :aria-labelledby="titleId(idx)"
            :aria-hidden="isOpen(idx) ? 'false' : 'true'"
            :id="contentId(idx)"
            v-show="isOpen(idx)"
          >
            <div v-html="item.a" />
          </div>

          <div class="styles_arrowContainer__hI1hX">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" class="icon">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.25 5.75 8 10.25l-4.25-4.5"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type FaqItem = { q: string; a: string }

defineProps<{
  items: FaqItem[]
}>()

const open = ref<Set<number>>(new Set())

function toggle(i: number) {
  const s = new Set(open.value)
  s.has(i) ? s.delete(i) : s.add(i)
  open.value = s
}
const isOpen = (i: number) => open.value.has(i)

const titleId = (i: number) => `faq-title-${i}`
const contentId = (i: number) => `faq-content-${i}`
</script>
