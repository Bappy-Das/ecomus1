<template>
  <div>
    <div class="">
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="container mx-auto pt-16 px-5">
      <div>
        <div
          v-if="isShow"
          class="relative mt-10 mb-16 border-1 border-blue-500 p-4 flex justify-between items-center"
        >
          <div class="pl-5">
            " Slim Fit Fine-knit Turtleneck " has been added to your cart.
          </div>
          <router-link to="/cart">
            <div
              class="capitalize bg-blue-500 py-1.5 px-5 rounded text-white cursor-pointer"
            >
              view cart
            </div>
          </router-link>

          <div
            class="absolute top-5 left-[-15px] bg-green-500 text-white px-2 py-1"
          >
            <font-awesome-icon icon="fa-regular fa-circle-check" />
          </div>
        </div>
        <div class="flex justify-center items-start gap-4">
          <div>
            <img :src="productImg" alt="" srcset="" class="rounded" />
          </div>
          <div>
            <h1 class="text-2xl capitalize tracking-wide">
              Slim Fit Fine-knit Turtleneck
            </h1>
            <div class="py-3 text-sm font-bold">
              <span
                class="border-1 border-blue-500 px-4 py-1 rounded font-normal text-sm"
              >
                Best seller
              </span>
              <span class="pl-3"
                >Selling fast! 56 people have this in their carts.</span
              >
            </div>
            <div class="flex justify-start items-center gap-3 py-3">
              <span class="text-2xl font-semibold text-blue-500">$500</span>
              <span class="text-md text-gray-500 font-semibold line-through"
                >$10.00</span
              >
              <span
                class="bg-blue-500 rounded-4xl px-2 py-1 text-white font-bold text-sm"
                >20% off</span
              >
            </div>
            <div class="py-3">
              <span class="bg-black p-1 px-2 text-white rounded">20</span>
              <span class="text-black font-bold text-sm pl-3"
                >People are viewing this right now</span
              >
            </div>
            <div class="text-sm">
              Color: <span class="font-bold">Beige</span>
            </div>
            <div class="flex justify-start items-center gap-1 py-3">
              <div
                class="hover:border-1 w-7 h-7 rounded-full flex justify-center items-center cursor-pointer"
              >
                <div class="w-5 h-5 rounded-full bg-black"></div>
              </div>
              <div
                class="hover:border-1 w-7 h-7 rounded-full flex justify-center items-center cursor-pointer"
              >
                <div class="w-5 h-5 rounded-full bg-blue-500"></div>
              </div>
              <div
                class="hover:border-1 w-7 h-7 rounded-full flex justify-center items-center cursor-pointer"
              >
                <div class="w-5 h-5 rounded-full bg-rose-500"></div>
              </div>
            </div>
            <div class="text-sm">Size: <span class="font-bold">M</span></div>
            <div class="flex justify-start items-center gap-2 py-3">
              <div
                class="border-1 w-10 h-10 border-gray-200 hover:border-gray-900 transition-all duration-200 rounded flex justify-center items-center cursor-pointer uppercase"
              >
                s
              </div>
              <div
                class="border-1 w-10 h-10 bg-blue-500 text-white border-gray-200 hover:border-gray-900 transition-all duration-200 rounded flex justify-center items-center cursor-pointer uppercase"
              >
                m
              </div>
              <div
                class="border-1 w-10 h-10 border-gray-200 hover:border-gray-900 transition-all duration-200 rounded flex justify-center items-center cursor-pointer uppercase"
              >
                l
              </div>
              <div
                class="border-1 w-10 h-10 border-gray-200 hover:border-gray-900 transition-all duration-200 rounded flex justify-center items-center cursor-pointer uppercase"
              >
                xl
              </div>
            </div>
            <h1 class="text-sm font-bold text-gray-700">Quantity</h1>
            <div
              class="flex justify-center items-center gap-5 p-1 my-2 bg-gray-300 w-[8rem] text-black font-bold rounded"
            >
              <span><font-awesome-icon icon="fa-solid fa-minus" /></span>
              <span>1</span>
              <span><font-awesome-icon icon="fa-solid fa-plus" /></span>
            </div>
            <div
              @click="showCart"
              class="bg-blue-500 text-white text-xl font-bold hover:bg-rose-500 cursor-pointer transition-all duration-200 py-2 px-5 text-center rounded-xl"
            >
              Add to cart
              <!-- <span class="absolute right-0">ff</span> -->
            </div>
            <div
              class="flex justify-start items-center gap-4 font-semibold text-sm my-5 text-gray-500 capitalize"
            >
              <div class="hover:text-blue-500 cursor-pointer">
                <font-awesome-icon icon="fa-solid fa-palette" />
                compare color
              </div>
              <div class="hover:text-blue-500 cursor-pointer">
                <font-awesome-icon icon="fa-regular fa-circle-question" />
                Ask a question
              </div>
              <div class="hover:text-blue-500 cursor-pointer">
                <font-awesome-icon icon="fa-solid fa-truck-fast" />
                Delivery & Return
              </div>
              <div class="hover:text-blue-500 cursor-pointer">
                <font-awesome-icon icon="fa-solid fa-square-share-nodes" />
                Share
              </div>
            </div>
            <div class="flex justify-start items-center gap-5">
              <div
                class="border-1 border-gray-200 hover:border-blue-500 transition-all duration-200 cursor-pointer rounded text-sm w-full p-5 flex flex-col justify-center items-center gap-4"
              >
                <font-awesome-icon
                  icon="fa-solid fa-ship"
                  class="text-3xl text-gray-600"
                />
                <p class="font-normal tracking-wide text-center">
                  Estimate delivery times:
                  <span class="font-bold">12-26 days</span>(International),
                  <span class="font-bold">3-6 days</span> (United States).
                </p>
              </div>
              <div
                class="border-1 border-gray-200 hover:border-blue-500 transition-all duration-200 cursor-pointer rounded text-sm w-full p-5 flex flex-col justify-center items-center gap-4"
              >
                <font-awesome-icon
                  icon="fa-solid fa-gift"
                  class="text-3xl text-gray-600"
                />
                <p class="font-normal tracking-wide text-center">
                  Return within <span class="font-bold">30 days</span> of
                  purchase. Duties & taxes are non-refundable.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-gray-200 my-16 p-4">
          <div>
            <ul
              class="flex items-center text-gray-600 border-b-1 border-gray-200 font-bold"
            >
              <li
                class="p-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-500 cursor-pointer text-blue-500 transition-colors duration-300 hover:after:w-full"
              >
                <a href="">Description</a>
              </li>
              <li
                class="p-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-500 cursor-pointer hover:text-blue-500 transition-colors duration-300 hover:after:w-full"
              >
                <a href="">Review</a>
              </li>
              <li
                class="p-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-500 cursor-pointer hover:text-blue-500 transition-colors duration-300 hover:after:w-full"
              >
                <a href="">Shiping</a>
              </li>
              <li
                class="p-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-500 cursor-pointer hover:text-blue-500 transition-colors duration-300 hover:after:w-full"
              >
                <a href="">Return Polocies</a>
              </li>
            </ul>
          </div>
          <div class="p-4">
            <p>
              Button-up shirt sleeves and a relaxed silhouette. It’s tailored
              with drapey, crinkle-texture fabric that’s made from LENZING™
              ECOVERO™ Viscose — responsibly sourced wood-based fibres produced
              through a process that reduces impact on forests, biodiversity and
              water supply.
            </p>
            <div class="flex justify-start items-start">
              <div class="w-1/2">
                <div class="my-5">
                  <h1 class="font-semibold">Features</h1>
                  <ul
                    class="max-w-md space-y-1 text-gray-500 list-disc list-inside"
                  >
                    <li>Front button placket</li>
                    <li>Adjustable sleeve tabs</li>
                    <li>Babaton embroidered crest at placket and hem</li>
                  </ul>
                </div>
                <div class="my-5">
                  <h1 class="font-semibold">Materials Care</h1>
                  <ul
                    class="max-w-md space-y-1 text-gray-500 list-disc list-inside"
                  >
                    <li>Content: 100% LENZING™ ECOVERO™ Viscose</li>
                    <li>Care: Hand wash</li>
                    <li>Imported</li>
                  </ul>
                </div>
              </div>
              <div class="w-1/2 p-5">
                <h1 class="font-semibold">Materials Care</h1>
                <ul
                  class="max-w-md space-y-1 text-gray-500 list-disc list-inside"
                >
                  <li>Machine wash max. 30ºC. Short spin.</li>
                  <li>Iron maximum 110ºC.</li>
                  <li>Do not bleach/bleach.</li>
                  <li>Do not dry clean.</li>
                  <li>Tumble dry, medium hear.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from "@/components/breadcrumb/index.vue";
import productImg from "@/assets/collection-15.jpg";
import { ref } from "vue";
const isShow = ref(false);
const showCart = () => {
  isShow.value = !isShow.value;
};
window.scrollTo(0, 0);
</script>

<style lang="scss" scoped></style>
