import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// VUE INTLTELINPUT
// import {ref} from 'vue';
// import {VueTelInput} from 'vue-tel-input';
// import 'vue-tel-input/dist/vue-tel-input.css';


// DATA AOS
// AOS.init();

// import 'vue-flagstrap/dist/vue-flagstrap.css';
// import Flagstrap from 'vue-flagstrap';


// import './css/main.css'

// import 'src/scss/main.scss'

const app = createApp(App)

app.use(createPinia())
// app.use(VueTelInput);
// app.use(window['vue-tel-input']);

app.mount('#app')
