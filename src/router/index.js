import Vue from "vue";
import VueRouter from "vue-router";
import packet from "@/components/packet";
import engine from "@/components/engine";

Vue.use(VueRouter)
const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path:'/',
            name: "packet",
            component: packet
        },
        {
            path: "/engine",
            name: "engine",
            component: engine
        }
    ]
})

export default router;