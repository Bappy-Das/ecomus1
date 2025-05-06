<template>
  <breadcrumb></breadcrumb>
  <div class="container mx-auto pt-10">
    <div class="py-5 text-3xl font-semibold">Show our all showroom</div>
    <div class="flex items-start gap-5">
      <div class="w-4/12">
        <div v-for="i in 4" class="flex justify-center items-center gap-5">
          <div
            class="inset-shadow-sm p-4 rounded-xl bg-gray-100 m-2 hover:bg-gray-200 transition-all duration-200"
          >
            <h1 class="text-xl font-bold text-gray-600">Dhanmondi Showroom</h1>
            <div class="flex justify-start items-start gap-2 py-2">
              <font-awesome-icon
                :icon="['fas', 'location-dot']"
                class="pt-1.5"
              />
              <p class="w-10/12">
                Simanto Somvar Market, Dhanmondi Shop No: 2082, Level 2.
              </p>
            </div>
            <div
              class="capitalize bg-gray-300 cursor-pointer w-[150px] rounded text-center py-1 mt-2"
            >
              viewing on map
            </div>
          </div>
        </div>
      </div>
      <div class="w-8/12 bg-white p-3 rounded-xl">
        <div class="embed-map-fixed">
          <div class="embed-map-container">
            <iframe
              class="embed-map-frame"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Simanto%20Somvar%20Market%2C%20Dhanmondi%20Shop%20No%3A%202082&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            ></iframe
            ><a
              href="https://sprunkiretake.net"
              style="
                font-size: 2px !important;
                color: gray !important;
                position: absolute;
                bottom: 0;
                left: 0;
                z-index: 1;
                max-height: 1px;
                overflow: hidden;
              "
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import breadcrumb from "@/components/breadcrumb/index.vue";
</script>

<style scoped>
.embed-map-fixed {
  position: relative;
  text-align: right;
  width: 100%;
  height: 500px;
}
.embed-map-container {
  overflow: hidden;
  background: none !important;
  width: 100%;
  height: 500px;
  border-radius: 5px;
}
.embed-map-frame {
  width: 100% !important;
  height: 500px !important;
}
</style>
