<template>
  <div class="min-h-screen bg-blue-gray-50/50">
    <admin-menu></admin-menu>
    <div class="p-4 xl:ml-80">
      <admin-header @show-user-aside="handleShowUserAside"></admin-header>
      <router-view></router-view>

    </div>
  </div>
</template>

<script setup lang="ts">

const asideIsActive = ref<boolean>(false)

const handleShowUserAside = () => {
  asideIsActive.value = true
}

const handleHideShowUserAside = () => {
  asideIsActive.value = false
}
</script>

<style scoped></style>
