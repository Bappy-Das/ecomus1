<template>
  <div>
    <div class="flex flex-col justify-center items-center py-16">
      <h1 class="capitalize font-medium text-4xl">Shop the look</h1>
      <h1 class="py-3">
        Inspire and let yourself be inspired, from one unique fashion to
        another.
      </h1>
    </div>
    <div class="flex justify-center items-center w-full overflow-hidden">
      <img :src="lookbook3" class="w-full" alt="" srcset="" />
      <img :src="lookbook4" class="w-full" alt="" srcset="" />
    </div>
  </div>
</template>

<script setup>
import lookbook3 from "@/assets/lookbook-3.jpg";
import lookbook4 from "@/assets/lookbook-4.jpg";
</script>

<style lang="scss" scoped></style>
