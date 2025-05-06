<template>
  <breadcrumb></breadcrumb>
  <div class="container mx-auto pt-20">
    <h1 class="text-2xl font-semibold">Select Payment Method</h1>
    <hr class="mt-3 text-gray-300" />
    <div class="flex justify-between items-start gap-4 py-3">
      <div class="w-8/12">
        <div class="grid grid-cols-6 justify-center items-center gap-2">
          <div
            class="bg-gray-50 hover:bg-gray-200 cursor-pointer rounded p-4 shadow flex flex-col justify-center items-center gap-5"
          >
            <font-awesome-icon
              :icon="['fas', 'credit-card']"
              class="text-5xl"
            />
            <h1 class="font-semibold text-sm">Credit/Debit Card</h1>
          </div>
          <div
            class="bg-gray-50 hover:bg-gray-200 cursor-pointer rounded p-4 shadow flex flex-col justify-center items-center gap-5"
          >
            <img :src="nagad" class="w-12" alt="" srcset="" />
            <h1 class="font-semibold text-sm">Nagad</h1>
          </div>
          <div
            class="bg-gray-50 hover:bg-gray-200 cursor-pointer rounded p-4 shadow flex flex-col justify-center items-center gap-5"
          >
            <img :src="bkash" class="w-12" alt="" srcset="" />
            <h1 class="font-semibold text-sm">Bkash</h1>
          </div>
          <div
            class="bg-gray-50 hover:bg-gray-200 cursor-pointer rounded p-4 shadow flex flex-col justify-center items-center gap-5"
          >
            <img :src="rocket" class="w-18" alt="" srcset="" />
            <h1 class="font-semibold text-sm">Rocket</h1>
          </div>
          <div
            class="bg-gray-50 hover:bg-gray-200 cursor-pointer rounded p-4 shadow flex flex-col justify-center items-center gap-5"
          >
            <font-awesome-icon
              :icon="['fas', 'money-check-dollar']"
              class="text-5xl"
            />
            <h1 class="font-semibold text-sm">Cash On Delivery</h1>
          </div>
        </div>
        <div class="bg-gray-50 p-5 rounded-md mt-2">
          <h1>Please ensure the following before you proceed:</h1>
          <ul class="list-decimal p-3">
            <li>You have an activated Account</li>
            <li>
              You are able to receive an OTP on your registered Mobile Number
            </li>
            <li>
              You have sufficient balance in your account to carry out the
              transaction
            </li>
          </ul>
          <div class="flex justify-start items-center pt-10">
            <router-link to="/payment-cashier">
              <div
                class="bg-blue-500 px-3 py-2 capitalize rounded text-white font-bold hover:bg-rose-500 transition-all duration-500 cursor-pointer"
              >
                Pay Now
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <div class="w-4/12 p-4 bg-sky-50 shadow-xl rounded-2xl">
        <h1 class="font-bold text-xl text-gray-600 py-2">Order Summary</h1>
        <div class="text-sm">
          <span>Subtotal(1 items and shipping fee included) </span>
          <span>$ 580</span>
        </div>
        <hr class="text-gray-300 mt-3" />
        <div class="flex justify-between items-center py-4 font-bold">
          <span>Total Amount </span>
          <span>$ 580</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import breadcrumb from "@/components/breadcrumb/index.vue";
import nagad from "@/assets/unnamed.jpg";
import bkash from "@/assets/bkash_limited_logo.jpeg";
import rocket from "@/assets/Rocket_mobile_banking_logo.svg.png";
</script>

<style lang="scss" scoped></style>
