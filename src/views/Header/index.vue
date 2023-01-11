<template>
  <div class="header flex flex-row justify-between items-center">
    <h1 class="text-6xl font-bold text-slate-700">C.AI's Blog</h1>
    <div class="header-menu flex gap-4 prose prose-zinc">
      <router-link
        :to="{ name: item.path }"
        v-for="item in routerList"
        class="underline text-slate-700 font-bold"
        >{{ item.name }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
interface RouterItemList {
  name: string
  path: string
}

const routerList = [
  {
    name: '文章',
    path: 'blog'
  },
  { name: '关于', path: 'about' }
] as RouterItemList[]
</script>

<style scoped lang="scss"></style>
