<template>
<div>
  <el-input
    class="input"
    v-model="textarea"
    :rows="10"
    type="textarea"
    placeholder="请输入私钥，以-----BEGIN PRIVATE KEY-----开头，以-----END PRIVATE KEY-----结尾"
  />
</div>  
</template>

<script setup>
import { ref } from 'vue'
const textarea = ref('')
</script>

<style scoped>
.input{
    width: 450px;
}
</style>
