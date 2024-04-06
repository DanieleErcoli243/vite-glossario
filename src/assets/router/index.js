// importo le funzioni da vue-router
import { createRouter, createWebHistory } from 'vue-router';
// importo i componenti che fungono da pagine
import HomePage from '../../components/pages/HomePage.vue';
import DetailPage from '../../components/pages/DetailPage.vue';
import ContactUsPage from '../../components/pages/ContactUsPage.vue';

// definisco le rotte
export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/show', component: DetailPage, name: 'detail' },
        { path: '/contact-us', component: ContactUsPage, name: 'contact-us' },
        { path: '/:pathMatch(.*)*', redirect: '/', name: 'not-found' },
    ]
});

