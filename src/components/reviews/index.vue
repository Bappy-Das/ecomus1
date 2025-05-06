<template>
  <div class="flex justify-center items-center p-5">
    <div class="container">
      <div class="flex flex-col justify-center items-center py-16">
        <h1 class="capitalize font-medium text-4xl">Happy Clients</h1>
        <h1 class="py-3">Hear what they say about us</h1>
      </div>
      <div class="grid grid-cols-3 gap-5">
        <reviewCard></reviewCard>
        <reviewCard></reviewCard>
        <reviewCard></reviewCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import reviewCard from "./reviewCard.vue";
</script>

<style lang="scss" scoped></style>
