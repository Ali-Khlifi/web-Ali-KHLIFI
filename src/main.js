import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
import footer from './components/page/footer.vue'



import mitt from 'mitt';
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
import router from "./router"


const emitter = mitt();
const VueApp = createApp(App)

VueApp.config.globalProperties.emitter = emitter;
VueApp.component('vue-sidebar-menu-akahon', VueSidebarMenuAkahon);
VueApp.component('footer', footer)
VueApp.use(router)
VueApp.mount('#app')
