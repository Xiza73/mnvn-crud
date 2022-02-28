import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    alias: "/products",
    name: "products",
    component: () => import("@/components/ProductList.vue"),
  },
  {
    path: "/products/new",
    name: "products-new",
    component: () => import("@/components/ProductForm.vue"),
  },
  {
    path: "/products/:id",
    name: "product-details",
    component: () => import("@/components/ProductDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
