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

interface IconParkProps {
  fill: string
  size: string
  theme: string
  type: string
}
const props = defineProps<IconParkProps>()
</script>

<style scoped></style>
