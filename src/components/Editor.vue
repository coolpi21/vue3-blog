<template>
  <div class="h-500">
    <QuillEditor
      ref="editor"
      theme="snow"
      v-model:content="contentHTML"
      :modules="modules"
      content-type="html"
      toolbar="full"
    ></QuillEditor>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ImageUploader from 'quill-image-uploader'
const contentHTML = ref<string>('')

const modules = {
  name: 'imageUploader',
  module: ImageUploader,
  options: {
    upload: (file: HTMLInputElement) => {
      console.log(file)
    }
  }
}
</script>

<style scoped></style>
