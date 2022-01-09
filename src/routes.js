import {createWebHistory, createRouter} from "vue-router";

const routes = [
    {
        name: "Home",
        path: "/",
        component: () => import("@/pages/Home")
    },
    {
        name: "Terms & Conditions",
        path: "/t&c",
        component: () => import("@/pages/TandC")
    },
    {
        name: "FAQ",
        path: "/faq",
        component: () => import("@/pages/Faq")
    },
    {
        name: "Privacy Policy",
        path: "/privacy",
        component: () => import("@/pages/Privacy")
    },
    {
        name: "subscription",
        path: "/subscription",
        component: () => import("@/pages/Subscription")
    },
    {
        name: "Contact",
        path: "/contact",
        component: () => import("@/pages/Contact")
    },
    {
        name: "404",
        path: "/:catchAll(.*)",
        component: () => import("@/pages/E404")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
