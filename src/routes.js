import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component:() => import('@/pages/homePage.vue'),
    },
    {
        path: "/sobre",
        name: "Sobre",
        component: () => import('@/pages/about.vue'),
    },
    {
        path: "/contato",
        name: "Contato",
        component: () => import('@/pages/contact.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;