import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import AI         from '@/pages/AI.vue'
import IOS        from '@/pages/IOS.vue'
import Windows        from '@/pages/Windows.vue'
import Landlords      from '@/pages/Landlords.vue'
import Tenants from '@/pages/Tenants.vue'
import Enterprise  from '@/pages/Enterprise.vue'
import Pricing    from '@/pages/Pricing.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/core-features/ai',     component: AI        },
  { path: '/ios',                  component: IOS       },
  { path: '/windows',              component: Windows   },
  { path: '/landlords',            component: Landlords     },
  { path: '/tenants',              component: Tenants},
  { path: '/enterprise',            component: Enterprise },
  { path: '/pricing',              component: Pricing   },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // smoothly scroll to the element matching the hash
      return { el: to.hash, behavior: 'smooth' }
    }
    // fallback to top on normal navigation
    return savedPosition || { top: 0 }
  }
})
