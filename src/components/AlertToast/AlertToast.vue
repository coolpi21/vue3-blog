<template>
  <div
    class="alert shadow-lg w-36 text-white message fixed left-1/2 -translate-x-1/2 z-50"
    :class="{
      'alert-error': props.alertType === 'error',
      'alert-success': props.alertType === 'success'
    }"
    :style="{ top: props.instanceTop + 'px' }"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current flex-shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          :d="svgPath"
        />
      </svg>
      <span>{{ props.alertText }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  alertText: String,
  alertType: String,
  instanceTop: Number
})

// svg路径
const svgPath = ref<string>('')
if (props.alertType === 'error') {
  svgPath.value =
    'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
}
if (props.alertType === 'success') {
  svgPath.value = 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
}
</script>

<style scoped lang="scss">
.toast-move-up-leave {
  animation-name: MessageMoveOut;
  animation-duration: 0.3s;
}
@keyframes MessageMoveOut {
  0% {
    max-height: 150px;
    //padding: 8px;
    opacity: 1;
  }

  100% {
    max-height: 0;
    //padding: 0;
    opacity: 0;
  }
}
</style>
