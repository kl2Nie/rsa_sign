<template>
  <el-upload
    class="upload"
    drag
    action=""
    multiple
    limit="1"
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      将文件拖到此处，或<em>点击选择</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        仅在浏览器内对文件进行签名，无需消耗流量
      </div>
      <div class="el-upload__tip">
        算法在源代码中已经提供，所有运算都发生在本地
      </div>
    </template>
  </el-upload>
</template>

<script setup>
import { UploadFilled } from '@element-plus/icons-vue'
</script>
