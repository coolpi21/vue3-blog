<template>
  <h1 class="text-slate-800 font-bold text-3xl mb-4">编辑个人资料</h1>
  <div class="bg-white shadow-cyan-50 rounded-sm p-4">
    <!--    编辑头像-->
    <section>
      <h1 class="text-slate-800 font-bold text-2xl mb-4">编辑头像</h1>
      <div class="flex items-center">
        <div class="mr-4">
          <img
            class="rounded-full w-14 h-14"
            :src="imgSrc"
            alt=""
            width="80"
            height="80"
          />
        </div>
        <form ref="uploadImageRef">
          <input type="file" class="" accept="image/*" @change="uploadImage" />
        </form>
      </div>
    </section>
    <!--    编辑个人简介-->
    <section>
      <h1 class="text-slate-800 font-bold text-2xl my-4">编辑个人简介</h1>
      <Editor :personal-profile="personalProfile" ref="editorRef"></Editor>
    </section>

    <!--    更新按钮区域-->
    <section class="flex justify-end mt-4">
      <button
        type="button"
        class="w-36 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        @click="handleUpdateProfile"
      >
        <span v-if="!isLoading">更新个人资料</span>
        <icon-park
          type="loading-four"
          size="18"
          theme="outline"
          fill="#fff"
          class="rotate-360"
          v-else
        ></icon-park>
      </button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getUserProfile, updateUserProfile } from '@/api/profile'

const { proxy } = getCurrentInstance() as any
const imgSrc = ref<string>('')

const editorRef = ref()
const uploadImageRef = ref()
// 个人简介
const personalProfile = ref<string>('')
// loading状态
const isLoading = ref<boolean>(false)

const requestProfile = async () => {
  const userProfile = await getUserProfile(4)
  personalProfile.value = userProfile.profile
  imgSrc.value = userProfile.avatar
}

onMounted(() => {
  requestProfile()
})

// 更新个人简介
const handleUpdateProfile = async () => {
  if (isLoading.value) return
  isLoading.value = true
  await updateUserProfile(4, {
    avatar: imgSrc.value,
    profile: editorRef.value.contentHTML
  })
  isLoading.value = false
  proxy.$aaa({
    alertType: 'success',
    alertText: '更新成功'
  })
}

// 上传头像
const uploadImage = (e: Event) => {
  const target = e.target as HTMLInputElement

  if (!target.files) throw new Error('上传头像出错')
  if (target.files) {
    const file = target.files['0']
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = result => {
      if (!result.target) throw new Error('获取头像出错')
      if (result.target) {
        imgSrc.value = result.target.result as string
        // 清空头像文件
        uploadImageRef && uploadImageRef.value.reset()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.rotate-360 {
  animation-name: loading;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
