<template>
  <div
    class="flex justify-between items-center gap-3 w-full bg-gray-100 rounded px-5"
  >
    <div class="">
      <input
        id="default-checkbox"
        type="checkbox"
        value=""
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
      />
    </div>
    <div class="">
      <img :src="collectionImg" alt="" srcset="" class="w-28" />
    </div>
    <div class="">
      <h1>Slim Fit Fine-knit Turtleneck</h1>
      <p>color: <span class="font-bold text-sm capitalize">red</span></p>
      <p>size: <span class="font-bold text-sm capitalize">L</span></p>
      <p class="text-sm">In Stock</p>
    </div>
    <div class="flex flex-col justify-center items-center gap-2">
      <p class="font-bold">$ 220</p>
      <p class="text-sm line-through">$ 20</p>
      <div class="flex justify-center items-center gap-2">
        <font-awesome-icon
          icon="fa-regular fa-heart"
          class="cursor-pointer hover:text-blue-500"
        />
        <font-awesome-icon
          :icon="['far', 'trash-can']"
          class="cursor-pointer hover:text-blue-500"
        />
      </div>
    </div>
    <div class="flex justify-center items-center gap-3 pr-5">
      <div
        class="bg-gray-200 px-3 py-1 rounded hover:text-blue-500 cursor-pointer"
      >
        <font-awesome-icon icon="fa-solid fa-minus" />
      </div>
      <div>1</div>
      <div
        class="bg-gray-200 px-3 py-1 rounded hover:text-blue-500 cursor-pointer"
      >
        <font-awesome-icon icon="fa-solid fa-plus" />
      </div>
    </div>
  </div>
</template>

<script setup>
import collectionImg from "@/assets/collection-15.jpg";
</script>

<style lang="scss" scoped></style>
