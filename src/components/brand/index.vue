<template>
  <div class="flex justify-center items-center py-16 px-5">
    <div class="container border border-gray-400 rounded-xl">
      <div class="grid grid-cols-6 items-center">
        <!-- need to develop a slider -->
        <div
          class="h-full border-r-1 border-gray-200 flex items-center justify-center"
        >
          <img :src="brand1" alt="" srcset="" />
        </div>
        <div
          class="h-full border-r-1 border-gray-200 flex items-center justify-center"
        >
          <img :src="brand2" alt="" srcset="" />
        </div>
        <div
          class="h-full border-r-1 border-gray-200 flex items-center justify-center"
        >
          <img :src="brand3" alt="" srcset="" />
        </div>
        <div
          class="h-full border-r-1 border-gray-200 flex items-center justify-center"
        >
          <img :src="brand4" alt="" srcset="" />
        </div>
        <div
          class="h-full border-r-1 border-gray-200 flex items-center justify-center"
        >
          <img :src="brand5" alt="" srcset="" />
        </div>
        <div class="h-full border-gray-200 flex items-center justify-center">
          <img :src="brand6" alt="" srcset="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import brand1 from "@/assets/brand/brand-01.png";
import brand2 from "@/assets/brand/brand-02.png";
import brand3 from "@/assets/brand/brand-03.png";
import brand4 from "@/assets/brand/brand-04.png";
import brand5 from "@/assets/brand/brand-05.png";
import brand6 from "@/assets/brand/brand-06.png";
</script>

<style lang="scss" scoped></style>
