<template>
  <div class="min-h-screen bg-blue-gray-50/50">
    <admin-menu></admin-menu>
    <div class="p-4 xl:ml-80">
      <admin-header @show-user-aside="handleShowUserAside"></admin-header>
      <div class="pt-3 pb-12">
        <router-view></router-view>
      </div>
      <admin-user-info-aside
        v-model:active="asideIsActive"
      ></admin-user-info-aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const asideIsActive = ref<boolean>(false)

const handleShowUserAside = () => {
  asideIsActive.value = true
}
</script>

<style scoped></style>
