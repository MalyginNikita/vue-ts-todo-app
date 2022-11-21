import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import ToDo from '../pages/ToDo.vue';
import Home from '../pages/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    { path: '/todo/:id', component: ToDo },
    { path: '/', component: Home },
];

const router = new VueRouter({
    routes,
});

export default router;
