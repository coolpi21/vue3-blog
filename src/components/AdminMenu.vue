<template>
  <aside
    class="bg-gradient-to-br to-blue-gray-900 from-blue-gray-800 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0"
  >
    <div class="relative border-b border-white/20">
      <a href="#" class="flex items-center gap-4 py-6 px-8">
        <icon-park
          theme="outline"
          type="workbench"
          size="24"
          fill="#fff"
        ></icon-park>
        <h6
          class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white mb-0"
        >
          C.AI ADMIN PANEL
        </h6>
      </a>
    </div>
    <div class="m-4">
      <ul class="mb-4 flex flex-col gap-1">
        <li v-for="(item, index) in menuList" :key="index">
          <router-link :to="{ name: item.path }" v-slot="{ isActive }">
            <button
              class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
              :class="[
                {
                  'bg-gradient-to-tr to-blue-400 from-blue-600 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40':
                    isActive
                }
              ]"
              type="button"
              style="position: relative; overflow: hidden"
            >
              <icon-park
                :type="item.icon.type"
                :theme="item.icon.theme"
                :size="item.icon.size"
                :fill="item.icon.fill"
              ></icon-park>
              <p
                class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize mb-0"
              >
                {{ item.name }}
              </p>
            </button>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>
<script lang="ts" setup>
// import { IconPark } from '@icon-park/vue-next/es/all'

interface IconItem {
  fill: string
  size: string
  theme: string
  type: string
}
interface MenuItem {
  name: string
  path: string
  icon: IconItem
}

const menuList: MenuItem[] = [
  {
    name: '文章管理',
    path: 'edit-article',
    icon: {
      fill: '#fff',
      type: 'editor',
      theme: 'outline',
      size: '20'
    }
  },
  {
    name: '标签管理',
    path: 'edit-tags',
    icon: {
      fill: '#fff',
      type: 'tag-one',
      theme: 'outline',
      size: '20'
    }
  },
  {
    name: '个人资料',
    path: 'edit-info',
    icon: {
      fill: '#fff',
      type: 'me',
      theme: 'outline',
      size: '20'
    }
  },
  {
    name: '友情链接',
    path: 'edit-links',
    icon: {
      fill: '#fff',
      type: 'link',
      theme: 'outline',
      size: '20'
    }
  }
]
</script>
