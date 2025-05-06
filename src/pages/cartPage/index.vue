<template>
  <breadcrumb></breadcrumb>
  <div class="container mx-auto pt-10">
    <div class="bg-gray-200 py-8 mb-10 flex justify-center items-center">
      <div class="text-4xl font-semibold border-b-4 border-blue-500 p-2">
        My Cart
      </div>
    </div>
    <div class="flex justify-between items-start gap-5">
      <div class="w-2/3">
        <div
          class="flex flex-row justify-between gap-5 items-center w-full my-5 bg-gray-200 rounded p-3"
        >
          <div></div>
          <div class="font-semibold">Item</div>
          <div class="font-semibold">Details</div>
          <div class="font-semibold">Price</div>
          <div class="font-semibold">Quantity</div>
        </div>
        <div class="flex flex-col justify-center gap-5 items-center">
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
        </div>
      </div>
      <div class="w-1/3">
        <div class="">
          <div class="relative pt-6">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
            ></div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 ps-4 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Promo code"
              required
            />
            <button
              type="submit"
              class="text-white cursor-pointer absolute end-1.5 bottom-1.5 bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-6 py-3"
            >
              Submit
            </button>
          </div>
          <div class="flex justify-between items-center gap-5 pt-5 pb-2">
            <div>Shipping cost</div>
            <div>TBD</div>
          </div>
          <div class="flex justify-between items-center gap-5 py-2">
            <div>Discount</div>
            <div>-$ 0</div>
          </div>
          <div class="flex justify-between items-center gap-5 py-2">
            <div>Tax</div>
            <div>TBD</div>
          </div>
          <hr class="text-gray-200 py-2" />
          <div class="flex justify-between items-center gap-5 font-bold">
            <div>Estimated Total</div>
            <div>$ 39.99</div>
          </div>
        </div>

        <div class="flex justify-end items-center pt-10">
          <router-link to="/checkout">
            <div
              class="bg-blue-500 px-3 py-2 capitalize rounded text-white font-bold hover:bg-rose-500 transition-all duration-500 cursor-pointer"
            >
              proceed to Checkout (1)
            </div>
          </router-link>
        </div>
        <div>
          <h1 class="text-xl font-semibold capitalize">Want to add more</h1>
          <hr />
          <div class="relative pt-6">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
            ></div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 py-2 ps-4 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search by name"
              required
            />
            <button
              type="submit"
              class="text-white absolute end-1 bottom-1 bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-10 py-1.5 cursor-pointer"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import breadcrumb from "@/components/breadcrumb/index.vue";
import CartItem from "./cartItem.vue";
window.scrollTo(0, 0);
</script>

<style lang="scss" scoped></style>
