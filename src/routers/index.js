import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/layouts.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("@/pages/Home/index.vue"),
        meta: { pageTitle: "home" },
      },
      {
        path: "/shop",
        name: "shop",
        component: () => import("@/pages/shopPage/index.vue"),
        meta: { pageTitle: "shop" },
      },
      {
        path: "/product",
        name: "product",
        component: () => import("@/pages/productPage/index.vue"),
        meta: { pageTitle: "product" },
      },
      {
        path: "/contact",
        name: "contact",
        component: () => import("@/pages/contactUsPage/index.vue"),
        meta: { pageTitle: "contact" },
      },
      {
        path: "/about",
        name: "about",
        component: () => import("@/pages/aboutUsPage/index.vue"),
        meta: { pageTitle: "contact" },
      },
      {
        path: "/product-details/:id",
        name: "productDetails",
        component: () => import("@/pages/productDetails/index.vue"),
        meta: { pageTitle: "Product Details" },
      },
      {
        path: "/showrooms",
        name: "showrooms",
        component: () => import("@/pages/showroomPage/index.vue"),
        meta: { pageTitle: "Showrooms" },
      },
      {
        path: "/category",
        name: "category",
        component: () => import("@/pages/categoryPage/index.vue"),
        meta: { pageTitle: "category" },
      },
      {
        path: "/cart",
        name: "cartDetails",
        component: () => import("@/pages/cartPage/index.vue"),
        meta: { pageTitle: "Cart" },
      },
      {
        path: "/checkout",
        name: "checkoutPage",
        component: () => import("@/pages/cartPage/checkoutPage.vue"),
        meta: { pageTitle: "Checkout" },
      },
      {
        path: "/payment-cashier",
        name: "paymentCashier",
        component: () => import("@/pages/cartPage/paymentCashier.vue"),
        meta: { pageTitle: "Payment Cashier" },
      },
      // Add a catch-all route for 404 errors
      {
        path: "/:pathMatch(.*)*",
        component: () => import("@/components/errorComponent/NotFound.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // This function will be called before each route navigation
  next(); // Ensure you always call next() to continue with the navigation
});

export default router;
