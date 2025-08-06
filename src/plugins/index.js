import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import router from '@/router'

gsap.registerPlugin(ScrollTrigger)

export default (app) => {
  // Vue Router
  app.use(router)

}
