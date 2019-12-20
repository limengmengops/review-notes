import Vue from 'vue';
import Router from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router.js';

Vue.use(Router);
export default ({
    Vue,
    options,
    router
})=>{
    Vue.use(ElementUI);
    // Vue.use(router);
};