<template>
  <div class="Container_container__pBLEY Container_md__dbYCi">
    <PlanHeader 
      title="Property Management, powered by AI" 
      subtitle="Scale your property portfolio with AI solutions for multi-unit management, data-driven insights, and seamless team collaboration."
    />
    <PlanUsedBy />
    <PlanFeatures />
    <Upsell />
    <PlanPricing />
    <PlanDownload />
  </div>
</template>

<script setup lang="ts">
import PlanHeader from '@/components/PlanHeader.vue'
import PlanUsedBy from '@/components/PlanUsedBy.vue'
import PlanFeatures from '@/components/PlanFeatures.vue'
import Upsell from '@/components/Upsell.vue'
import PlanPricing from '@/components/PlanPricing.vue'
import PlanDownload from '@/components/PlanDownload.vue'
</script>
