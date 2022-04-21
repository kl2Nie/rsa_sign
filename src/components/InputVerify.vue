<template>
  <el-input
    class="input"
    v-model="textarea"
    :rows="10"
    type="textarea"
    placeholder="请输入公钥，以-----BEGIN PUBLIC KEY-----开头，以-----END PUBLIC KEY-----结尾"
  />
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