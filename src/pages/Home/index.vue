<script setup>
import Banner from "@/components/banner/index.vue";
import ShopByCategory from "@/components/categoryCard/shopByCategory.vue";
import BestSeller from "@/components/product/bestSeller.vue";
import ShopTheLook from "@/components/shopTheLook/index.vue";
import Brand from "@/components/brand/index.vue";
import Review from "@/components/reviews/index.vue";
import ShopGram from "@/components/shopGram/index.vue";
import Facilities from "@/components/facilities/index.vue";
import ClassicFasion from "@/components/classicFasion/index.vue";
import HandPickProducts from "@/components/handPickProducts/index.vue";
</script>

<template>
  <Banner></Banner>
  <ShopByCategory></ShopByCategory>
  <BestSeller></BestSeller>
  <ClassicFasion></ClassicFasion>
  <HandPickProducts></HandPickProducts>
  <ShopTheLook></ShopTheLook>
  <Review></Review>
  <Brand></Brand>
  <ShopGram></ShopGram>
  <Facilities></Facilities>
</template>

<style scoped></style>
