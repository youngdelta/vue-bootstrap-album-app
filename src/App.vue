<template>
  <div class="app">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup>
import Header from './page/Header.vue';
import Footer from './page/Footer.vue';
</script>
