<template>
  <IconPark
    :theme="props.theme"
    :size="props.size"
    :fill="props.fill"
    :type="props.type"
  ></IconPark>
</template>

<script setup lang="ts">
import { IconPark } from '@icon-park/vue-next/es/all'

const props = defineProps({
  fill: String,
  size: String,
  theme: String,
  type: String
})
</script>

<style scoped></style>
