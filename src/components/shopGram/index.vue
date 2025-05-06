<template>
  <div class="container mx-auto pb-16 px-5">
    <div class="flex flex-col justify-center items-center pb-12">
      <h1 class="capitalize font-medium text-4xl">Shop Gram</h1>
      <h1 class="py-3">
        Inspire and let yourself be inspired, from one unique fashion to
        another.
      </h1>
    </div>
    <div class="grid grid-cols-5 gap-5">
      <ItemCard></ItemCard>
      <ItemCard></ItemCard>
      <ItemCard></ItemCard>
      <ItemCard></ItemCard>
      <ItemCard></ItemCard>
    </div>
  </div>
</template>

<script setup>
import ItemCard from "@/components/shopGram/itemCard.vue";
</script>

<style lang="scss" scoped></style>
