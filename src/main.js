import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory, } from 'vue-router'
import Home from '@/components/Curriculums/Curriculums.vue'
import Domain from '@/components/Domains/Domains.vue'




const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/domain', name: 'Domain', component: Domain },
]
const router = createRouter({
    routes,
    history: createWebHistory(),
})

createApp(App).use(router).mount('#app')
