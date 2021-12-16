import { createApp } from 'vue'
import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma'
import VCalendar from 'v-calendar';

import { Autocomplete, Notification, Config } from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga-full.css'

import App from './App.vue'
import router from './router'

createApp(App)
    .use(router)
    .use(VCalendar, {})
    .use(Notification).use(Autocomplete)
    .use(Config, {
        iconPack: 'fas'
    })
    .mount('#app')