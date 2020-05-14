import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './HelloWorld.vue';
import NotFound from './notfound.vue';
import Aos from './aos.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        }, {
            path: '*',
            component: NotFound
        }, {
            path: '/aos',
            component: Aos
        }
    ]
});

export default router;