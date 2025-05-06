<template>
  <div class="px-8 py-16">
    <div class="uppercase font-bold py-5">Shop by categories</div>
    <div>
      <div>
        <swiper
          :slidesPerView="4"
          :spaceBetween="30"
          :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
          }"
          :loop="true"
          :modules="[Autoplay, Pagination]"
          class="mySwiper"
        >
          <swiper-slide v-for="i in 6">
            <ItemCard></ItemCard>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import ItemCard from "./index.vue";

import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Pagination } from "swiper/modules";
</script>

<style lang="scss" scoped></style>
