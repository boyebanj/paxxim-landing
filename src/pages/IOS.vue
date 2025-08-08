<template>
  <div class="Hero_container__IvS5M Hero_bottom__7ty0K Hero_noBackground__Xc4__ ios_hero__aBWj7" style="overflow: hidden;">
    <div class="ios_heroImageContainer__UsqKz">
      <img
        alt="Paxxim for iOS"
        fetchpriority="high"
        loading="eager"
        width="800"
        height="500"
        decoding="async"
        data-nimg="1"
        class="ios_heroImageScreen__YEZsm"
        :src="heroImage"
        style="color: transparent;"
      />
      <div class="ios_heroImageAppIconContainer__FnW85">
        <div>
          <img
            alt="Paxxim for iOS"
            fetchpriority="high"
            loading="eager"
            width="108"
            height="108"
            decoding="async"
            data-nimg="1"
            :src="appIcon"
            style="color: transparent;"
          />
          <img
            alt="Paxxim for iOS"
            fetchpriority="high"
            loading="eager"
            width="108"
            height="108"
            decoding="async"
            data-nimg="1"
            class="ios_heroImageAppIconShadow__wumtw"
            :src="appIcon"
            style="color: transparent;"
          />
          <div class="ios_heroImageAppIconBlur__toxFN"></div>
        </div>
      </div>
    </div>
    <h1 class="Hero_title__MDS85">
      Power of Paxxim, <br />now on iOS.
    </h1>
    <p class="Hero_description__vlCF0">
      <span style="display: inline-block; vertical-align: top; text-decoration: inherit; text-wrap: balance;">
        AI, Notes, Snippets and Quicklinks always with you.
      </span>
    </p>
    <div style="display: flex; justify-content: center; gap: 16px;">
      <a
        class="Button_button__JJiqJ Button_light__KdYEB"
        aria-disabled="false"
        href="https://apps.apple.com/app/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M12.665 15.358c-.905.844-1.893.711-2.843.311-1.006-.409-1.93-.427-2.991 0-1.33.551-2.03.391-2.825-.31C-.498 10.886.166 4.078 5.28 3.83c1.246.062 2.114.657 2.843.71 1.09-.213 2.133-.826 3.296-.746 1.393.107 2.446.64 3.138 1.6-2.88 1.662-2.197 5.315.443 6.337-.526 1.333-1.21 2.657-2.345 3.635zM8.03 3.778C7.892 1.794 9.563.16 11.483 0c.268 2.293-2.16 4-3.452 3.777"
          />
        </svg>
        <span class="download-button_content__GUE_t">
          Get it today <span>App Store</span>
        </span>
      </a>
      <button
        class="Button_button__JJiqJ Button_dark__dyBom"
        aria-disabled="false"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="radix-:r1:"
        data-state="closed"
        @click="handleWatchVideo"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 16"
          width="16"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm-.844-9.88A.75.75 0 0 0 6 5.75v4.5a.75.75 0 0 0 1.156.63l3.5-2.25a.75.75 0 0 0 0-1.26l-3.5-2.25Z"
            clip-rule="evenodd"
          />
        </svg>
        Watch Video
      </button>
    </div>
  </div>
</template>

<script>
import heroImage from '@/assets/images/paxximiOS.png';
import appIcon from '@/assets/images/app-icon.png';

export default {
  name: 'Hero',
  data() {
    return {
      heroImage,
      appIcon,
    };
  },
  methods: {
    handleWatchVideo() {
      // Placeholder for video dialog logic
      console.log('Watch video clicked');
    },
  },
};
</script>

<style scoped>
</style>