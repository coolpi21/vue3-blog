<template>
  <aside
    class="fixed top-0 right-0 z-50 h-screen w-96 bg-white px-2.5 shadow-lg transition-transform duration-300"
    :class="[active ? 'translate-x-0' : 'translate-x-96']"
  >
    <div class="flex items-start justify-between px-6 pt-8 pb-6">
      <div>
        <h5
          class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900"
        >
          个人面板
        </h5>
        <p
          class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600"
        >
          编辑资料
        </p>
      </div>
      <button
        class="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
        type="button"
        style="position: relative; overflow: hidden"
        @click="handleHideShowUserAside"
      >
        <span
          class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
        >
          <icon-park
            type="close"
            theme="outline"
            size="24"
            fill="rgb(96,125,139)"
          ></icon-park>
        </span>
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
const props = defineProps({
  active: {
    type: Boolean,
    default: false
  }
})
const { active } = toRefs(props)
const emits = defineEmits(['update:active'])

const handleHideShowUserAside = () => {
  emits('update:active', false)
}
</script>

<style scoped></style>
