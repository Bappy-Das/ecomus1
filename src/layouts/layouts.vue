<script setup>
import Header from "@/components/header/index.vue";
import Nav from "@/components/nav/index.vue";
import Footer from "@/components/footer/index.vue";
</script>
<template>
  <div>
    <!-- <Header></Header> -->
    <Nav></Nav>
    <div><router-view /></div>
    <Footer></Footer>
  </div>
</template>
