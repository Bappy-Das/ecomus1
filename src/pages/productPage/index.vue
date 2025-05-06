<template>
  <breadcrumb></breadcrumb>
  <div class="container mx-auto pt-20">
    <div>
      <ul
        class="flex justify-center items-center gap-10 uppercase font-bold text-gray-500"
      >
        <li class="hover:text-blue-500 cursor-pointer text-blue-500">All</li>
        <li class="hover:text-blue-500 cursor-pointer">best</li>
        <li class="hover:text-blue-500 cursor-pointer">sale</li>
        <li class="hover:text-blue-500 cursor-pointer">new</li>
      </ul>
    </div>
    <div class="grid grid-cols-5 gap-4 py-10">
      <div v-for="i in 13">
        <RouterLink to="/product-details/1">
          <productCard :productData="productData"></productCard>
        </RouterLink>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <div
        class="border w-44 py-2 px-4 text-center hover:border-blue-500 hover:text-blue-500 cursor-pointer transition-all duration-300"
      >
        Load More
      </div>
    </div>
  </div>
</template>

<script setup>
import breadcrumb from "@/components/breadcrumb/index.vue";
import productCard from "@/components/product/productCard.vue";
import productImgUpdate from "@/assets/product/pdt21.jpg";
import { ref } from "vue";

const productData = ref({
  id: 1,
  img: productImgUpdate,
  title: "ribbed tank top",
  price: "16.95",
  color: ["black", "red", "green"],
});
</script>

<style lang="scss" scoped></style>
