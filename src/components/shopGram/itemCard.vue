<template>
  <div class="relative group overflow-hidden rounded-2xl">
    <img
      :src="gallaryImg1"
      alt=""
      class="rounded-2xl transition-transform duration-800 group-hover:scale-105 group-hover:opacity-70"
    />
    <div
      class="absolute inset-0 flex justify-center items-center bg-transparent bg-opacity-50 text-black font-bold text-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    >
      <div
        class="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center cursor-pointer"
      >
        <font-awesome-icon
          icon="fa-solid fa-bag-shopping"
          class="text-gray-900 text-xl"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import gallaryImg1 from "@/assets/gallery-8.jpg";
</script>

<style lang="scss" scoped></style>
