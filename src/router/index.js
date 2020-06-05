import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './HelloWorld.vue';
import NotFound from './notfound.vue';
import Aos from './aos.vue';
import AosSample from './aos-sample';

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
        }, {
            path: '/aos-sample',
            component: AosSample
        }
    ]
});

export default router;