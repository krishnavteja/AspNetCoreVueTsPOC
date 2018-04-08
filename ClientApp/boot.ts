import './css/site.css';
import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
    { path: '/', component: require('./components/home/home.vue') },
    { path: '/user', component: require('./components/user/user.vue') },
    { name: 'edituser', path: '/user/:id', component: require('./components/user/user.vue') },
    { path: '/users', component: require('./components/users/users.vue') },
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes, linkActiveClass: 'active' }),
    render: h => h(require('./components/app/app.vue'))
});
