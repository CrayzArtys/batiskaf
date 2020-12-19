import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Toast from "vue-toastification"
import VueHotkey from 'v-hotkey'
import Clipboard from 'v-clipboard'
import firebase from 'firebase/app'

Vue.use(Clipboard)
Vue.use(Toast);
Vue.use(VueHotkey)

import "vue-toastification/dist/index.css";
import '@babel/polyfill'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
