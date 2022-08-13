import { createApp } from 'vue'
import App from './App.vue'

import './assets/css/mains.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

createApp(App).mount('#app')