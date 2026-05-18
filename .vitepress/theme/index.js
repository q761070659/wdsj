import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import PigGallery from './PigGallery.vue'
import RandomPig from './RandomPig.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('RandomPig', RandomPig)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-features-after': () => h(PigGallery),
      'doc-before': () => h(RandomPig),
      'aside-top': () => h(RandomPig),
    })
  },
}
