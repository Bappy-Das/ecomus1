<template>
  <breadcrumb></breadcrumb>
  <div class="container mx-auto pt-20">
    <div class="grid grid-cols-4 gap-4">
      <div v-for="i in 9">
        <div>
          <div
            class="relative flex flex-col justify-center items-center group overflow-hidden max-w-[420px]"
          >
            <!-- need to create dynamic image set -->
            <img
              :src="category1"
              class="max-w-[420px] transition-transform duration-500 group-hover:scale-105 group-hover:transition-all group-hover:duration-900 group-hover:shadow-lg"
              alt=""
            />
            <!-- need to set dynamic category  -->
            <div
              class="absolute bottom-7 left-14 px-8 py-2 bg-white text-gray-950 font-semibold rounded group-hover:bg-blue-500 group-hover:text-white transition-all duration-500"
            >
              Category Name
            </div>
            <div
              class="absolute text-center bottom-0 translate-y-full transition-all duration-500 opacity-0 group-hover:translate-y-0 group-hover:opacity-40 bg-gray-100 w-full h-full text-white"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import breadcrumb from "@/components/breadcrumb/index.vue";
import category1 from "@/assets/collection-17.jpg";
</script>

<style scoped></style>
