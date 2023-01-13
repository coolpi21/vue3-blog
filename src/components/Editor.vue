<template>
  <div>
    <QuillEditor
      ref="editor"
      theme="snow"
      v-model:content="contentHTML"
      :modules="modules"
      content-type="html"
      toolbar="minimal"
    ></QuillEditor>
  </div>
</template>

<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import ImageUploader from 'quill-image-uploader'

const props = defineProps({
  personalProfile: {
    type: String,
    default: ''
  }
})

const { personalProfile } = toRefs(props)

// 编辑器内容
const contentHTML = personalProfile
  ? ref<string>(personalProfile.value)
  : ref<string>('')

watch(
  () => props.personalProfile,
  (text: string) => {
    contentHTML.value = text
  }
)
const modules = {
  name: 'imageUploader',
  module: ImageUploader,
  options: {
    upload: (file: HTMLInputElement) => {
      console.log(file)
    }
  }
}

defineExpose({
  contentHTML
})
</script>

<style scoped></style>
