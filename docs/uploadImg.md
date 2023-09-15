```Vue
<script lang="ts" setup>
  import { ref, watch } from 'vue'
  import { IconEdit, IconPlus } from '@arco-design/web-vue/es/icon'
  import { Message } from '@arco-design/web-vue'
  import { APIFileUpload } from '@/api/common'

  const props = defineProps(['url', 'path'])
  const emits = defineEmits(['update:url'])

  const file = ref()
  watch(
    () => props.url,
    (newVal) => {
      file.value = { url: newVal };
    }
  )
  const uploadImage = async (option: any) => {
    const currentFile = option.fileItem.file
    const blob = new Blob([currentFile], {type: "text/plain;charset=utf-8"})
    const formData = new FormData();
    formData.append('file', blob, currentFile.name);
    formData.append('filePath', props.path);
    const { data }: any = await APIFileUpload(formData)

    if (data.code === 200) {
      uploadSuccess(data.data)
    } else {
      uploadError()
    }
  }

  const uploadSuccess = (url: any) => {
    file.value = { url };
    emits('update:url', url)
  }

  const uploadError = () => {
    Message.error(`上传失败`)
  }
</script>

<template>
  <a-space direction="vertical" :style="{ width: '100%' }">
    <a-upload
      :fileList="file ? [file] : []"
      :show-file-list="false"
      :custom-request="uploadImage"
    >
      <template #upload-button>
        <div
          :class="`arco-upload-list-item${
            file && file.status === 'error' ? ' arco-upload-list-item-error' : ''
          }`"
        >
          <div class="arco-upload-list-picture custom-upload-avatar" v-if="file && file.url">
            <img :src="file.url" />
            <div class="arco-upload-list-picture-mask">
              <IconEdit />
            </div>
            <a-progress
              v-if="file.status === 'uploading' && file.percent < 100"
              :percent="file.percent"
              type="circle"
              size="mini"
              :style="{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translateX(-50%) translateY(-50%)',
              }"
            />
          </div>
          <div class="arco-upload-picture-card" v-else>
            <div class="arco-upload-picture-card-text">
              <IconPlus />
            </div>
          </div>
        </div>
      </template>
    </a-upload>
  </a-space>
</template>
```

```JavaScript
/**
 * 文件上传
 * @param file 
 * @returns 
 */
const APIFileUpload = (file: any) => {
  const authStore = useAuthStore()

  return new Promise(reslove => {
    axios.post('http://www.qianmoo.top/admin/file/upload', file, {
      headers: {
        'Authorization': authStore.$state.token,
        'Content-Type': `multipart/form-data; boundary=${file._boundary}`
      }
    }).then(response => {
      reslove(response)
    })
  })
}
```