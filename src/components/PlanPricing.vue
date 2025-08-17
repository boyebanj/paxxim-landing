<template>
  <div>
    <div class="page_titleSubtitle__wwaCH">
      <h2>Get started today</h2>
      <p>Choose which Plan suits your organization best.</p>
    </div>

    <div class="SubscriptionIntervalPicker_wrapper__u1Xa4">
      <div class="SubscriptionIntervalPicker_picker__OUG7R">
        <input
          id="pricing-monthly"
          type="radio"
          name="pricing"
          value="month"
          v-model="interval"
        />
        <label for="pricing-monthly">Monthly</label>

        <input
          id="pricing-yearly"
          type="radio"
          name="pricing"
          value="year"
          v-model="interval"
        />
        <label for="pricing-yearly">Yearly</label>

        <div :class="backdropClass"></div>
      </div>
    </div>

    <div class="TeamsPricingInfo_container___H2AO">
      <div class="TeamsPricingInfo_plans__nkRQJ">
        <!-- Free -->
        <div class="TeamsPricingInfo_freePlan__96qcf">
          <strong>Free</strong>
          <span class="TeamsPricingInfo_perMonth__hJOE7">
            <strong>$0</strong>
            <div>
              <p>/ month </p>
              <p>/ user</p>
            </div>
          </span>
          <hr />
          <div>
            <span>What’s included</span>
            <ul class="TeamsPricingInfo_featureList__PoKao">
              <li><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="icon"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.25 5.75s-2.385 2.54-3 4.5l-1.5-1.5m8.5-.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"/></svg></i>Up to 5 Shared Commands</li>
              <li><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="icon"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.25 5.75s-2.385 2.54-3 4.5l-1.5-1.5m8.5-.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"/></svg></i>Up to 30 Shared Quicklinks</li>
              <li><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="icon"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.25 5.75s-2.385 2.54-3 4.5l-1.5-1.5m8.5-.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"/></svg></i>Up to 30 Shared Snippets</li>
              <li><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="icon"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.25 5.75s-2.385 2.54-3 4.5l-1.5-1.5m8.5-.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"/></svg></i>Private Store</li>
            </ul>
          </div>
          <a class="Button_button__JJiqJ Button_light__KdYEB" href="/settings/organizations/new?open=true">Create Organization</a>
        </div>

        <!-- Paid -->
        <div class="TeamsPricingInfo_paidPlan__Bm_oJ">
          <strong>Pro</strong>
          <span class="TeamsPricingInfo_perMonth__hJOE7">
            <strong>${{ price }}</strong>
            <div>
              <p>/ month </p>
              <p>/ user</p>
              <p v-if="isYear" class="TeamsPricingInfo_annualPrice__MC7fD">
                ${{ 12 * prices.team.year }} billed annually
              </p>
            </div>
            <span v-if="isYear" class="TeamsPricingInfo_discount__w6ANr">-{{ discount }}%</span>
          </span>
          <hr />
          <div>
            <span>What’s included</span>
            <ul class="TeamsPricingInfo_featureList__PoKao">
              <li>
                <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="icon"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.25 5.75s-2.385 2.54-3 4.5l-1.5-1.5m8.5-.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"/></svg></i>
                <a href="/pro">Everything in <span>Pro </span></a>
              </li>
              <li><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="icon"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.25 5.75s-2.385 2.54-3 4.5l-1.5-1.5m8.5-.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"/></svg></i>Unlimited Shared Commands</li>
              <li><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="icon"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.25 5.75s-2.385 2.54-3 4.5l-1.5-1.5m8.5-.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"/></svg></i>Unlimited Shared Snippets</li>
              <li><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="icon"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.25 5.75s-2.385 2.54-3 4.5l-1.5-1.5m8.5-.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"/></svg></i>Unlimited Shared Quicklinks</li>
              <li><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="icon"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.25 5.75s-2.385 2.54-3 4.5l-1.5-1.5m8.5-.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"/></svg></i>Private Store</li>
            </ul>
          </div>
          <a class="Button_button__JJiqJ Button_light__KdYEB" href="/settings/organizations/new?open=true">Create Organization</a>
        </div>
      </div>

      <div class="TeamsPricingInfo_bgImg__yA15V"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const prices = ref({
  team: { month: 15, year: 12 }
})

const interval = ref('year')

const isYear = computed(() => interval.value === 'year')
const price  = computed(() => prices.value.team[interval.value])
const discount = computed(() => {
  // 100 - round(year/month * 100)  -> e.g. 20
  const { month, year } = prices.value.team
  return 100 - Math.round((year / month) * 100)
})

const backdropClass = computed(() => [
  'SubscriptionIntervalPicker_selectedBackdrop__oP7xR',
  interval.value === 'year'
    ? 'SubscriptionIntervalPicker_year__JYorx'
    : 'SubscriptionIntervalPicker_month__VKukf'
].join(' '))
</script>
