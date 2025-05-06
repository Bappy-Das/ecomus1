<template>
  <div>
    <breadcrumb></breadcrumb>
    <div class="container mx-auto py-20">
      <div class="flex flex-col justify-center items-center pb-12">
        <h1 class="capitalize font-medium text-4xl">We are Ecomus</h1>
        <h1 class="py-3 w-5/12 text-center">
          Welcome to our classic women's clothing store, where we believe that
          timeless style never goes out of fashion. Our collection features
          classic pieces that are both stylish and versatile, perfect for
          building a wardrobe that will last for years.
        </h1>
      </div>
      <div class="flex justify-center items-center gap-5 py-20">
        <div class="w-1/2 flex justify-center">
          <img :src="aboutImg" alt="" srcset="" />
        </div>
        <div class="w-1/2">
          <h1 class="capitalize font-medium text-4xl pb-6">Who We are ?</h1>
          <h1 class="py-4 w-8/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            consequuntur quibusdam enim expedita sed nesciunt incidunt accusamus
            adipisci officia libero laboriosam!
          </h1>
          <h1 class="w-8/12">
            Proin gravida nibh vel velit auctor aliquet. nec sagittis sem nibh
            id elit. Duis sed odio sit amet nibh vultate cursus a sit amet
            mauris. Duis sed odio sit amet nibh vultate cursus a sit amet
            mauris.
          </h1>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center bg-gray-100 p-16">
        <h1 class="capitalize font-medium text-4xl">Quality is our priority</h1>
        <h1 class="py-3 w-5/12 text-center">
          Our talented stylists have put together outfits that are perfect for
          the season. They've variety of ways to inspire your next
          fashion-forward look.
        </h1>
        <div class="grid grid-cols-3 gap-8 py-10">
          <div class="flex justify-start items-center flex-col">
            <div class="border rounded-full p-6 mb-4">
              <font-awesome-icon :icon="['fas', 'leaf']" class="text-4xl" />
            </div>
            <h1 class="capitalize font-medium text-xl text-center">
              High-Quality Materials
            </h1>
            <p class="py-3 text-center">
              Crafted with precision and excellence, our activewear is
              meticulously engineered using premium materials to ensure
              unmatched comfort and durability.
            </p>
          </div>
          <div class="flex justify-start items-center flex-col">
            <div class="border rounded-full p-6 mb-4">
              <font-awesome-icon
                :icon="['fab', 'atlassian']"
                class="text-4xl"
              />
            </div>
            <h1 class="capitalize font-medium text-xl text-center">
              Laconic Design
            </h1>
            <p class="py-3 text-center">
              Simplicity refined. Our activewear embodies the essence of
              minimalistic design, delivering effortless style that speaks
              volumes.
            </p>
          </div>
          <div class="flex justify-start items-center flex-col">
            <div class="border rounded-full p-6 mb-4">
              <font-awesome-icon
                :icon="['fas', 'swatchbook']"
                class="text-4xl"
              />
            </div>
            <h1 class="capitalize font-medium text-xl text-center">
              Various Sizes
            </h1>
            <p class="py-3 text-center">
              Designed for every body and anyone, our activewear embraces
              diversity with a wide range of sizes and shapes, celebrating the
              beauty of individuality.
            </p>
          </div>
        </div>
      </div>
    </div>
    <facilities></facilities>
  </div>
</template>

<script setup>
import breadcrumb from "@/components/breadcrumb/index.vue";
import facilities from "@/components/facilities/index.vue";
import aboutImg from "@/assets/about_img.jpg";
</script>

<style scoped></style>
