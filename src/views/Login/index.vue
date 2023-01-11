<template>
  <div class="container h-screen mx-auto">
    <div class="container mx-auto h-full flex justify-center items-center">
      <div class="w-1/3">
        <div
          class="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg"
        >
          <div class="mb-4">
            <label class="font-bold text-grey-darker block mb-2"
              >用户名或邮箱地址</label
            >
            <input
              type="text"
              class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
              placeholder="请输入用户名或邮箱"
            />
          </div>

          <div class="mb-4">
            <label class="font-bold text-grey-darker block mb-2">密码</label>
            <input
              type="text"
              class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
              placeholder="请输入密码"
            />
          </div>

          <div class="flex items-center justify-between">
            <button
              class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
              @click="handleJumpToAdminPanel"
            >
              登录
            </button>

            <a
              class="no-underline inline-block align-baseline font-bold text-sm text-blue hover:text-blue-dark float-right"
              href="#"
            >
              忘记密码？
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const handleJumpToAdminPanel = () => {
  router.push({ name: 'admin' })
}
</script>

<style scoped></style>
