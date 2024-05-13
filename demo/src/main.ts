import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.provide('sample', 'my message');
app.mount('#app')