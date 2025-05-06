<template>
  <breadcrumb></breadcrumb>
  <div class="container mx-auto pt-10">
    <div class="flex justify-between items-start gap-5">
      <div class="flex flex-col w-full">
        <h1 class="capitalize font-medium text-3xl mb-3">Billing & Shipping</h1>
        <hr class="w-full" />
        <h1 class="py-3">
          Please check if your address's city/zone/area is correct before
          placing an order. If there is a delay in receiving the product due to
          an incorrect address, the responsibility will lie with the customer.
        </h1>
        <form class="">
          <div class="w-full flex justify-between gap-5">
            <div class="mb-5 w-full">
              <label
                for="firstname"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >First Name</label
              >
              <input
                type="text"
                id="firstname"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="First Name"
                required
              />
            </div>
            <div class="mb-5 w-full">
              <label
                for="firstname"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >First Name</label
              >
              <input
                type="text"
                id="firstname"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="First Name"
                required
              />
            </div>
          </div>
          <div class="mb-5 w-full">
            <label
              for="country"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Country / Region</label
            >
            <input
              type="text"
              id="country"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Bangladesh"
              required
            />
          </div>
          <div class="mb-5 w-full">
            <label
              for="city"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >City</label
            >
            <input
              type="text"
              id="city"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Please select your city"
              required
            />
          </div>
          <div class="mb-5 w-full">
            <label
              for="address"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Address</label
            >
            <input
              type="text"
              id="address"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Full Address"
              required
            />
          </div>
          <div class="mb-5 w-full">
            <label
              for="mobile"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Mobile Number</label
            >
            <input
              type="text"
              id="mobile"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="017777777777"
              required
            />
          </div>
          <div class="mb-5 w-full">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Email (Optional)</label
            >
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="email@email.com"
              required
            />
          </div>
          <div class="flex items-center gap-3">
            <div class="">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
              />
            </div>
            <span class="font-bold">Create an account?</span>
          </div>
        </form>
      </div>
      <div class="flex flex-col w-full">
        <h1 class="capitalize font-medium text-3xl mb-3">Cart Items</h1>
        <hr class="w-full" />
        <div>
          <div class="pt-3 pb-1 flex justify-start items-center gap-2">
            <div class="w-1/12 bg-amber-300">
              <img :src="collectionImg" class="w-16" alt="" srcset="" />
            </div>
            <div class="flex flex-col w-8/12 px-4">
              <h1 class="font-bold">Slim Fit Fine-knit Turtleneck</h1>
              <span class="text-sm">size: 42</span>
              <div class="text-sm">Qty: 1</div>
            </div>
            <div class="w-2/12 px-2 font-bold text-sm text-right">$250</div>
          </div>
          <hr class="text-gray-300" />
        </div>
        <div>
          <div class="pt-3 pb-1 flex justify-start items-center gap-2">
            <div class="w-1/12 bg-amber-300">
              <img :src="collectionImg" class="w-16" alt="" srcset="" />
            </div>
            <div class="flex flex-col w-8/12 px-4">
              <h1 class="font-bold">Slim Fit Fine-knit Turtleneck</h1>
              <span class="text-sm">size: 42</span>
              <div class="text-sm">Qty: 1</div>
            </div>
            <div class="w-2/12 px-2 font-bold text-sm text-right">$250</div>
          </div>
          <hr class="text-gray-300" />
        </div>
        <div class="flex justify-between items-center font-bold">
          <div>Sub Total</div>
          <div class="pr-14">$ 500</div>
        </div>
        <div class="py-5">
          <h1 class="capitalize font-medium text-2xl py-3">Shipping Charge</h1>
          <div class="w-full border border-gray-300 rounded-xl">
            <div
              class="border-b-1 p-4 border-gray-300 flex justify-between items-center"
            >
              <div class="flex items-center gap-2">
                <input
                  checked
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0"
                />
                <h1>Inside Dhaka Metro</h1>
              </div>
              <h1>$ 80</h1>
            </div>
            <div class="p-4 flex justify-between items-center">
              <div class="flex items-center gap-2">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0"
                />
                <h1>Outside Dhaka Metro</h1>
              </div>
              <h1>$ 120</h1>
            </div>
          </div>
          <div
            class="border border-gray-300 p-4 rounded-2xl flex justify-between items-center font-bold"
          >
            <div>Total Payable:</div>
            <div class="pr-14">$ 580</div>
          </div>
        </div>
        <div class="flex justify-end items-center pt-10">
          <router-link to="/payment-cashier">
            <div
              class="bg-blue-500 px-3 py-2 capitalize rounded text-white font-bold hover:bg-rose-500 transition-all duration-500 cursor-pointer"
            >
              proceed to Payment
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import breadcrumb from "@/components/breadcrumb/index.vue";
import collectionImg from "@/assets/collection-15.jpg";
</script>

<style lang="scss" scoped></style>
