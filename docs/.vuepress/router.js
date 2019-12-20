
import Page404 from './components/SpecialLayout'
import Router from 'vue-router';
export const router = [
    {
        path:'/vue/',
        component:Page404
    },
    {
        path:'*',
        component:Page404
    }
];

export default new Router({
    mode: 'history', //后端支持可开
    scrollBehavior: () => ({ y: 0 }),
    routes: router
});