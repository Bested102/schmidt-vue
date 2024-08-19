import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import BlogView from "@/views/BlogView.vue";
import ContactView from "@/views/ContactView.vue";
import WorksView from "@/views/WorksView.vue";
import experiencesView from "@/views/ExperiencesView.vue";
import ServicesView from "@/views/ServicesView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/about-us",
      name: "About Us",
      component: AboutView,
    },
    {
      path: "/services",
      name: "Services",
      component: ServicesView,
    },
    {
      path: "/experiences",
      name: "Experiences",
      component: experiencesView,
    },
    {
      path: "/works",
      name: "Works",
      component: WorksView,
    },
    {
      path: "/blog",
      name: "Blog",
      component: BlogView,
    },
    {
      path: "/contact",
      name: "Contact",
      component: ContactView,
    },
    {
      path:"/:catchAll(.*)",
      redirect:"/"
    }
  ],
});

export default router;
