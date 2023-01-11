<template>
  <div>
    <!--    文章内容-->
    <div
      v-for="(item, index) in articleList"
      :key="`article-${index}`"
      class="flex my-2 gap-2 relative"
    >
      <div class="bg-fuchsia-800 w-2" v-if="item.isHighLight"></div>
      <div
        class="title font-bold text-slate-500 text-2xl hover:decoration-sky-700 hover:underline-offset-8 hover:underline hover:decoration-dashed hover:cursor-pointer"
        @click="handleArticleJump"
      >
        {{ item.title }}
      </div>
      <div class="time text-gray-500">{{ item.createTime }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

interface articleListItem {
  title: string
  createTime: string
  isHighLight?: boolean
}

const articleList = [
  {
    title: '2022年终总结',
    createTime: '2023/01/09'
  },
  {
    title: '做了6年程序员，我学到的10条经验',
    createTime: '2023/01/02',
    isHighLight: true
  },
  {
    title: '每个人都能用点正则表达式',
    createTime: '2022/05/01'
  }
] as articleListItem[]

const handleArticleJump = () => {
  router.push({ name: 'article', params: { id: 1 } })
}
</script>

<style scoped lang="scss"></style>
