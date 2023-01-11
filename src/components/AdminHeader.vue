<template>
  <nav
    class="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1"
  >
    <div
      class="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center"
    >
      <div class="capitalize">
        <nav class="w-max">
          <ol
            class="mb-0 flex flex-wrap items-center w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all"
          >
            <li
              class="flex items-center text-blue-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-blue-500"
            >
              <router-link to="/admin">
                <p
                  class="mb-0 block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
                >
                  控制台
                </p></router-link
              ><span
                class="text-blue-gray-500 text-sm antialiased font-sans font-normal leading-normal mx-2 pointer-events-none select-none"
                >/</span
              >
            </li>
            <li
              class="flex items-center text-blue-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-blue-500"
            >
              <p
                class="mb-0 block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
              >
                {{ title }}
              </p>
            </li>
          </ol>
        </nav>
        <h6
          class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-0"
        >
          {{ title }}
        </h6>
      </div>
      <div class="flex items-center">
        <button
          class="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
          type="button"
          style="position: relative; overflow: hidden"
          @click="handleShowUserAside"
        >
          <span
            class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          >
            <IconPark
              type="user"
              theme="outline"
              size="20"
              fill="rgb(96,125,139)"
            ></IconPark>
          </span>
        </button>
      </div>
    </div>
  </nav>
</template>
<script lang="ts" setup>
import { IconPark } from '@icon-park/vue-next/es/all'

const route = useRoute()

const title = ref<string>('')
onMounted(() => {
  title.value = route.meta.name as string
})
watch(route, val => {
  title.value = val.meta.name as string
})

const emit = defineEmits(['show-user-aside'])
// 展示用户信息侧边栏
const handleShowUserAside = () => {
  emit('show-user-aside')
}
</script>
