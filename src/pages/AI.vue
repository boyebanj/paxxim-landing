<template>
  <div id="hero">
    <div class="Hero_container__IvS5M Hero_top__1GsXj Hero_noBackground__Xc4__" style="overflow:hidden">
      <div class="shared_heroBackgroundContainer__3rwV4">
        <img
          alt=""
          fetchpriority="high"
          loading="eager"
          width="2030"
          height="968"
          decoding="async"
          data-nimg="1"
          class="shared_heroBackground___q3Kv"
          style="color:transparent"
          :src="bgUrl"
        />
      </div>

      <div class="hero-marquee_root__iTo8x">
        <div class="Marquee_root___4_CN hero-marquee_marquee__egraA" style="--duration:200s;max-width:1000px;--gap:24px">
          <div class="Marquee_marquee__sPRJ7" style="--gap:64px">
            <div class="Marquee_marqueeGroup__vY44i">
              <div
                v-for="(icon, i) in rows[0]"
                :key="'r1-'+i"
                class="hero-marquee_extensionItem__psVZC"
              >
                <img :alt="icon.alt" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style="color:transparent" :src="icon.src" />
              </div>
            </div>
            <div aria-hidden="true" class="Marquee_marqueeGroup__vY44i">
              <div
                v-for="(icon, i) in rows[0]"
                :key="'r1b-'+i"
                class="hero-marquee_extensionItem__psVZC"
              >
                <img :alt="icon.alt" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style="color:transparent" :src="icon.src" />
              </div>
            </div>
          </div>

          <div class="Marquee_marquee__sPRJ7 Marquee_marqueeReverse__qZAgk" style="--gap:64px">
            <div class="Marquee_marqueeGroup__vY44i">
              <div
                v-for="(icon, i) in rows[1]"
                :key="'r2-'+i"
                class="hero-marquee_extensionItem__psVZC"
              >
                <img :alt="icon.alt" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style="color:transparent" :src="icon.src" />
              </div>
            </div>
            <div aria-hidden="true" class="Marquee_marqueeGroup__vY44i">
              <div
                v-for="(icon, i) in rows[1]"
                :key="'r2b-'+i"
                class="hero-marquee_extensionItem__psVZC"
              >
                <img :alt="icon.alt" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style="color:transparent" :src="icon.src" />
              </div>
            </div>
          </div>

          <div class="Marquee_marquee__sPRJ7" style="--gap:64px;--duration:300s">
            <div class="Marquee_marqueeGroup__vY44i">
              <div
                v-for="(icon, i) in rows[2]"
                :key="'r3-'+i"
                class="hero-marquee_extensionItem__psVZC"
              >
                <img :alt="icon.alt" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style="color:transparent" :src="icon.src" />
              </div>
            </div>
            <div aria-hidden="true" class="Marquee_marqueeGroup__vY44i">
              <div
                v-for="(icon, i) in rows[2]"
                :key="'r3b-'+i"
                class="hero-marquee_extensionItem__psVZC"
              >
                <img :alt="icon.alt" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style="color:transparent" :src="icon.src" />
              </div>
            </div>
          </div>
        </div>

        <div class="hero-marquee_aiIconBlur__ViX5E"></div>
        <div class="hero-marquee_allIconContainer__WzPpk"></div>
        <div class="hero-marquee_aiIconContainer__WzPpk">
          <span class="BrowserExtensionHeader_animateIn__kHazH" style="--offset:36px;--duration:1.2s">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 110 110" width="110" height="110" aria-hidden="true">
              <defs>
                <linearGradient id="gx-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stop-color="#FFD700"/>
                  <stop offset="1" stop-color="#9B7D00"/>
                </linearGradient>
                <mask id="gx-mask" x="0" y="0" width="110" height="110" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                  <g fill="#fff" transform="translate(12 12) scale(2)">
                    <polygon points="6,16 12,10 18,12 16,18 10,20 6,16"/>
                    <polygon points="9,15 13,12 16,15 13,17 11,18 9,15" fill="#000"/>
                    <rect x="4" y="15" width="3" height="0.8" rx="0.4" transform="rotate(-30 5.5 15.4)"/>
                    <rect x="17" y="13" width="3" height="0.8" rx="0.4" transform="rotate(30 18.5 13.4)"/>
                  </g>
                </mask>
              </defs>
              <rect width="110" height="110" fill="url(#gx-grad)" mask="url(#gx-mask)"/>
            </svg>
          </span>
        </div>
      </div>

      <div class="Hero_textBlock__content">
        <h1 class="Hero_title__MD8S5">AI that works<br />with your OS</h1>
        <p class="Hero_subtitle__lede">
          Paxxim AI is your property management assistant — coming soon.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import bgUrl from '@/assets/images/bg.png'

const modules = import.meta.glob('@/assets/images/appicons/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default'
})

const allIcons = Object.keys(modules)
  .sort()
  .map((p) => ({
    src: modules[p],
    alt: p.split('/').pop().replace(/\.(png|jpe?g|webp|svg)$/i, '')
  }))

const rows = computed(() => {
  const perRow = Math.max(1, Math.ceil(allIcons.length / 3))
  const r1 = allIcons.slice(0, perRow)
  const r2 = allIcons.slice(perRow, perRow * 2)
  const r3 = allIcons.slice(perRow * 2)
  const ensure = (arr) => (arr.length < 12 ? [...arr, ...allIcons.slice(0, 12 - arr.length)] : arr)
  return [ensure(r1), ensure(r2), ensure(r3)]
})
</script>

<style>
</style>
