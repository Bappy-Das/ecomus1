<template>
  <div class="px-8 py-16 mx-auto flex justify-center items-start gap-2">
    <div class="w-3/12 bg-rose-300 p-14 rounded">
      <div class="flex justify-center items-center flex-col">
        <img :src="love" alt="" srcset="" />
        <h1 class="tracking-widest pt-5">Only the best</h1>
        <h1
          class="py-5 text-3xl capitalize font-semibold tracking-wider text-gray-800"
        >
          handpicked products
        </h1>
        <h1 class="tracking-widest py-5">Just for you</h1>
        <button class="bg-rose-400 text-white font-bold px-5 py-2">
          view all products
        </button>
      </div>
    </div>
    <div class="w-9/12">
      <div class="grid grid-cols-3 gap-3">
        <div v-for="i in 9" class="rounded group">
          <div class="flex w-full justify-start items-center bg-gray-100">
            <div class="w-1/3 bg-gray-100">
              <div class="bg-gray-100">
                <img :src="product" alt="" class="group-hover:opacity-60" />
              </div>
            </div>
            <div class="w-2/3 h-full bg-gray-100 px-2">
              <h1 class="text-gray-900 font-mono group-hover:text-blue-500">
                V neck full sleeves
              </h1>
              <div class="py-2">
                <span>Categories: </span>
                <span class="text-blue-500 cursor-pointer">albums, music</span>
              </div>
              <hr class="text-gray-300" />
              <div class="flex justify-between items-center px-3 pt-1">
                <div class="text-blue-500 font-semibold">$960</div>
                <div>
                  <font-awesome-icon
                    icon="fa-solid fa-cart-shopping"
                    class="text-gray-600 hover:text-blue-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- navigation -->
      <!-- <div class="flex justify-center items-center pt-10 gap-2">
        <div
          class="bg-gray-500 hover:bg-blue-500 text-white p-2 px-2.5 rounded cursor-pointer"
        >
          <font-awesome-icon icon="fa-solid fa-angle-left" class="text-2xl" />
        </div>
        <div
          class="bg-gray-500 hover:bg-blue-500 text-white p-2 px-2.5 rounded cursor-pointer"
        >
          <font-awesome-icon icon="fa-solid fa-angle-right" class="text-2xl" />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import love from "@/assets/heart.png";
import product from "@/assets/product/pdt4.jpg";
</script>

<style scoped></style>
