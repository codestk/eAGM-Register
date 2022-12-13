import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import "@formkit/themes/genesis"

import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
const myApp = createApp(App)

myApp.use(plugin, defaultConfig,Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')


