<template>
  <div class="min-h-screen container w-75 py-12 px-3 mx-auto">
    <Header></Header>
    <div class="content min-h-1/2 my-8">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Header from '@/views/Header/index.vue'
import Footer from '@/views/Footer/index.vue'
</script>

<style scoped></style>
