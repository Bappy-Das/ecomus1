<template>
  <breadcrumb></breadcrumb>
  <div class="container mx-auto pt-20">
    <div>
      <div class="embed-map-fixed">
        <div class="embed-map-container">
          <iframe
            class="embed-map-frame"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Simanto%20Somvar%20Market%2C%20Dhanmondi%20Shop%20No%3A%202082&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          >
          </iframe>
          <a
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
          >
          </a>
        </div>
      </div>
    </div>
    <div class="p-20 flex justify-between items-center gap-5">
      <div class="w-1/2">
        <h1 class="text-2xl py-2">Visit Our Store</h1>
        <h1 class="font-bold py-2">Address</h1>
        <h1>66 Mott St, New York, New York, Zip Code: 10006, AS</h1>
        <h1 class="font-bold py-2">Phone</h1>
        <h1>(623) 934-2400</h1>
        <h1 class="font-bold py-2">Email</h1>
        <h1>EComposer@example.com</h1>
        <h1 class="font-bold py-2">Open Time</h1>
        <h1>
          Our store has re-opened for shopping, exchange Every day 11am to 7pm
        </h1>
      </div>
      <div class="flex justify-start items-center w-1/2">
        <form class="w-full">
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Name</label
              >
              <input
                type="text"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Company</label
              >
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="email@email.com"
                required
              />
            </div>
          </div>
          <div>
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Your message</label
            >
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <div
            class="text-center capitalize bg-black rounded text-white py-1.5 mt-10 hover:bg-gray-800 cursor-pointer"
          >
            send
          </div>
        </form>
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
